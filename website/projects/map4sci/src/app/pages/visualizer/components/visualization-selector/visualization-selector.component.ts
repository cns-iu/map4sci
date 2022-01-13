import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';


@Component({
  selector: 'm4s-visualization-selector',
  templateUrl: './visualization-selector.component.html',
  styleUrls: ['./visualization-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualizationSelectorComponent {
  @HostBinding('class') readonly clsName = 'm4s-visualization-selector';

  @Input() visualizations: string[] = [];
  @Input() selectedVisualization?: string;

  @Output() readonly visualizationSelected = new EventEmitter<string>();
}
