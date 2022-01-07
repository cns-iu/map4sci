import { Injectable } from '@angular/core';
import { EdgeDefinition, NodeDefinition } from 'cytoscape';

import { MapDataset } from '../../../map/map';


export interface NetworkDataset {
  nodes: NodeDefinition[];
  edges: EdgeDefinition[];
}

interface NodeProperties {
  label: string;
  pos: string;
}

interface EdgeProperties {
  level: number;
  src: string;
  dest: string;
  label: string;
}


@Injectable({
  providedIn: 'root'
})
export class NetworkDatasetProcessor {
  process(dataset: MapDataset): NetworkDataset {
    const edges = this.processEdges(dataset);
    const nodes = this.processNodes(dataset, edges);

    return { nodes, edges };
  }

  private processNodes(dataset: MapDataset, edges: EdgeDefinition[]): NodeDefinition[] {
    const { nodes } = dataset;
    const edgeEndpoints = new Set<unknown>(this.edgeEndpoints(edges));
    const definitions = nodes.features
      .filter(({ id }) => edgeEndpoints.has(id))
      .map(({ id, properties }): NodeDefinition => {
        const { label, pos } = properties as NodeProperties;
        const [x, y] = pos.split(',');

        return {
          group: 'nodes',
          data: {
            id: id as string,
            label
          },
          position: {
            x: parseInt(x),
            y: parseInt(y)
          }
        };
      });

    return definitions;
  }

  private processEdges(dataset: MapDataset): EdgeDefinition[] {
    const { edges } = dataset;
    const definitions = edges.features
      .filter(edge => (edge.properties as EdgeProperties).level === 1)
      .map(({ id, properties }): EdgeDefinition => {
        const { src, dest, label } = properties as EdgeProperties;

        return {
          group: 'edges',
          data: {
            id: id as string,
            label: label,
            source: src,
            target: dest
          }
        };
      });

    return definitions;
  }

  private *edgeEndpoints(edges: EdgeDefinition[]): Generator<string> {
    for (const { data: { source, target } } of edges) {
      yield source;
      yield target;
    }
  }
}
