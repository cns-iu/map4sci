import { Injectable } from '@angular/core';
import { EdgeDefinition, NodeDefinition } from 'cytoscape';

import { MapDataset } from '../../../map/map';


export interface CytoscapeDataset {
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
}


@Injectable({
  providedIn: 'root'
})
export class CytoscapeDatasetProcessor {
  process(dataset: MapDataset): CytoscapeDataset {
    const edges = this.processEdges(dataset);
    const nodes = this.processNodes(dataset, edges);

    return { nodes, edges };
    //
    // const edgesList = new Set;
    // let edgeFeatures = this.dataset.edges.features;
    // edgeFeatures = edgeFeatures.filter((edge: Feature) => edge.properties!.level === 1);
    // edgeFeatures = edgeFeatures.map((edge: Feature) => {
    //   edgesList.add(edge.properties!.dest);
    //   edgesList.add(edge.properties!.src);
    //   return {
    //     group: 'edges',
    //     data: {
    //       id: edge.id,
    //       source: edge.properties!.src,
    //       target: edge.properties!.dest
    //     }
    //   }
    // }) as unknown as Feature[];
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
        const { src, dest } = properties as EdgeProperties;

        return {
          group: 'edges',
          data: {
            id: id as string,
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
