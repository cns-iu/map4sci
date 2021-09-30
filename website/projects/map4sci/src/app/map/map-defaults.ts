import { Style } from 'maplibre-gl';

import { Edge, MiniMapOptions, Node } from './map';


export const defaultInitialZoom = 2;
export const blankStyle: Style = {
  version: 8,
  name: 'Blank',
  center: [0, 0],
  zoom: defaultInitialZoom,
  sources: {},
  sprite: 'https://cdn.jsdelivr.net/gh/lukasmartinelli/osm-liberty@gh-pages/sprites/osm-liberty',
  glyphs: 'https://cdn.jsdelivr.net/gh/orangemug/font-glyphs@gh-pages/glyphs/{fontstack}/{range}.pbf',
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': 'white'
      }
    }
  ]
};
export const defaultMinimapOptions: MiniMapOptions = {
  id: 'maplibregl-minimap',
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
export const defaultNodes: Node[] = [
  { level: 0, zoom: 0.0, fontSize: 0 },
  { level: 1, zoom: 0.0, fontSize: 20 },
  { level: 2, zoom: 4.0, fontSize: 18 },
  { level: 3, zoom: 5.0, fontSize: 18 },
  { level: 4, zoom: 5.5, fontSize: 16 },
  { level: 5, zoom: 6.0, fontSize: 16 },
  { level: 6, zoom: 6.2, fontSize: 14 },
  { level: 7, zoom: 6.5, fontSize: 14 },
  { level: 8, zoom: 6.7, fontSize: 12 },
  { level: 9, zoom: 7.5, fontSize: 12 }
];
export const defaultEdges: Edge[] = [
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
export const defaultTextOverlapEnabledZoom = 3;
export const defaultMapCenter: [number, number] = [0, 0];
