import { Any, Immutable } from '@angular-ru/common/typings';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, Subscription } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';

import { EMPTY_DATASET, MapDataset, MapDatasetCache, MapDatasetDirectory } from '../map/map';


@Injectable({
  providedIn: 'root'
})
export class MapDataService implements OnDestroy {
  private datasetCache: MapDatasetCache = {};
  private files: string[] = [ 'boundary', 'cluster', 'edges', 'nodes' ];

  private datasetSubject = new BehaviorSubject<Immutable<MapDataset>>(EMPTY_DATASET);
  private datasetDirectorySubject = new BehaviorSubject<Immutable<MapDatasetDirectory[]>>([]);
  private subscriptions = new Subscription();

  public dataset$ = this.datasetSubject.asObservable();
  public datasetDirectory$ = this.datasetDirectorySubject.asObservable();

  constructor(private readonly http: HttpClient) {
    // Grab the dataset directory index
    this.http.get<MapDatasetDirectory[]>('assets/datasets/index.json')
      .pipe(take(1), tap((dir) => this.datasetDirectorySubject.next(dir)))
      .subscribe();

    // Set current dataset to the 'first' dataset whenever a directory is loaded
    this.subscriptions.add(
      this.datasetDirectory$.pipe(tap((dir) => {
        if (dir.length > 0) { this.setDataset(dir[0].id); }
      })).subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setDataset(key: string): void {
    this.getDataset(key).pipe(tap((dataset) =>
        this.datasetSubject.next(dataset)
      )).subscribe();
  }

  getDataset(key: string): Observable<Immutable<MapDataset>> {
    if (this.datasetCache[key]) {
      return of(this.datasetCache[key]);
    }

    const dataDirectory = this.datasetDirectorySubject.getValue();
    if (!dataDirectory || !dataDirectory.find(d => d.id === key)) {
      return of(EMPTY_DATASET);
    }

    const { files, http } = this;
    const baseUrl = dataDirectory.find(d => d.id === key)?.dir as string;
    const dataReqs = {} as Any;
    for (const file of files) {
      dataReqs[file] = http.get(`${baseUrl}/${file}.geojson`);
    }

    return forkJoin(dataReqs).pipe(
      map<unknown, MapDataset>(m => m as MapDataset),
      catchError(m => of(EMPTY_DATASET)),
      tap(m => this.datasetCache[key] = m),
      take(1)
    );
  }
}
