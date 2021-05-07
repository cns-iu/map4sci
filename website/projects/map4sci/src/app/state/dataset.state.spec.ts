import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ngxsTestingPlatform } from '@ngxs-labs/data/testing';
import { isObservable } from 'rxjs';

import { DatasetDefinition, DatasetDefinitionService } from '../services/dataset-definition.service';
import { DatasetItem, DatasetState } from './dataset.state';
import { IndexItem, IndexState } from './index.state';


const originalIt = it;


describe('DatasetState', () => {
  const indexItem: IndexItem = {
    id: 'foo',
    name: 'FOO',
    description: '',
    dir: '/path/to/stuff',
    selectable: true
  };
  const def1: DatasetDefinition = { dataset: '1', file: 'data1.txt' };
  const def2: DatasetDefinition = { dataset: '2', file: 'data2.json', type: 'json' };
  const url1 = `${indexItem.dir}/${def1.file}`;
  const url2 = `${indexItem.dir}/${def2.file}`;
  const item: DatasetItem = { id: indexItem.id, dataset: def1.dataset, data: 123 };

  let controller: HttpTestingController;
  let parser: jasmine.Spy;
  let spy: jasmine.Spy;


  function it(expectation: string, assertion: (state: DatasetState) => void | Promise<void>): void;
  function it(expectation: string, providers: Provider[], assertion: (state: DatasetState) => void | Promise<void>): void;
  function it(expectation: string, providersOrAssertion: unknown, assertion?: (state: DatasetState) => void | Promise<void>): void {
    if (typeof providersOrAssertion === 'function') {
      assertion = providersOrAssertion as (state: DatasetState) => void | Promise<void>;
      providersOrAssertion = [];
    }

    originalIt(expectation, ngxsTestingPlatform(
      {
        states: [DatasetState, IndexState],
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          DatasetDefinitionService,
          providersOrAssertion
        ]
      },
      async (_unused, state: DatasetState, index: IndexState) => {
        const defService = TestBed.inject(DatasetDefinitionService);
        controller = TestBed.inject(HttpTestingController);

        index.addOne(indexItem);
        defService.addDefinition({ ...def1, parser });
        defService.addDefinition(def2);

        await assertion!(state);
      }
    ));
  }


  beforeEach(() => {
    parser = jasmine.createSpy().and.callFake(val => val);
    spy = jasmine.createSpy();
  });

  describe('ngOnDestroy()', () => {
    it('cancels pending requests', state => {
      state.loadDataset(indexItem.id, def1.dataset);
      state.ngOnDestroy();
      expect(() => controller.verify({ ignoreCancelled: true })).not.toThrow();
    });
  });

  describe('loadData(id, dataset)', () => {
    it('returns an observable', state => {
      const result = state.loadDataset(indexItem.id, def1.dataset);
      expect(isObservable(result)).toBeTrue();
    });

    it('emits the loaded data', state => {
      const data = 'some data';
      state.loadDataset(indexItem.id, def1.dataset).subscribe({ next: spy });
      controller.expectOne(url1).flush(data);
      expect(spy).toHaveBeenCalledWith(data);
    });

    it('caches the data', state => {
      spyOn(state, 'addOne');
      state.loadDataset(indexItem.id, def1.dataset);
      controller.expectOne(url1).flush('');
      expect(state.addOne).toHaveBeenCalled();
    });

    it('returns the cached data if available', state => {
      state.addOne(item);
      state.loadDataset(item.id, item.dataset).subscribe({ next: spy });
      expect(spy).toHaveBeenCalledWith(item.data);
    });

    it('does not make a request if the data is in the cache', state => {
      state.addOne(item);
      state.loadDataset(item.id, item.dataset);
      expect(() => controller.verify()).not.toThrow();
    });

    it('errors if there is no index entry for the id', state => {
      state.loadDataset('badid', def1.dataset).subscribe({ error: spy });
      expect(spy).toHaveBeenCalled();
    });

    it('errors if there is no definition for the dataset', state => {
      state.loadDataset(indexItem.id, 'unknown-dataset').subscribe({ error: spy });
      expect(spy).toHaveBeenCalled();
    });

    it('calls the custom dataset parser if provided', state => {
      const raw = 'raw data';
      state.loadDataset(indexItem.id, def1.dataset);
      controller.expectOne(url1).flush(raw);
      expect(parser).toHaveBeenCalledWith(raw);
    });

    it('returns the parsed data', state => {
      const parsed = 1234;
      parser.and.returnValue(parsed);
      state.loadDataset(indexItem.id, def1.dataset).subscribe({ next: spy });
      controller.expectOne(url1).flush('');
      expect(spy).toHaveBeenCalledWith(parsed);
    });

    it('returns the raw data if a parser was not provided', state => {
      const raw = 'unparsed data';
      state.loadDataset(indexItem.id, def2.dataset).subscribe({ next: spy });
      controller.expectOne(url2).flush(raw);
      expect(spy).toHaveBeenCalledWith(raw);
    });
  });
});
