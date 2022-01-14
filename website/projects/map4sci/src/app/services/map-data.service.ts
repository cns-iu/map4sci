import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, Subscription } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

import { Edge, EMPTY_DATASET, MapDataset, MapDatasetDirectory } from '../map/map';


@Injectable({
  providedIn: 'root'
})
export class MapDataService implements OnDestroy {
  public dataset$: Observable<MapDataset>;
  public datasetDirectory$: Observable<MapDatasetDirectory[]>;

  private files: string[] = ['boundary', 'cluster', 'edges', 'nodes'];

  private emptyDataset = EMPTY_DATASET;
  private datasetSubject = new BehaviorSubject<MapDataset>(this.emptyDataset);
  private datasetDirectorySubject = new BehaviorSubject<MapDatasetDirectory[]>([]);
  private subscriptions = new Subscription();

  constructor(private readonly http: HttpClient) {
    this.dataset$ = this.datasetSubject.asObservable();
    this.datasetDirectory$ = this.datasetDirectorySubject.asObservable();

    // Grab the dataset directory index
    this.http.get<MapDatasetDirectory[]>('assets/datasets/index.json')
      .pipe(take(1), tap((dir) => this.datasetDirectorySubject.next(dir)))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setDataset(id: string): void {
    // Send an empty dataset to clear the map
    this.datasetSubject.next(this.emptyDataset);

    this.getDataset(id)
      .subscribe((dataset) => this.datasetSubject.next(dataset));
  }

  getDataset(id: string): Observable<MapDataset> {
    const dataDirectory = this.datasetDirectorySubject.getValue();
    if (!dataDirectory || !dataDirectory.find(d => d.id === id)) {
      return of(EMPTY_DATASET);
    }

    const selectedDirectory = dataDirectory.find(d => d.id === id);
    const baseUrl = selectedDirectory?.dir as string;
    const dataReqs: Record<string, Observable<MapDataset | Node[] | Edge[]>> = {};

    for (const file of this.files) {
      dataReqs[file] = this.http.get<MapDataset>(`${baseUrl}/${file}.geojson`);
    }

    if (selectedDirectory?.config) {
      dataReqs.config = this.http.get<MapDataset>(`${baseUrl}/${selectedDirectory.config}`);
    }

    return forkJoin(dataReqs).pipe(
      catchError(() => of(this.emptyDataset)),
      take(1)
    );
  }
}
