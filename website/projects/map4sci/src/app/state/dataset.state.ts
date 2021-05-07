import { createEntityCollections, EntityCollections } from '@angular-ru/common/entity';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataEntityCollectionsRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';
import { Observable, of, ReplaySubject, Subject, throwError } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

import { DatasetDefinitionService } from '../services/dataset-definition.service';
import { IndexState } from './index.state';


/**
 * Item stored in the DatasetState
 */
export interface DatasetItem {
  /** Index identifier */
  id: string;
  /** Dataset definition identifier */
  dataset: string;

  /** Loaded and parsed data */
  data: unknown;
}


/**
 * Visualization data sets
 */
@StateRepository()
@State<EntityCollections<DatasetItem>>({
  name: 'visualizationsDataset',
  defaults: createEntityCollections()
})
@Injectable()
export class DatasetState extends NgxsDataEntityCollectionsRepository<DatasetItem> implements OnDestroy {
  /** Subject used to control the lifetime of subscriptions */
  private readonly destroy$ = new ReplaySubject<void>(1);

  /**
   * Constructs the data state
   *
   * @param http Http service used to load data
   * @param index Index state used to lookup dataset directories
   * @param definitions Definitions for how to load specific datasets
   */
  constructor(
    private readonly http: HttpClient,
    private readonly index: IndexState,
    private readonly definitions: DatasetDefinitionService
  ) {
    super();
  }

  /**
   * Cleans up any resources still in use
   */
   ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Selects an unique identifier for an item
   *
   * @param entity The item
   * @returns An identifier
   */
  selectId(entity: DatasetItem): string {
    return this.makeKey(entity.id, entity.dataset);
  }

  /**
   * Loads an external dataset and caches the result in the state
   *
   * @param id The index id
   * @param dataset The dataset definition id
   * @returns An observable emitting the data
   */
  loadDataset<T>(id: string, dataset: string): Observable<T> {
    const identity = (value: unknown) => value;
    const key = this.makeKey(id, dataset);
    const { dir } = this.index.entities[id] ?? {};
    const { file, type = 'text', parser = identity } = this.definitions.getDefinition(dataset) ?? {};

    if (key in this.entities) {
      return of(this.entities[key].data as T);
    } else if (dir === undefined) {
      return throwError(new Error(`No index entry for '${id}'`));
    } else if (file === undefined) {
      return throwError(new Error(`No dataset definition for '${dataset}'`));
    }

    const url = `${dir}/${file}`;
    const result = new Subject<T>();
    // Note: The cast of type to 'json' is needed because of poor angular typings...
    const query = this.http.get(url, { responseType: type as 'json' }).pipe(
      takeUntil(this.destroy$),
      map(data => parser(data) as T),
      tap(data => this.addOne({ id, dataset, data }))
    );

    // tslint:disable-next-line: deprecation
    query.subscribe(result);
    return result;
  }

  /**
   * Creates a key for the provided id and dataset
   *
   * @param id The identifier
   * @param dataset The dataset
   * @returns A new key
   */
  private makeKey(id: string, dataset: string): string {
    return `${id}:${dataset}`;
  }
}
