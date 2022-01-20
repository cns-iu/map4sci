import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import cytoscape, {
  Core as Cytoscape,
  EdgeDataDefinition,
  EdgeDefinition,
  NodeCollection,
  NodeDataDefinition,
  NodeDefinition,
  Singular,
  Stylesheet,
} from 'cytoscape';
import panzoom from 'cytoscape-panzoom';
import { Edge, Node } from '../../../map/map';

const nodeConfig: Node[] = [
  { level: 0, zoom: 0.0, fontSize: 10000 },
  { level: 1, zoom: 0.0, fontSize: 10000 },
  { level: 2, zoom: 0.004, fontSize: 4000 },
  { level: 3, zoom: 0.008, fontSize: 2000 },
  { level: 4, zoom: 0.012, fontSize: 1500 },
  { level: 5, zoom: 0.016, fontSize: 1000 },
  { level: 6, zoom: 0.024, fontSize: 1000 },
  { level: 7, zoom: 0.028, fontSize: 1000 },
  { level: 8, zoom: 0.032, fontSize: 500 },
  { level: 9, zoom: 0.036, fontSize: 500 }
];

const edgeConfig: Edge[] = [
  { level: 0, zoom: 0, color: '#FFEBA1', width: 1200, opacity: 0.0 },
  { level: 1, zoom: 0.0, color: '#FFEBA1', width: 1000, opacity: 1.0 },
  { level: 2, zoom: 0.004, color: '#FFEBA1', width: 900, opacity: 1.0 },
  { level: 3, zoom: 0.008, color: '#F9D776', width: 800, opacity: 0.9 },
  { level: 4, zoom: 0.012, color: '#c1b276', width: 700, opacity: 0.9 },
  { level: 5, zoom: 0.016, color: '#94895f', width: 600, opacity: 0.8 },
  { level: 6, zoom: 0.024, color: '#615b43', width: 500, opacity: 0.8 },
  { level: 7, zoom: 0.028, color: 'gray', width: 200, opacity: 0.7 },
  { level: 8, zoom: 0.032, color: 'gray', width: 200, opacity: 0.6 },
  { level: 9, zoom: 0.036, color: 'gray', width: 200, opacity: 0.5 }
];

const zoompanDefaults = {
  zoomFactor: 0.05, // zoom factor per zoom tick
  zoomDelay: 45, // how many ms between zoom ticks
  minZoom: 0.001, // min zoom level
  maxZoom: 0.036, // max zoom level
  fitPadding: 50, // padding when fitting
  panSpeed: 2, // how many ms in between pan ticks
  panDistance: 20, // max pan distance per tick
  panDragAreaSize: 75, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
  panMinPercentSpeed: 0.25, // the slowest speed we can pan by (as a percent of panSpeed)
  panInactiveArea: 8, // radius of inactive area in pan drag box
  panIndicatorMinOpacity: 0.5, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
  zoomOnly: false, // a minimal version of the ui only with zooming (useful on systems with bad mousewheel resolution)
  fitSelector: undefined, // selector of elements to fit
  animateOnFit: () => true, // whether to animate on fit
  fitAnimationDuration: 1000, // duration of animation on fit

  // icon class names
  sliderHandleIcon: 'fa fa-minus',
  zoomInIcon: 'fa fa-plus',
  zoomOutIcon: 'fa fa-minus',
  resetIcon: 'fa fa-expand'
};

