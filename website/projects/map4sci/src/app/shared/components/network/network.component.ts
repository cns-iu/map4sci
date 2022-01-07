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
  Output
} from '@angular/core';
import cytoscape, { Collection, Core as Cytoscape, EdgeDataDefinition, EdgeDefinition, ElementDefinition, ElementGroup, NodeDataDefinition, NodeDefinition, Singular } from 'cytoscape';


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

  constructor(private readonly el: ElementRef) { }

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
            'label': 'data(label)',
            'height': 2000,
            'width': 2000,
            'font-size': 4000,
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
    }
  }
}
