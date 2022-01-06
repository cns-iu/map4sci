import { Component, ElementRef, ViewChild, HostBinding, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FeatureCollection, Feature } from 'geojson';
import cytoscape, { ElementsDefinition } from 'cytoscape';

@Component({
  selector: 'm4s-cytoscape',
  templateUrl: './cytoscape.component.html',
  styleUrls: ['./cytoscape.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CytoscapeComponent implements OnChanges {
  @HostBinding('class') readonly clsName = 'm4s-cytoscape';

  @ViewChild('cy') el: ElementRef;

  @Input() edges: FeatureCollection;

  @Input() nodes: FeatureCollection;

  ngOnChanges(): void {
    const edgesList = new Set;
    let edgeFeatures = this.edges.features;
    edgeFeatures = edgeFeatures.filter((edge: Feature) => edge.properties!.level === 1);
    edgeFeatures = edgeFeatures.map((edge: Feature) => {
      edgesList.add(edge.properties!.dest);
      edgesList.add(edge.properties!.src);
      return {
        group: 'edges',
        data: {
          id: edge.id,
          source: edge.properties!.src,
          target: edge.properties!.dest
        }
      }
    }) as unknown as Feature[];

    // const nodesList = new Set;
    let nodeFeatures = this.nodes.features;
    nodeFeatures = nodeFeatures.filter((node: Feature) => edgesList.has(node.id));
    nodeFeatures = nodeFeatures.map((node: Feature) => {
      const pos = node.properties!.pos as string;
      return {
        group: 'nodes',
        data: {
          id: node.id,
          label: node.properties!.label
        },
        position: {
          x: parseInt(pos.split(',')[0]),
          y: parseInt(pos.split(',')[1])
        }
      };
    }) as unknown as Feature[];

    const cy = cytoscape({
      container: document.getElementById('cy'),
      elements: {
        nodes: nodeFeatures,
        edges: edgeFeatures
      } as unknown as ElementsDefinition,
      layout: { name: 'preset' },
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)',
            'height': 2000,
            'width': 2000,
            'font-size': 2000,
            'backgroundColor': 'black'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 1000,
            'line-color': '#c0c0c0'
          }
        }
      ]
    });
  }
}
