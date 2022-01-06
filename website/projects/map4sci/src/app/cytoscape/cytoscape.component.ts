import { Component, ElementRef, ViewChild, HostBinding, Input, OnChanges } from '@angular/core';
import { FeatureCollection, GeoJsonProperties, Geometry, Feature } from 'geojson';
import cytoscape, { ElementsDefinition } from 'cytoscape';

@Component({
  selector: 'm4s-cytoscape',
  templateUrl: './cytoscape.component.html',
  styleUrls: ['./cytoscape.component.scss']
})
export class CytoscapeComponent implements OnChanges {
  @HostBinding('class') readonly clsName = 'm4s-cytoscape';

  @ViewChild('cy') el: ElementRef;

  @Input() edges: FeatureCollection;

  @Input() nodes: FeatureCollection;

  ngOnChanges(): void {
    const nodesList = new Set;
    let nodeFeatures = this.nodes.features
    nodeFeatures = nodeFeatures.filter((node: any) => node.properties.level === 1); // limit nodes to level 1 for now
    nodeFeatures = nodeFeatures.map((node: any) => {
      nodesList.add(node.id)
      return {
        group: 'nodes', 
        data: { 
          id: node.id,
          label: node.properties.label
        },
        position: {
          x: parseInt(node.properties.pos.split(',')[0]),
          y: parseInt(node.properties.pos.split(',')[1])
        }
      }
    }) as unknown as Feature<Geometry, GeoJsonProperties>[]

    let edgeFeatures = this.edges.features
    edgeFeatures = edgeFeatures.filter((edge: any) => nodesList.has(edge.properties.dest) && nodesList.has(edge.properties.src));
    edgeFeatures = edgeFeatures.map((edge: any) => {
      return {
        group: 'edges', 
        data: { 
          id: edge.id,
          source: edge.properties.src,
          target: edge.properties.dest
        }
      }
    }) as unknown as Feature<Geometry, GeoJsonProperties>[]

    const cy = cytoscape({
      container: document.getElementById('cy'),
      elements: {
        nodes: nodeFeatures,
        edges: edgeFeatures
      } as unknown as ElementsDefinition,
      layout: { name: "preset" },
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)',
            'height': 600,
            'width': 600,
            'font-size': 1000,
            'backgroundColor': 'black'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 400,
            'line-color': '#c0c0c0'
          }
        }
      ]
    });
  }
}
