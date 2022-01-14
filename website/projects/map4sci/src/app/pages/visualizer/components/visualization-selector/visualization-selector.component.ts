import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';


@Component({
  selector: 'm4s-visualization-selector',
  templateUrl: './visualization-selector.component.html',
  styleUrls: ['./visualization-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualizationSelectorComponent<T extends string = string> {
  @HostBinding('class') readonly clsName = 'm4s-visualization-selector';

  @Input() visualizations: T[] = [];
  @Input() selectedVisualization?: T;

  @Output() readonly visualizationSelected = new EventEmitter<T>();
}
