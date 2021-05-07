import { MapDataService } from './services/map-data.service';
import { Any } from '@angular-ru/common/typings';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY_DATASET, MapDataset, MapDatasetDirectory } from './map/map';

@Component({
  selector: 'm4s-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private readonly mapData: MapDataService
  ) { }

  files: string[] = [
    'boundary',
    'cluster',
    'edges',
    'nodes'
  ];

  dataset: MapDataset = EMPTY_DATASET;
  datasetDirectory: MapDatasetDirectory[] = [];

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

  async ngOnInit(): Promise<void> {
    this.datasetDirectory = await this.mapData.getDatasetDirectory();
    this.dataset = await this.mapData.getCurrentDataset();
  }

  mapDataSwitcherChange(event: Any): void {
    const mapKey: string = event.target.value;
    this.mapData.setCurrentDataset(mapKey);
  }
}

