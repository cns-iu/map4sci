import { Feature, Polygon } from 'geojson';
import { GeoJSONSource, LngLatBounds, Map as MapboxMap, MapMouseEvent, Style } from 'mapbox-gl';
import { MapSources, MiniMapOptions } from './map';


/*
  This is a modified and updated version of Brendan Matkin's Mapboxgl-Minimap:
  https://github.com/brendanmatkin/mapboxgl-minimap
*/

const blankStyle: Style = {
  version: 8,
  name: 'Blank',
  center: [0, 0],
  zoom: 0,
  sources: {},
  sprite: 'https://cdn.jsdelivr.net/gh/lukasmartinelli/osm-liberty@gh-pages/sprites/osm-liberty',
  glyphs: 'https://cdn.jsdelivr.net/gh/orangemug/font-glyphs@gh-pages/glyphs/{fontstack}/{range}.pbf',
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': 'rgba(255,255,255,1)'
      }
    }
  ]
};

export class MiniMap {
  sources: MapSources;
  options: MiniMapOptions;
  ticking: boolean;
  lastMouseMoveEvent: null;
  parentMap!: MapboxMap;
  isDragging: boolean;
  isCursorOverFeature: boolean;
  previousPoint: number[];
  currentPoint: number[];
  trackingRectCoordinates: number[][][];
  container?: HTMLDivElement;
  miniMap!: MapboxMap;
  trackingRect!: GeoJSONSource;
  trackingRectData!: Feature<Polygon>;
  miniMapCanvas!: HTMLElement;

  constructor(sources: MapSources, options: MiniMapOptions) {
    this.sources = sources;
    this.options = options;
    Object.assign(this.options, options);

    this.ticking = false;
    this.lastMouseMoveEvent = null;
    this.isDragging = false;
    this.isCursorOverFeature = false;
    this.previousPoint = [0, 0];
    this.currentPoint = [0, 0];
    this.trackingRectCoordinates = [[[], [], [], [], []]];
  }

  onAdd(parentMap: MapboxMap): HTMLDivElement {
    this.parentMap = parentMap;

    const opts = this.options;
    const container = this.container = this.createContainer(parentMap);
    const miniMap = this.miniMap = new MapboxMap({
      attributionControl: false,
      container,
      style: blankStyle,
      zoom: opts.zoom,
      center: opts.center
    });

    if (opts.maxBounds) {
      miniMap.setMaxBounds(opts.maxBounds);
    }

    miniMap.on('load', this.load.bind(this));

    return this.container;
  }

  onRemove(parentMap: MapboxMap): void {
    return;
  }

  load(): void {
    const opts = this.options;
    const parentMap = this.parentMap;
    const miniMap = this.miniMap;
    const interactions = [
      'dragPan', 'scrollZoom', 'boxZoom', 'dragRotate',
      'keyboard', 'doubleClickZoom', 'touchZoomRotate'
    ];

    interactions.forEach((i: string) => {
      const key = i as keyof MiniMapOptions;
      const map = this.miniMap as unknown as { [key: string]: { disable: () => void } };
      if (opts[key] !== true) {
        map[i].disable();
      }
    });

    if (typeof opts.zoomAdjust === 'function') {
      this.options.zoomAdjust = opts.zoomAdjust.bind(this);
    } else if (opts.zoomAdjust === null) {
      this.options.zoomAdjust = this.zoomAdjust.bind(this);
    }

    const bounds = miniMap.getBounds();

    this.convertBoundsToPoints(bounds);

    this.trackingRectData = {
      type: 'Feature',
      properties: {
        name: 'trackingRect'
      },
      geometry: {
        type: 'Polygon',
        coordinates: this.trackingRectCoordinates
      }
    };

    miniMap.addSource('trackingRect', { type: 'geojson', data: this.trackingRectData });

    // Add the geojson layers of our data so the minimap matches the parent map
    miniMap.addLayer({
      id: 'cluster',
      type: 'fill',
      source: { type: 'geojson', data: this.sources.clusters },
      layout: {},
      paint: {
        'fill-color': ['get', 'fill'],
        'fill-opacity': 0.7,
        'fill-outline-color': ['get', 'stroke']
      },
    });
    miniMap.addLayer({
      id: 'cluster_boundary',
      type: 'line',
      minzoom: 2,
      source: { type: 'geojson', data: this.sources.clusters },
      layout: {},
      paint: {
        'line-color': ['get', 'stroke'],
        'line-width': 0.5,
        'line-opacity': 0.8
      },
    });
    miniMap.addLayer({
      id: 'node_labels',
      type: 'symbol',
      minzoom: 2,
      source: { type: 'geojson', data: this.sources.nodes },
      layout: {
        'text-field': '{label}',
        'text-font': ['Open Sans Regular'],
        'text-size': 14,
        'text-anchor': 'center',
        'text-justify': 'center',
        'text-allow-overlap': false

      },
      filter: ['==', 'level', 1]
    });
    miniMap.addLayer({
      id: 'node_labels_2',
      type: 'symbol',
      minzoom: 3,
      source: { type: 'geojson', data: this.sources.nodes },
      layout: {
        'text-field': '{label}',
        'text-font': ['Open Sans Regular'],
        'text-size': 9,
        'text-anchor': 'center',
        'text-justify': 'center'
      },
      filter: ['all',
        ['<=', 'level', 3],
        ['>', 'level', 1]
      ]
    });

    miniMap.addLayer({
      id: 'trackingRectOutline',
      type: 'line',
      source: 'trackingRect',
      layout: {},
      paint: {
        'line-color': opts.edgeColor,
        'line-width': opts.edgeWidth,
        'line-opacity': opts.edgeOpacity
      }
    });

    // needed for dragging
    miniMap.addLayer({
      id: 'trackingRectFill',
      type: 'fill',
      source: 'trackingRect',
      layout: {},
      paint: {
        'fill-color': opts.fillColor,
        'fill-opacity': opts.fillOpacity
      }
    });

    this.trackingRect = this.miniMap.getSource('trackingRect') as GeoJSONSource;

    this.update();

    parentMap.on('move', this.update.bind(this));

    miniMap.on('mousemove', this.mouseMove.bind(this));
    miniMap.on('mousedown', this.mouseDown.bind(this));
    miniMap.on('mouseup', this.mouseUp.bind(this));

    miniMap.on('touchmove', this.mouseMove.bind(this));
    miniMap.on('touchstart', this.mouseDown.bind(this));
    miniMap.on('touchend', this.mouseUp.bind(this));

    this.miniMapCanvas = miniMap.getCanvasContainer();
    this.miniMapCanvas.addEventListener('wheel', this.preventDefault);
    this.miniMapCanvas.addEventListener('mousewheel', this.preventDefault);
  }

