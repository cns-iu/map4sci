import { Any } from '@angular-ru/common/typings';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeatureCollection } from 'geojson';

const EMPTY_FEATURES: FeatureCollection = {
  type: 'FeatureCollection',
  features: []
};

const EMPTY_DATASET = {
  id: 'empty',
  boundary: EMPTY_FEATURES,
  cluster: EMPTY_FEATURES,
  edges: EMPTY_FEATURES,
  nodes: EMPTY_FEATURES
}

interface MapDataset {
  boundary: FeatureCollection;
  cluster: FeatureCollection;
  edges: FeatureCollection;
  nodes: FeatureCollection;
  id: string;
}

interface MapDatasetDirectory {
  [key: string]: MapDataset;
  [index: number]: MapDataset;
}

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

  dataset: Any = { };
  datasetLookup: Any[] = [];
  currentDataset: MapDataset = EMPTY_DATASET;

  async ngOnInit(): Promise<void> {
    this.datasetLookup = await this.getMapData();
    this.currentDataset = this.dataset[this.datasetLookup[0].id];
  }

  async getMapData(): Promise<Any[]> {
    const { http, dataset, files } = this;
    const lookup: Any = [];

    // Fetch the index.json file
    const datasetDirectory: any = await http.get('assets/datasets/index.json').toPromise();

    // For each directory in the idnex.json file, go through and fetch the map data.
    datasetDirectory.forEach((tempDataset: Any) => {
      lookup.push(tempDataset);
      this.dataset[tempDataset.id] = { id: tempDataset.id };
      files.forEach(async file => {
        const url = `${tempDataset.dir}/${file}.geojson`;
        // tslint:disable-next-line: deprecation
        dataset[tempDataset.id][file] = await http.get(url).toPromise();
      });
    });

    return lookup;
  }

  updateCurrentDataset(key: Any): void {
    if (!this.dataset[key]) {
      return;
    }
    this.currentDataset = EMPTY_DATASET;
    this.currentDataset = this.dataset[key];
  }

  showFiles(): void {
    console.log('dataset: ', this.dataset);
    console.log('this: ', this);
  }
}

