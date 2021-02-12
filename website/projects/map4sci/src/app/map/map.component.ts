import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';

import { Map, Style, MapMouseEvent } from 'mapbox-gl';
import Minimap from './mapboxgl-minimap.js';
import { Cartesian2dBounds, Cartesian2dProjection } from './cartesian-2d-projection';
import { EdgesGeojson } from './edges-geojson'

export interface Edge {
  level: number,
  zoom: number,
  color?: string,
  width?: number,
  opacity?: number,
  borderOpacity?: number,
  borderColor?: string,
  borderWidth?: number
};
interface Node {
  level: number,
  zoom: number,
  fontSize: number
};
interface Cluster {
  fillOpacity: number,
  borderLineWidth: number,
  borderLineOpacity: number,
  borderLineMinZoom: number
};

type ZoomLevel = [number, number, number];
interface MiniMapOptions {
  id: number | string,
  width: string,
  height: string,
  style: Style,
  center: [number, number],
  zoom: number,
  containerStyles: string,
  zoomAdjust: null | Function,
  zoomLevels: ZoomLevel[],
  edgeColor: string,
  edgeWidth: number,
  edgeOpacity: number,
  fillColor: string,
  fillOpacity: number,
  dragPan: boolean,
  scrollZoom: boolean,
  boxZoom: boolean,
  dragRotate: boolean,
  keyboard: boolean,
  doubleClickZoom: boolean,
  touchZoomRotate: boolean
};

type PopupContent = (string | [string, Function])[];
interface Popup {
  layer: string,
  content: PopupContent
};
interface Sources {
  nodes: string,
  edges: string,
  clusters: string,
  clusterBoundaries: string,
  allEdges?: string
};
interface Configuration {
  minZoom: number,
  maxZoom: number,
  initialZoom: number,
  textOverlapEnabledZoom: number,
  sources: Sources,
  edges: Edge[],
  nodes: Node[],
  clusters: Cluster,
  popups?: Popup[],
  minimapOptions?: any
};

const blankStyle: Style = {
  'version': 8,
  'name': 'Blank',
  'center': [
    0,
    0
  ],
  'zoom': 0,
  'sources': {},
  'sprite': 'https://cdn.jsdelivr.net/gh/lukasmartinelli/osm-liberty@gh-pages/sprites/osm-liberty',
  'glyphs': 'https://cdn.jsdelivr.net/gh/orangemug/font-glyphs@gh-pages/glyphs/{fontstack}/{range}.pbf',
  'layers': [
    {
      'id': 'background',
      'type': 'background',
      'paint': {
        'background-color': 'red'
      }
    }
  ]
};
const defaultMinimapOptions: MiniMapOptions = {
  id: 'mapboxgl-minimap',
  width: '320px',
  height: '180px',
  style: blankStyle,
  center: [0, 0],
  zoom: 0,

  containerStyles: `
    border: 1px solid lightgray;
    border-radius: 5px;
    -webkit-box-shadow: 3px 3px 5px 4px #00000021;
    -moz-box-shadow: 3px 3px 5px 4px #00000021;
    box-shadow: 3px 3px 5px 4px #00000021;
  `,

  // should be a function; will be bound to Minimap
  zoomAdjust: null,

  // [a, b, c]
  // if parent map zoom >= a, and minimap zoom >= b, set minimap zoom to c
  // must be defined from most zoomed in rule, to least zoomed in rule.
  zoomLevels: [
    [9, 3, 4],
    [8, 2, 3],
    [6, 0, 2]
  ],

  edgeColor: '#08F',
  edgeWidth: 1,
  edgeOpacity: 1,

  fillColor: '#F80',
  fillOpacity: 0.25,

  dragPan: false,
  scrollZoom: false,
  boxZoom: false,
  dragRotate: false,
  keyboard: false,
  doubleClickZoom: false,
  touchZoomRotate: false
};
const defaultNodes: Node[] = [
  { level: 0, zoom: 0.0, fontSize: 0 },
  { level: 1, zoom: 0.0, fontSize: 20 },
  { level: 2, zoom: 4.5, fontSize: 18 },
  { level: 3, zoom: 5.0, fontSize: 18 },
  { level: 4, zoom: 5.5, fontSize: 16 },
  { level: 5, zoom: 6.0, fontSize: 16 },
  { level: 6, zoom: 6.2, fontSize: 14 },
  { level: 7, zoom: 6.5, fontSize: 14 },
  { level: 8, zoom: 6.7, fontSize: 12 },
  { level: 9, zoom: 7.5, fontSize: 12 },
];
const defaultEdges: Edge[] = [
  { level: 0, zoom: 0, color: '', width: 0, opacity: 0.0, borderOpacity: 0.0, borderColor: '', borderWidth: 0 },
  { level: 1, zoom: 1.5, color: '#FFEBA1', width: 3.2, opacity: 1.0, borderOpacity: 1.0, borderColor: 'yellow', borderWidth: 1.2 },
  { level: 2, zoom: 3.5, color: '#FFEBA1', width: 3, opacity: 1.0, borderOpacity: 1.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 3, zoom: 4.5, color: '#F9D776', width: 2.7, opacity: 0.9, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 4, zoom: 5.0, color: '#c1b276', width: 2.7, opacity: 0.9, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 5, zoom: 5.4, color: '#94895f', width: 2.2, opacity: 0.8, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 6, zoom: 5.7, color: '#615b43', width: 2.2, opacity: 0.8, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 7, zoom: 6.0, color: 'gray', width: 2, opacity: 0.7, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 8, zoom: 6.2, color: 'gray', width: 2, opacity: 0.6, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 9, zoom: 7.0, color: 'gray', width: 1, opacity: 0.5, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 }
];
const defaultClusters: Cluster = {
  fillOpacity: 0.7,
  borderLineWidth: 0.5,
  borderLineOpacity: 0.8,
  borderLineMinZoom: 3
};
const defaultInitialZoom: number = 2;
const defaultTextOverlapEnabledZoom: number = 3;
const defaultMinZoom: number = 0;
const defaultMaxZoom: number = 10;

