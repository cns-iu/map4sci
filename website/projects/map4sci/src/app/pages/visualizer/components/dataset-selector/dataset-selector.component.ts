import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';


export type SelectableDataset = Record<'id' | 'label', string>;


@Component({
  selector: 'm4s-dataset-selector',
  templateUrl: './dataset-selector.component.html',
  styleUrls: ['./dataset-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatasetSelectorComponent {
  @HostBinding('class') readonly clsName = 'm4s-dataset-selector';

  @Input() datasets: SelectableDataset[] = [];
  @Input() selectedDataset?: SelectableDataset;

  @Output() readonly datasetSelected = new EventEmitter<SelectableDataset>();

  datasetEquals(this: void, d1: SelectableDataset, d2: SelectableDataset): boolean {
    return d1.id === d2.id;
  }

  selectDataset(dataset: SelectableDataset): void {
    this.selectedDataset = dataset;
    this.datasetSelected.emit(dataset);
  }
}
