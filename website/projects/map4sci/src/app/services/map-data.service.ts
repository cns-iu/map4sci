import { MapDataset, MapDatasetCache, MapDatasetDirectory } from './../map/map';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { EMPTY_DATASET } from '../map/map';
import { FeatureCollection } from 'geojson';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {
  private dataset: MapDataset = EMPTY_DATASET;
  private datasetDirectory: MapDatasetDirectory[] = [];
  private datasetCache: MapDatasetCache = {};
  private files: string[] = [ 'boundary', 'cluster', 'edges', 'nodes' ];

  constructor(private readonly http: HttpClient) { }

  async getCurrentDataset(): Promise<MapDataset> {
    if (this.dataset === EMPTY_DATASET) {
      const directory = await this.getDatasetDirectory();
      const data = await this.getDataset(directory[0].id);
      this.dataset = data;
    }
    return {...this.dataset};
  }

  async getDatasetDirectory(): Promise<MapDatasetDirectory[]> {
    if (this.datasetDirectory.length < 1) {
      const directory = await this.fetchDatasetDirectory();
      this.datasetDirectory = directory;
    }
    return [...this.datasetDirectory];
  }

  async fetchDatasetDirectory(): Promise<MapDatasetDirectory[]> {
    return await this.http.get('assets/datasets/index.json').toPromise() as MapDatasetDirectory[];
  }

  async getDataset(key: string): Promise<MapDataset> {
    const { files, http } = this;
    if (this.datasetCache[key]) {
      return this.datasetCache[key];
    }

    const dataDirectory = this.mapKeyToDirectory(key);
    if (!dataDirectory) {
      return EMPTY_DATASET;
    }

    const tempDataset: MapDataset = EMPTY_DATASET;
    files.forEach(async (file: string) => {
      const url = `${dataDirectory.dir}/${file}.geojson`;
      tempDataset[file] = await http.get(url).toPromise() as FeatureCollection;
    });
    this.datasetCache[dataDirectory.id] = tempDataset;
    return tempDataset;
  }

  async setCurrentDataset(key: string): Promise<void> {
    this.dataset = await this.getDataset(key);
  }

  mapKeyToDirectory(key: string): MapDatasetDirectory | undefined {
    if (this.datasetDirectory.find(directory => directory.id === key)) {
      return this.datasetDirectory.find(directory => directory.id === key);
    }
    return {} as MapDatasetDirectory;
  }
}
