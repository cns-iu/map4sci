import { createEntityCollections, EntityCollections } from '@angular-ru/common/entity';
import { HttpClient } from '@angular/common/http';
import { Injectable, Input, OnDestroy } from '@angular/core';
import { StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataEntityCollectionsRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';
import { from, Observable, ReplaySubject, Subject } from 'rxjs';
import { concatMap, ignoreElements, map, takeUntil, tap, toArray } from 'rxjs/operators';

import { validate } from '../shared/rxjs/operators/validate';


/**
 * Items stored in IndexState
 */
export interface IndexItem {
  /** Unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** Directory of data */
  dir: string;
}


/**
 * Tests whether a value is a partial IndexItem.
 * Items must pass this test when loaded from an index file to be accepted.
 * Currently the following fields are required: id, name, and dir
 *
 * @param obj The potential item
 * @returns Whether the object is a partial IndexItem
 */
export function isPartialIndexItem(obj: unknown): obj is Partial<IndexItem> {
  const hasPropWithType = (prop: string, type: string) => (
    typeof (obj as Record<string, unknown>)[prop] === type
  );

  return (
    !!obj &&
    hasPropWithType('id', 'string') &&
    hasPropWithType('name', 'string') &&
    hasPropWithType('dir', 'string')
  );
}


/**
 * Visualization data set index
 */
@StateRepository()
@State<EntityCollections<IndexItem>>({
  name: 'visualizationsIndex',
  defaults: createEntityCollections()
})
@Injectable()
export class IndexState extends NgxsDataEntityCollectionsRepository<IndexItem> implements OnDestroy {
  /** Subject used to control the lifetime of subscriptions */
  private readonly destroy$ = new ReplaySubject<void>(1);
  // tslint:disable-next-line: variable-name
  private _entities: any;
  public get entities(): any {
    return this._entities;
  }
  public set entities(value: any) {
    this._entities = value;
  }

  /**
   * Constructs the index state
   *
   * @param http Http service used to load index files
   */
  constructor(private readonly http: HttpClient) {
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
   * Loads an index json file and adds each item defined if valid.
   *
   * @param url Url of the file
   * @returns An observable that completes when loading has finished or errors in case of invalid data
   */
  loadIndexFile(url: string): Observable<void> {
    const normalizeItem = (item: Partial<IndexItem>) => ({
      description: '',
      selectable: false,
      ...item
    } as IndexItem);

    const result = new Subject<void>();
    const query = this.http.get(url, { responseType: 'json' }).pipe(
      takeUntil(this.destroy$),
      validate(Array.isArray, 'Expected response to be an array'),
      concatMap((data: Observable<Input>) => from(data).pipe(
        validate(isPartialIndexItem, 'Expected response items to be IndexItems'),
        map(normalizeItem),
        toArray()
      )),
      tap(items => this.addMany(items)),
      ignoreElements()
    );

    // tslint:disable-next-line: deprecation
    query.subscribe(result);
    return result;
  }
}
