import math
import re
from typing import Any, Iterable, List, NamedTuple, Tuple, Union
import xml.etree.ElementTree as etree

import geojson as geo
import networkx as nx


EARTH_RADIUS = 6378137  # In meters
MERCATOR_WIDTH = 2.5 * EARTH_RADIUS
DEGREES_PER_RADIAN = 180 / math.pi
LONGITUDE_FACTOR = DEGREES_PER_RADIAN / EARTH_RADIUS
LONGITUDE_OFFSET = 0
LATITUDE_FACTOR = 2 * DEGREES_PER_RADIAN
LATITUDE_OFFSET = -90


Point2D = Tuple[float, float]


def split_points(points: str) -> List[Point2D]:
    point_list = [point.split(',') for point in points.strip().split(' ')]
    return [(float(x), float(y)) for x, y in point_list]


class BoundingBox(NamedTuple):
    minx: float
    miny: float
    maxx: float
    maxy: float

    @classmethod
    def from_points(cls, points: Iterable[Iterable[float]]) -> 'BoundingBox':
        minx = miny = math.inf
        maxx = maxy = -math.inf
        for x, y in points:
            if x < minx:
                minx = x
            elif x > maxx:
                maxx = x
            if y < miny:
                miny = y
            elif y > maxy:
                maxy = y
        return cls(minx, miny, maxx, maxy)

    @classmethod
    def from_graph(cls, graph: nx.Graph,
                   attribute: Union[str, Tuple[str, str]] = 'pos') -> 'BoundingBox':
        if isinstance(attribute, str):
            def split(point: str) -> Iterable[float]:
                return map(float, point.split(','))
            points = (split(p) for _n, p in graph.nodes.data(attribute))
        else:
            x = attribute[0]
            y = attribute[1]
            points = ((float(data[x]), float(data[y]))
                      for _n, data in graph.nodes.data())
        return cls.from_points(points)

    def diff(self) -> Point2D:
        return self.maxx - self.minx, self.maxy - self.miny


def to_mercator(x: float, y: float, bounds: BoundingBox) -> Point2D:
    diffx, diffy = bounds.diff()
    merc_x = MERCATOR_WIDTH * ((x - bounds.minx) / diffx - 0.5)
    merc_y = -MERCATOR_WIDTH * ((y - bounds.miny) / diffy - 0.5)
    return merc_x, merc_y


def to_lnglat(x: float, y: float) -> Point2D:
    lng = LONGITUDE_FACTOR * x + LONGITUDE_OFFSET
    lat = LATITUDE_FACTOR * \
        math.atan(math.exp(y / EARTH_RADIUS)) + LATITUDE_OFFSET
    return lng, lat


class MapPoint(NamedTuple):
    x: float
    y: float

    @classmethod
    def make(cls, x: float, y: float, config: dict) -> 'MapPoint':
        if config.get('projected', False):
            merc_x, merx_y = to_mercator(x, y, config['bounds'])
            x, y = to_lnglat(merc_x, merx_y)
        return cls(x, y)

    @property
    def __geo_interface__(self) -> Any:
        return { 'type': 'Point', 'coordinates': (self.x, self.y) }


def polygon_area(points: List[Point2D]) -> float:
    area = 0
    x1, y1 = points[-1]
    for x2, y2 in points:
        area += x2 * y1 - y2 * x1
        x1, y1 = x1, x2
    return abs(area / 2)


def make_node(graph: nx.Graph, id: Any,
              x: float, y: float, config: dict, *,
              properties: dict = None) -> geo.Feature:
    point = MapPoint.make(x, y, config)
    props = graph.nodes[id].copy()
    props.update(properties or {})
    return geo.Feature(f'node{id}', point, props)


def make_edge(graph: nx.Graph, src: Any, dest: Any,
              points: Iterable[Point2D], level: int,
              config: dict, *, properties: dict = None) -> geo.Feature:
    id = f'edge{src}{dest}'
    labels = graph.nodes.data('label', default='')
    line = geo.LineString([MapPoint.make(x, y, config) for x, y in points])
    props = properties.copy() if properties else {}
    props.update({
        'src': src,
        'dest': dest,
        'label': f'{labels[src]} -- {labels[dest]}',
        'weight': '', # graph.edges[src][dest].get('weight', ''),
        'level': level
    })
    return geo.Feature(id, line, props)


def make_polygon(graph: nx.Graph, id: Any, points: Iterable[Point2D],
                 config: dict, *, properties: dict = None) -> geo.Feature:
    coordinates = [MapPoint.make(x, y, config) for x, y in points]
    polygon = geo.Polygon(coordinates)
    area = polygon_area(coordinates)
    props = properties.copy() if properties else {}
    props.update({
        'label': str(area),
        'area': area
    })
    return geo.Feature(f'cluster{id}', polygon, props)


def make_polyline(graph: nx.Graph, id: Any, points: Iterable[Point2D],
                  config: dict, *, properties: dict = None) -> geo.Feature:
    coordinates = [MapPoint.make(x, y, config) for x, y in points]
    line = geo.LineString(coordinates)
    area = polygon_area(coordinates)
    props = properties.copy() if properties else {}
    props.update({
        'label': str(area),
        'area': area
    })
    return geo.Feature(f'line{id}', line, props)


def process(graph: nx.Graph, tree: etree.ElementTree,
            projected=True) -> Tuple[Any, Any, Any, Any]:
    root = tree.getroot()
    bounds = BoundingBox.from_graph(graph)
    config = {'projected': projected, 'bounds': bounds}
    edge_path_regex = re.compile('[mdc]', re.I)
    nodes: List[geo.Feature] = []
    edges: List[geo.Feature] = []
    clusters: List[geo.Feature] = []
    boundaries: List[geo.Feature] = []

    for child in root.findall('*[@id="graph0"]/*'):
        tag = child.tag
        if 'polygon' in tag:
            points = split_points(child.attrib.pop('points'))
            polygon = make_polygon(graph, len(clusters),
                                   points, config, properties=child.attrib)
            clusters.append(polygon)
        elif 'polyline' in tag:
            points = split_points(child.attrib.pop('points'))
            polyline = make_polyline(graph, len(boundaries),
                                     points, config, properties=child.attrib)
            boundaries.append(polyline)
        elif tag == '{http://www.w3.org/2000/svg}g':
            if child.attrib['class'] == 'node':
                id = child[0].text
                x = float(child[2].attrib.pop('x'))
                y = float(child[2].attrib.pop('y'))
                node = make_node(graph, id, x, y, config)
                nodes.append(node)
            elif child.attrib['class'] == 'edge':
                src, dest = child[0].text.split('--')
                points = split_points(
                    re.sub(edge_path_regex, ' ', child[1].attrib.pop('d')).strip())
                edge = make_edge(graph, src, dest, points, 1,
                                 config, properties=child[1].attrib)
                edges.append(edge)

    return (geo.FeatureCollection(nodes), geo.FeatureCollection(edges),
            geo.FeatureCollection(clusters[1:]), geo.FeatureCollection(boundaries))
