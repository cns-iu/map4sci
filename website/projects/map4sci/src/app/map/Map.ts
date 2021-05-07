import { Any } from '@angular-ru/common/typings';
import { FeatureCollection } from 'geojson';
import { LngLatBoundsLike, Style } from 'mapbox-gl';


export interface Edge {
  level: number;
  zoom: number;
  color?: string;
  width?: number;
  opacity?: number;
  borderOpacity?: number;
  borderColor?: string;
  borderWidth?: number;
}

export interface Node {
  level: number;
  zoom: number;
  fontSize: number;
}

export interface Cluster {
  fillOpacity: number;
  borderLineWidth: number;
  borderLineOpacity: number;
  borderLineMinZoom: number;
}

export interface MapSources {
  clusters: FeatureCollection;
  nodes: FeatureCollection;
}

export type ZoomLevel = [number, number, number];
export interface MiniMapOptions {
  id: number | string;
  width: string;
  height: string;
  style: Style;
  center: [number, number];
  zoom: number;
  containerStyles: string;
  zoomAdjust: null | (() => unknown);
  zoomLevels: ZoomLevel[];
  edgeColor: string;
  edgeWidth: number;
  edgeOpacity: number;
  fillColor: string;
  fillOpacity: number;
  dragPan: boolean;
  scrollZoom: boolean;
  boxZoom: boolean;
  dragRotate: boolean;
  keyboard: boolean;
  doubleClickZoom: boolean;
  touchZoomRotate: boolean;
  maxBounds?: LngLatBoundsLike;
  bounds?: Any;
}

export type PopupContent = (string | [string, ((input: Any) => string)])[];

export interface PopupLayer {
  layer: string;
  content: PopupContent;
}

export interface MapMarkerConfig {
  color?: string;
  rotation?: number;
}
export interface MapMarker {
  config?: MapMarkerConfig;
  coordinates: [number, number];
  title: string;
}

export interface ZoomLookupItem {
  zoom: number;
}
export type ZoomLookup = ZoomLookupItem[];

export interface MapDataset {
  boundary: FeatureCollection;
  cluster: FeatureCollection;
  edges: FeatureCollection;
  nodes: FeatureCollection;
  id: string;
}

export interface MapDatasetDirectory {
  [key: string]: MapDataset;
  [index: number]: MapDataset;
}

export const EMPTY_FEATURES: FeatureCollection = {
  type: 'FeatureCollection',
  features: []
};

export const EMPTY_DATASET = {
  id: 'empty',
  boundary: EMPTY_FEATURES,
  cluster: EMPTY_FEATURES,
  edges: EMPTY_FEATURES,
  nodes: EMPTY_FEATURES
};
