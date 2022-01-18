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
  level: number;
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
    const nodes = this.processNodes(dataset);

    return { nodes, edges };
  }

  private processNodes(dataset: MapDataset): NodeDefinition[] {
    const { nodes } = dataset;
    const definitions = nodes.features
      .map(({ id, properties }): NodeDefinition => {
        const { label, pos, level } = properties as NodeProperties;
        const [x, y] = pos.split(',');

        return {
          group: 'nodes',
          data: {
            id: id as string,
            label,
            level
          },
          position: {
            x: parseInt(x),
            y: -parseInt(y)
          }
        };
      });

    return definitions;
  }

  private processEdges(dataset: MapDataset): EdgeDefinition[] {
    const { edges } = dataset;
    const definitions = edges.features
      .map(({ properties }, i): EdgeDefinition => {
        const { src, dest, label, level } = properties as EdgeProperties;

        return {
          group: 'edges',
          data: {
            id: 'edge-' + i,
            label: label,
            source: src,
            target: dest,
            level: level
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
