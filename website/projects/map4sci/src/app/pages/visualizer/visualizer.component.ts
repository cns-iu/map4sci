/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Any } from '@angular-ru/common/typings';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EdgeDataDefinition, NodeDataDefinition } from 'cytoscape';
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';
import { MapMouseEvent } from 'maplibre-gl';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { EMPTY_DATASET } from '../../map/map';
import { MapDataService } from '../../services/map-data.service';
import { MapMarker } from './../../map/map';
import { NetworkDataset, NetworkDatasetProcessor } from './services/network-dataset-processor.sevice';


@Component({
  selector: 'm4s-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualizerComponent implements OnInit, OnDestroy {
  events: string[] = [];
  opened = true;
  iconOpened = true;

  dataset = EMPTY_DATASET;
  filteredNodes: FeatureCollection<Geometry, GeoJsonProperties> = EMPTY_DATASET.nodes;
  filter = '';

  options: string[] = [];
  filteredOptions?: Observable<string[]>;
  searchTerm?: string | null;
  mapPins: MapMarker[] = [];
  displayNetwork = false;
  networkDataset: NetworkDataset = { nodes: [], edges: [] };

  datasetControl: FormControl = new FormControl();
  searchControl: FormControl = new FormControl();


  get displayMap(): boolean {
    const { dataset, displayNetwork } = this;
    if (displayNetwork) {
      return false;
    }
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

  get buttonTitle(): string {
    const { searchTerm, filter } = this;
    if (!searchTerm && filter === '') {
      return 'Search';
    }
    if (searchTerm !== '' && filter === searchTerm) {
      return 'Clear';
    }

    return 'Search';
  }

  get switchButtonTitle(): string {
    const { displayNetwork } = this;
    if (displayNetwork) {
      return 'Switch to map';
    } else {
      return 'Switch to network';
    }
  }

  get buttonDisabled(): boolean {
    if (!this.searchTerm && this.filter !== this.searchTerm) {
      return true;
    }

    return false;
  }

  private readonly subscriptions = new Subscription();

  constructor(
    readonly mapData: MapDataService,
    readonly ga: GoogleAnalyticsService,
    cyDatasetProcessor: NetworkDatasetProcessor,
    cdr: ChangeDetectorRef
  ) {
    const sub = mapData.dataset$.subscribe(ds => {
      this.dataset = ds;
      this.filteredNodes = ds.nodes;
      this.options = ds.nodes.features.map(n => n.properties?.label);
      this.networkDataset = cyDatasetProcessor.process(ds);
      cdr.markForCheck();

      if (this.searchTerm) {
        this.search(this.searchTerm);
      }
    });

    this.subscriptions.add(sub);
  }

  ngOnInit(): void {
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

  searchButtonClick(): void {
    const { searchTerm } = this;

    // Remove all markers before searching
    const markers = document.querySelectorAll('.maplibregl-marker') as unknown as HTMLElement[];
    for (const marker of markers) {
      marker.remove();
    }

    if (this.buttonTitle === 'Clear' && searchTerm) {
      this.mapPins = [];
      this.filter = '';
      this.searchTerm = '';
      return;
    }

    if (!searchTerm) {
      return;
    }

    this.search(searchTerm);
  }

  search(searchTerm: string): void {
    const { nodes } = this.dataset;

    const filteredNodes = nodes.features.filter(n => n.properties?.label.toLowerCase().includes(searchTerm.toLowerCase())) as Any;
    this.filter = searchTerm;
    const mapPins: MapMarker[] = filteredNodes.map((n: Any) => {
      const x: MapMarker = {
        coordinates: n.geometry.coordinates,
        title: n.properties?.label
      };
      return x;
    });
    this.mapPins = [...mapPins];
  }

  toggle(): void {
    const { opened } = this;
    if (opened) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  logMouseEvent(name: string, event: MapMouseEvent): void {
    this.ga.event(`${name}_${event.type}`, 'map_interaction', event.lngLat.toString());
  }

  logNetworkEvent(name: string, event: NodeDataDefinition | EdgeDataDefinition): void {
    this.ga.event(`${name}_click}`, 'network_interaction', event.data);
  }

  switchGraph(): void {
    this.displayNetwork = !this.displayNetwork;
  }
}
