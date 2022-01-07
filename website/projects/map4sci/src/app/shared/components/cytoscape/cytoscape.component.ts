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
import cytoscape, { Core as Cytoscape, EdgeDataDefinition, EdgeDefinition, NodeDataDefinition, NodeDefinition } from 'cytoscape';


@Component({
  selector: 'm4s-cytoscape',
  template: '',
  styleUrls: ['./cytoscape.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CytoscapeComponent implements OnChanges, OnDestroy {
  @HostBinding('class') readonly clsName = 'm4s-cytoscape';

  @Input() nodes: NodeDefinition[];
  @Input() edges: EdgeDefinition[];

  @Output() readonly nodeClick = new EventEmitter<NodeDataDefinition>();
  @Output() readonly edgeClick = new EventEmitter<EdgeDataDefinition>();

  private cy?: Cytoscape;


  constructor(private readonly el: ElementRef) { }

  ngOnDestroy(): void {
    this.destroyCytoscape();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let { cy } = this;
    if ('nodes' in changes || 'edges' in changes) {
      this.destroyCytoscape();
      cy = this.createCytoscape();
      cy.on('tap', 'node', (event) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        this.nodeClicked(event.target._private.data);
      });
      cy.on('tap', 'edge', (event) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        this.edgeClicked(event.target._private.data);
      });
    }
  }

  nodeClicked(event: NodeDataDefinition): void {
    this.nodeClick.emit(event);
  }

  edgeClicked(event: EdgeDataDefinition): void {
    this.edgeClick.emit(event);
  }

  private createCytoscape(): Cytoscape {
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

  private destroyCytoscape(): void {
    this.cy?.destroy?.();
  }
}
