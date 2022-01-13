import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';


export type SelectableDataset = Record<'id' | 'label', string>;


@Component({
  selector: 'm4s-dataset-selector',
  templateUrl: './dataset-selector.component.html',
  styleUrls: ['./dataset-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatasetSelectorComponent<T extends SelectableDataset = SelectableDataset> {
  @HostBinding('class') readonly clsName = 'm4s-dataset-selector';

  @Input() datasets: T[] = [];
  @Input() selectedDataset?: T;

  @Output() readonly datasetSelected = new EventEmitter<T>();

  datasetEquals(this: void, d1: T, d2: T): boolean {
    return d1.id === d2.id;
  }

  selectDataset(dataset: T): void {
    this.selectedDataset = dataset;
    this.datasetSelected.emit(dataset);
  }
}