@Component({
  selector: 'm4s-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  idCounter = 0;
  readonly mapId = `m4s-mapboxgl-map-${this.idCounter++}`;
  style = blankStyle;
  map!: Map;
  bounds = new Cartesian2dBounds();
  projection = new Cartesian2dProjection(this.bounds);
  edgesGeoJson!: EdgesGeojson;
  // nodesGeoJson!: NodesGeojson;
  edges: Edge[] = defaultEdges;
  nodes: Node[] = defaultNodes;

  constructor() { };

  // Outputs
  @Output() nodeClick = new EventEmitter<MapMouseEvent>();
  @Output() edgeClick = new EventEmitter<MapMouseEvent>();


  capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  nodeClicked(event: MapMouseEvent): void {
    this.nodeClick.emit(event);
  };

  edgeClicked(event: MapMouseEvent): void {
    this.edgeClick.emit(event);
  };

  onMapLoad(map: Map) {
    this.map = map;
    this.edgesGeoJson = new EdgesGeojson(this.edges, this.projection);
    // this.nodesGeoJson = new NodesGeojson(nodes, this.projection);
    this.map.on("style.load", () => {
      this.map.addControl(new Minimap(this.config.minimapOptions), 'top-right');
    });
    this.map.resize();
  };

  config: Configuration = {
    minZoom: defaultMinZoom,
    maxZoom: defaultMaxZoom,
    initialZoom: defaultInitialZoom,
    textOverlapEnabledZoom: defaultTextOverlapEnabledZoom,
    sources: {
      nodes: 'nodes.geojson',
      edges: 'edges.geojson',
      clusters: 'cluster.geojson',
      clusterBoundaries: 'boundary.geojson'
    },
    edges: defaultEdges,
    nodes: defaultNodes,
    clusters: defaultClusters,
    popups: [
      {
        layer: 'edges',
        content: [
          '<p class="popup-label">Edge</p><p>',
          ['label', this.capitalizeFirstLetter],
          '</p>'
        ]
      },
      {
        layer: 'nodes',
        content: [
          '<p class="popup-label">Node</p><p>',
          'label',
          '</p>'
        ]
      }
    ],
    minimapOptions: defaultMinimapOptions
  };
};
