import { Immutable } from '@angular-ru/common/typings';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, Subscription } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

import { EMPTY_DATASET, MapDataset, MapDatasetDirectory } from '../map/map';


@Injectable({
  providedIn: 'root'
})
export class MapDataService implements OnDestroy {
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

  setDataset(id: string): void {
    // Send an empty dataset to clear the map
    this.datasetSubject.next(EMPTY_DATASET);

    this.getDataset(id)
      .subscribe((dataset) => this.datasetSubject.next(dataset));
  }

  getDataset(id: string): Observable<Immutable<MapDataset>> {
    const dataDirectory = this.datasetDirectorySubject.getValue();
    if (!dataDirectory || !dataDirectory.find(d => d.id === id)) {
      return of(EMPTY_DATASET);
    }

    const baseUrl = dataDirectory.find(d => d.id === id)?.dir as string;
    const dataReqs = {} as Record<string, Observable<MapDataset>>;
    for (const file of this.files) {
      dataReqs[file] = this.http.get<MapDataset>(`${baseUrl}/${file}.geojson`);
    }

    return forkJoin(dataReqs)
      .pipe(catchError(m => of(EMPTY_DATASET)), take(1));
  }
}
