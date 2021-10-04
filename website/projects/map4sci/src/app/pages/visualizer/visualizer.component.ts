import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { EMPTY_DATASET } from '../../map/map';
import { MapDataService } from '../../services/map-data.service';

@Component({
  selector: 'm4s-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualizerComponent implements OnInit, OnDestroy {

  events: string[] = [];
  opened: boolean = true;

  dataset = EMPTY_DATASET;

  options: string[] = [];
  searchTerm?: string | null;

  datasetControl: FormControl = new FormControl();
  searchControl: FormControl = new FormControl();
  filteredOptions?: Observable<string[]>;

  get displayMap(): boolean {
    const { dataset } = this;
    if (!dataset.nodes) {
      return false;
    }
    if (!dataset.nodes.features) {
      return false;
    }
    if (dataset.nodes.features.length < 1) {
      return false;
    }

    return true;
  }

  private readonly subscriptions = new Subscription();

  constructor(
    readonly mapData: MapDataService,
    cdr: ChangeDetectorRef
  ) {
    const sub = mapData.dataset$.subscribe(ds => {
      this.dataset = ds;
      this.options = ds.nodes.features.map(n => n.properties?.label);
      console.log('options: ', this.options);
      cdr.markForCheck();
    });

    this.subscriptions.add(sub);
  }

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  mapDataSwitcherChange(dataset: string): void {
    console.log('event: ', dataset);
    console.log('dataset: ', this.dataset);

    this.mapData.setDataset(dataset);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
