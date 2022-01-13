import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchableDatasetItem } from '../dataset-search/dataset-search.component';
import { SelectableDataset } from '../dataset-selector/dataset-selector.component';
import { DatasetSummary } from '../dataset-summary/dataset-summary.component';


export interface MenuDataset extends SelectableDataset {
  searchableItems: Observable<SearchableDatasetItem[]>;
  summary: Observable<DatasetSummary>;
}


@Component({
  selector: 'm4s-visualizer-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent<T extends MenuDataset = MenuDataset> {
  @HostBinding('class') readonly clsName = 'm4s-visualizer-menu';

  @Input() visualizations: string[] = [];
  @Input() selectedVisualization?: string;

  @Input() datasets: T[] = [];
  @Input() selectedDataset?: T;

  @Output() readonly visualizationSelected = new EventEmitter<string>();
  @Output() readonly datasetSelected = new EventEmitter<T>();
  @Output() readonly datasetSearched = new EventEmitter<string>();
  @Output() readonly datasetSearchCleared = new EventEmitter<void>();

  setSelectedVisualization(visualization: string): void {
    this.selectedVisualization = visualization;
    this.visualizationSelected.emit(visualization);
  }

  setSelectedDataset(dataset: T): void {
    this.selectedDataset = dataset;
    this.datasetSelected.emit(dataset);
  }
}
