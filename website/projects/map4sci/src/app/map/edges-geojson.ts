import { Feature, FeatureCollection, Geometry } from 'geojson';

import { Cartesian2dProjection } from './cartesian-2d-projection';
import { Edge } from './map';


export class EdgesGeojson implements FeatureCollection<Geometry> {
  type: 'FeatureCollection' = 'FeatureCollection';
  features: Feature<Geometry, { [name: string]: unknown }>[];

  constructor(edges: Edge[], _projection: Cartesian2dProjection) {
    this.features = edges.map(() => ({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [[102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]]
      },
      properties: {
        'prop0': 'value0',
        'prop1': 0.0
      }
    }));
  }
}