@Component({
  selector: 'm4s-network',
  template: '',
  styleUrls: ['./network.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkComponent implements OnChanges, OnDestroy {
  @HostBinding('class') readonly clsName = 'm4s-network';

  @Input() nodes: NodeDefinition[];
  @Input() edges: EdgeDefinition[];

  @Output() readonly nodeClick = new EventEmitter<NodeDataDefinition>();
  @Output() readonly edgeClick = new EventEmitter<EdgeDataDefinition>();

  private cy?: Cytoscape;

  private zoom: number;

  allNodes: NodeCollection;

  nodeZoomIndex = 0;
  edgeZoomIndex = 0;

  constructor(private readonly el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('nodes' in changes || 'edges' in changes) {
      this.destroyNetwork();
      this.cy = this.createNetwork();
      (this.cy as any).panzoom(zoompanDefaults);
      this.cy.elements('node[level <= 1]').addClass(`label-${this.nodeZoomIndex}`).addClass('label-visible');
      this.cy.elements('edge[level <= 1]').addClass(`edge-${this.edgeZoomIndex}`);
      this.attachListeners();
      this.allNodes = this.cy.filter(element => element.isNode());
    }
  }

  ngOnDestroy(): void {
    this.destroyNetwork();
  }

  createStylesheet(): Stylesheet[] {
    const styles: Stylesheet[] = [
      {
        selector: 'node',
        style: {
          'height': 2000,
          'width': 2000,
          'backgroundColor': 'black',
          'color': '#4665ff'
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 200,
          'line-color': '#3d3d3d',
          'opacity': 0.5
        }
      },
      {
        selector: '.label-visible',
        style: {
          'label': 'data(label)'
        }
      }
    ];
    for (const node of nodeConfig) {
      styles.push({
        selector: `.label-${node.level}`,
        style: {
          'font-size': nodeConfig[node.level].fontSize
        }
      });
      styles.push({
        selector: `.edge-${node.level}`,
        style: {
          'width': edgeConfig[node.level].width,
          'line-color': edgeConfig[node.level].color
        }
      });
    }
    return styles;
  }

  private createNetwork(): Cytoscape {
    return cytoscape({
      container: this.el.nativeElement,
      elements: {
        nodes: this.nodes,
        edges: this.edges
      },
      layout: { name: 'preset' },
      style: this.createStylesheet(),
      wheelSensitivity: 0.1
    });
  }

  private destroyNetwork(): void {
    this.cy?.destroy?.();
  }

  private attachListeners(): void {
    const { cy } = this;

    if (cy) {
      cy.on('tap', 'node', event => {
        const data: NodeDataDefinition = (event.target as Singular).data();
        this.nodeClick.emit(data);
      });

      cy.on('tap', 'edge', event => {
        const data: EdgeDataDefinition = (event.target as Singular).data();
        this.edgeClick.emit(data);
      });

      cy.on('zoom', () => {
        const z = cy.zoom();
        this.zoom = z;
        const oldNodeIndex = this.nodeZoomIndex;
        const oldEdgeIndex = this.edgeZoomIndex;
        cy.batch(() => {
          if (this.nodeLevelChange()) {
            cy.$(`node[level <= ${this.nodeZoomIndex}]`).removeClass(`label-${oldNodeIndex}`).addClass(`label-${this.nodeZoomIndex}`).addClass('label-visible');
            cy.$(`node[level > ${this.nodeZoomIndex}]`).removeClass('label-visible');
          }
          if (this.edgeLevelChange()) {
            cy.$(`edge[level = ${this.edgeZoomIndex}]`).addClass(`edge-${this.edgeZoomIndex}`);
            cy.$(`edge[level > ${this.edgeZoomIndex}]`).removeClass(`edge-${oldEdgeIndex}`);
          }
        });
      });
    }
  }

  getZoomIndex(zoomLookup: Node[] | Edge[]): number {
    const zoom: number = this.zoom;
    for (let index = 0; index <= zoomLookup.length; index++) {
      if (index === (zoomLookup.length - 1)) {
        return index;
      }
      if (zoom >= zoomLookup[index].zoom && zoom < zoomLookup[index + 1].zoom) {
        return index;
      }
    }

    console.error('No Zoom index found.  Zoom lookup: ', zoomLookup);
    return 0;
  }

  nodeLevelChange(): boolean {
    const currentIndex: number = this.getZoomIndex(nodeConfig);
    if (currentIndex === this.nodeZoomIndex) {
      return false;
    }
    this.nodeZoomIndex = currentIndex;
    return true;
  }

  edgeLevelChange(): boolean {
    const currentIndex: number = this.getZoomIndex(edgeConfig);
    if (currentIndex === this.edgeZoomIndex) {
      return false;
    }
    this.edgeZoomIndex = currentIndex;
    return true;
  }
}
