import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ngxsTestingPlatform } from '@ngxs-labs/data/testing';
import { isObservable } from 'rxjs';

import { IndexItem, IndexState, isPartialIndexItem } from './index.state';


const originalIt = it;


describe('isPartialIndexItem(obj)', () => {
  it('is false for null or undefined', () => {
    expect(isPartialIndexItem(undefined)).toBeFalse();
    expect(isPartialIndexItem(null)).toBeFalse();
  });

  it('is false for primitive types', () => {
    expect(isPartialIndexItem(true)).toBeFalse();
    expect(isPartialIndexItem(1)).toBeFalse();
    expect(isPartialIndexItem('text')).toBeFalse();
  });

  it('is false when the object is missing required properties', () => {
    const obj = { id: 'a', name: 'Letter A' };
    expect(isPartialIndexItem(obj)).toBeFalse();
  });

  it('is false when the required properties have the incorrect type', () => {
    const obj = { id: 1, name: 'Item 1', dir: '/directory' };
    expect(isPartialIndexItem(obj)).toBeFalse();
  });

  it('is true when all required properties are present and have the correct types', () => {
    const obj = { id: '2', name: 'Item 2', dir: '/data' };
    expect(isPartialIndexItem(obj)).toBeTrue();
  });
});


describe('IndexState', () => {
  let controller: HttpTestingController;

  function it(expectation: string, assertion: (state: IndexState) => void | Promise<void>): void;
  function it(expectation: string, providers: Provider[], assertion: (state: IndexState) => void | Promise<void>): void;
  function it(expectation: string, providersOrAssertion: unknown, assertion?: (state: IndexState) => void | Promise<void>): void {
    if (typeof providersOrAssertion === 'function') {
      assertion = providersOrAssertion as (state: IndexState) => void | Promise<void>;
      providersOrAssertion = [];
    }

    originalIt(expectation, ngxsTestingPlatform(
      {
        states: [IndexState],
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          providersOrAssertion
        ]
      },
      async (_unused, state: IndexState) => {
        controller = TestBed.inject(HttpTestingController);
        await assertion!(state);
      }
    ));
  }

  describe('ngOnDestroy()', () => {
    it('cancels pending requests', state => {
      state.loadIndexFile('/never/loaded');
      state.ngOnDestroy();
      expect(() => controller.verify({ ignoreCancelled: true })).not.toThrow();
    });
  });

  describe('loadIndexFile(url)', () => {
    const url = '/data/index.json';
    const items: Partial<IndexItem>[] = [
      { id: 'a', name: 'Vis 1', dir: '/datasets/vis1/' },
      { id: 'b', name: 'Vis Bar', dir: '/bar-vis/' }
    ];

    let spy: jasmine.Spy;

    beforeEach(() => {
      spy = jasmine.createSpy();
    });

    it('returns an observable', state => {
      const result = state.loadIndexFile(url);
      expect(isObservable(result)).toBeTrue();
    });

    it('completes when loading is finished', state => {
      state.loadIndexFile(url).subscribe({ complete: spy });
      controller.expectOne(url).flush([]);
      expect(spy).toHaveBeenCalled();
    });

    it('adds items to the state', state => {
      spyOn(state, 'addMany');
      state.loadIndexFile(url);
      controller.expectOne(url).flush(items);
      expect(state.addMany).toHaveBeenCalled();
    });

    it('errors if the data is not an array', state => {
      state.loadIndexFile(url).subscribe({ error: spy });
      controller.expectOne(url).flush('"bad json"');
      expect(spy).toHaveBeenCalled();
    });

    it('errors if any array item is not a partial index item', state => {
      state.loadIndexFile(url).subscribe({ error: spy });
      controller.expectOne(url).flush([{ id: 'bad item' }]);
      expect(spy).toHaveBeenCalled();
    });
  });
});
