import { Any } from '@angular-ru/common/typings';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY_DATASET, MapDataset } from './map/map';

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

  async ngOnInit(): Promise<void> {
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
      console.log('Pulled from cache');
      return datasetCache[datasetInfo.id];
    }

    console.log('Pulling from http');
    files.forEach(async file => {
      const url = `${datasetInfo.dir}/${file}.geojson`;
      dataset[file] = await http.get(url).toPromise();
    });

    this.datasetCache[datasetInfo.id] = dataset;
    console.log('Added to cache: ', this.datasetCache);

    return dataset;
  }

  async updateCurrentDataset(datasetInfo: Any): Promise<void> {
    if (this.datasetDirectory.indexOf(datasetInfo) < 0) {
      return;
    }
    this.dataset = EMPTY_DATASET;
    this.dataset = await this.getMapData(datasetInfo);
  }

  mapDataSwitcherChange(event: Any): void {
    const dataInfo = this.datasetDirectory.find(dataset => dataset.id === event.target.value);
    this.updateCurrentDataset(dataInfo);
  }
}

