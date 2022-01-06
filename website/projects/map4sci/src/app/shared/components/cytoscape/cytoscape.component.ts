import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import cytoscape, { Core as Cytoscape, EdgeDefinition, NodeDefinition } from 'cytoscape';


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

  private cy?: Cytoscape;


  constructor(private readonly el: ElementRef) { }

  ngOnDestroy(): void {
    this.destroyCytoscape();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('nodes' in changes || 'edges' in changes) {
      this.destroyCytoscape();
      this.cy = this.createCytoscape();
    }
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
