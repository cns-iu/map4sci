import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';
import cytoscape, { Core as Cytoscape, EdgeDataDefinition, EdgeDefinition, NodeCollection, NodeDataDefinition, NodeDefinition, Singular } from 'cytoscape';


@Component({
  selector: 'm4s-network',
  template: '',
  styleUrls: ['./network.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkComponent implements OnInit, OnChanges, OnDestroy {
  @HostBinding('class') readonly clsName = 'm4s-network';

  @Input() nodes: NodeDefinition[];
  @Input() edges: EdgeDefinition[];

  @Output() readonly nodeClick = new EventEmitter<NodeDataDefinition>();
  @Output() readonly edgeClick = new EventEmitter<EdgeDataDefinition>();

  private cy?: Cytoscape;

  private zoom = 1;

  allNodes: NodeCollection;

  constructor(private readonly el: ElementRef) { }

  ngOnInit(): void {
    this.cy = this.createNetwork();
    this.attachListeners();
    this.allNodes = this.cy.filter(element => {return element.isNode()})
  }

  ngOnDestroy(): void {
    this.destroyNetwork();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('nodes' in changes || 'edges' in changes) {
      this.destroyNetwork();
      this.cy = this.createNetwork();
      this.attachListeners();
    }
  }

  private createNetwork(): Cytoscape {
    return cytoscape({
      container: this.el.nativeElement,
      elements: {
        nodes: this.nodes,
        edges: this.edges
      },
      layout: { name: 'preset' },
      style: [
        {
          selector: 'node',
          style: {
            'label': '',
            'height': 2000,
            'width': 2000,
            'backgroundColor': 'black',
            'font-size': 4000
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 1000,
            'line-color': '#c0c0c0'
          }
        },
        {
          selector: '.label-visible',
          style: {
            'label': 'data(label)'
          }
        }
      ],
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
        let z = cy.zoom();
        this.zoom = z*1000;
        console.log(this.zoom)
        cy.elements(`node[level <= ${this.zoom}]`).addClass('label-visible')
        cy.elements(`node[level > ${this.zoom}]`).removeClass('label-visible')
        console.log(cy.elements(`node[level <= ${this.zoom}]`).length);
      });
    }
  }
}
