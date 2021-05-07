import { Any } from '@angular-ru/common/typings';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY_DATASET } from './map/map';

@Component({
  selector: 'm4s-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly http: HttpClient) { }

  files: string[] = [
    'boundary',
    'cluster',
    'edges',
    'nodes'
  ];

  dataset: Any = EMPTY_DATASET;
  datasetDirectory: Any[] = [];
  datasetCache: Any = {};

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
    console.log('dataset before: ', this.dataset);
    this.datasetDirectory = await this.getMapDataLookup();
    this.updateCurrentDataset(this.datasetDirectory[0]);
  }

  async getMapDataLookup(): Promise<Any[]> {
    const lookup: Any[] = await this.http.get('assets/datasets/index.json').toPromise() as Any;
    return lookup;
  }

  async getMapData(datasetInfo: Any): Promise<Any> {
    const { http, files, datasetCache } = this;
    const dataset: Any = {};

    if (datasetCache[datasetInfo.id]) {
      return datasetCache[datasetInfo.id];
    }

    files.forEach(async file => {
      const url = `${datasetInfo.dir}/${file}.geojson`;
      dataset[file] = await http.get(url).toPromise();
    });
    dataset.id = datasetInfo.id;

    this.datasetCache[datasetInfo.id] = dataset;

    return dataset;
  }

  async updateCurrentDataset(datasetInfo: Any): Promise<void> {
    if (this.datasetDirectory.indexOf(datasetInfo) < 0) {
      return;
    }
    this.dataset = EMPTY_DATASET;
    this.dataset = await this.getMapData(datasetInfo);
    console.log('dataset after: ', this.dataset);
  }

  mapDataSwitcherChange(event: Any): void {
    const dataInfo = this.datasetDirectory.find(dataset => dataset.id === event.target.value);
    this.updateCurrentDataset(dataInfo);
  }
}