  mouseDown(e: MapMouseEvent): void {
    if (this.isCursorOverFeature) {
      this.isDragging = true;
      this.previousPoint = this.currentPoint;
      this.currentPoint = [e.lngLat.lng, e.lngLat.lat];
    }
  }

  mouseMove(e: MapMouseEvent): void {
    this.ticking = false;

    const miniMap = this.miniMap;
    const features = miniMap.queryRenderedFeatures(e.point, {
      layers: ['trackingRectFill']
    });

    // don't update if we're still hovering the area
    if (!(this.isCursorOverFeature && features.length > 0)) {
      this.isCursorOverFeature = features.length > 0;
      this.miniMapCanvas.style.cursor = this.isCursorOverFeature ? 'move' : '';
    }

    if (this.isDragging) {
      this.previousPoint = this.currentPoint;
      this.currentPoint = [e.lngLat.lng, e.lngLat.lat];

      const offset = [
        this.previousPoint[0] - this.currentPoint[0],
        this.previousPoint[1] - this.currentPoint[1]
      ];

      const newBounds = this.moveTrackingRect(offset);

      this.parentMap.fitBounds(newBounds, { duration: 80, linear: true });
    }
  }

  mouseUp(): void {
    this.isDragging = false;
    this.ticking = false;
  }

  moveTrackingRect(offset: number[]): LngLatBounds {
    const rectPoints = this.trackingRectCoordinates[0] as [number, number][];
    const bounds = new LngLatBounds();
    rectPoints.forEach(coord => bounds.extend(coord));

    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    ne.lat -= offset[1];
    ne.lng -= offset[0];
    sw.lat -= offset[1];
    sw.lng -= offset[0];

    this.convertBoundsToPoints(bounds);
    this.trackingRect.setData(this.trackingRectData);

    return bounds;
  }

  setTrackingRectBounds(bounds: LngLatBounds): void {
    this.convertBoundsToPoints(bounds);
    this.trackingRect.setData(this.trackingRectData);
  }

  convertBoundsToPoints(bounds: LngLatBounds): void {
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    const trc = this.trackingRectCoordinates;

    trc[0][0][0] = ne.lng;
    trc[0][0][1] = ne.lat;
    trc[0][1][0] = sw.lng;
    trc[0][1][1] = ne.lat;
    trc[0][2][0] = sw.lng;
    trc[0][2][1] = sw.lat;
    trc[0][3][0] = ne.lng;
    trc[0][3][1] = sw.lat;
    trc[0][4][0] = ne.lng;
    trc[0][4][1] = ne.lat;
  }

  update(): void {
    if (this.isDragging) {
      return;
    }

    const parentBounds = this.parentMap.getBounds();

    this.setTrackingRectBounds(parentBounds);

    if (typeof this.options.zoomAdjust === 'function') {
      this.options.zoomAdjust();
    }
  }

  zoomAdjust(): void {
    const miniMap = this.miniMap;
    const parentMap = this.parentMap;
    const miniZoom = miniMap.getZoom();
    const parentZoom = parentMap.getZoom();
    const levels = this.options.zoomLevels;
    let found = false;

    levels.forEach((zoom: unknown[]) => {
      if (!found && parentZoom >= zoom[0]) {
        if (miniZoom >= zoom[1]) {
          miniMap.setZoom(zoom[2]);
        }

        miniMap.setCenter(parentMap.getCenter());
        found = true;
      }
    });

    if (!found && miniZoom !== this.options.zoom) {
      if (typeof this.options.bounds === 'object') {
        miniMap.fitBounds(this.options.bounds, { duration: 50 });
      }

      miniMap.setZoom(this.options.zoom);
    }
  }

  createContainer(parentMap: MapboxMap): HTMLDivElement {
    const opts = this.options;
    const container = document.createElement('div');

    container.className = 'mapboxgl-ctrl-minimap mapboxgl-ctrl';
    container.setAttribute('style', 'width: ' + opts.width + '; height: ' + opts.height + '; ' + opts.containerStyles);
    container.addEventListener('contextmenu', this.preventDefault);

    parentMap.getContainer().appendChild(container);

    if (opts.id !== '') {
      container.id = opts.id.toString();
    }

    return container;
  }

  preventDefault(e: { preventDefault: () => void }): void {
    e.preventDefault();
  }
}
