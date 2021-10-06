import { Any } from '@angular-ru/common/typings';
import { MapMarker } from './../../map/map';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';
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
  // view child of map component
  @ViewChild('map') map: any;

  events: string[] = [];
  opened = true;
  iconOpened = true;

  dataset = EMPTY_DATASET;
  filteredNodes: FeatureCollection<Geometry, GeoJsonProperties> = EMPTY_DATASET.nodes;

  options: string[] = [];
  filteredOptions?: Observable<string[]>;
  searchTerm?: string | null;
  mapPins: MapMarker[] = [];

  datasetControl: FormControl = new FormControl();
  searchControl: FormControl = new FormControl();


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
      this.filteredNodes = ds.nodes;
      this.options = ds.nodes.features.map(n => n.properties?.label);
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
    this.mapData.setDataset(dataset);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  addPins(): void {
    const { searchTerm } = this;
    if (!searchTerm) {
      this.mapPins = [];
      return;
    }

    const { nodes } = this.dataset;

    const filteredNodes = nodes.features.filter(n => n.properties?.label.toLowerCase().includes(searchTerm.toLowerCase())) as Any;
    const mapPins: MapMarker[] = filteredNodes.map((n: Any) => {
      return {
        coordinates: n.geometry.coordinates,
        title: n.properties?.label
      } as MapMarker;
    });
    this.mapPins = [...mapPins];
    console.log('Search term: "', searchTerm, '"\nresults: ', filteredNodes, '\nmap pins: ', mapPins);
    console.log('original nodes: ', this.dataset.nodes);
  }

  toggle(): void {
    const { opened } = this;
    if (opened) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }
}
