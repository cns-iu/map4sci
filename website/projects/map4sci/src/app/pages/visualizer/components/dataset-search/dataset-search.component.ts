import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EMPTY, from, Observable } from 'rxjs';
import { delay, distinctUntilChanged, map, mapTo, mergeAll, scan, shareReplay, startWith, throttle } from 'rxjs/operators';


export type SearchableDatasetItem = Record<'id' | 'value', string>;


const DEFAULT_AUTO_COMPLETE_THROTTLE = 100;


@Component({
  selector: 'm4s-dataset-search',
  templateUrl: './dataset-search.component.html',
  styleUrls: ['./dataset-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatasetSearchComponent<T extends SearchableDatasetItem = SearchableDatasetItem> {
  @HostBinding('class') readonly clsName = 'm4s-dataset-search';

  @Input() items: T[] = [];

  @Input() autoCompleteLimit?: number;
  @Input() autoCompleteThrottle?: number;

  @Output() readonly searchClick = new EventEmitter<string>();
  @Output() readonly clearClick = new EventEmitter<void>();

  get autoCompleteDisabled(): boolean {
    const { autoCompleteLimit: limit } = this;
    return limit !== undefined && limit <= 0;
  }

  get autoCompleteThrottleSelector(): Observable<void> {
    const { autoCompleteThrottle: duration = DEFAULT_AUTO_COMPLETE_THROTTLE } = this;
    return duration <= 0 ? EMPTY : EMPTY.pipe(delay(duration));
  }

  readonly controller = new FormControl();
  readonly filteredItems$ = this.controller.valueChanges.pipe(
    throttle(() => this.autoCompleteThrottleSelector),
    map(value => this.getValue(value)),
    map(value => this.filterItems(value)),
    startWith([])
  );

  readonly buttonClick = new EventEmitter<void>();
  readonly buttonDisabled$ = this.controller.valueChanges.pipe(
    map(value => !value),
    startWith(true)
  );
  readonly buttonType$ = this.setupButtonTypeObservable();

  getValue(this: void, item: string | SearchableDatasetItem | null): string {
    if (item === null) {
      return '';
    } else if (typeof item === 'string') {
      return item;
    } else {
      return item.value;
    }
  }

  private filterItems(value: string): T[] {
    const { items, autoCompleteLimit: limit } = this;
    const lcaseValue = value.toLowerCase();
    const matches = (item: T) =>
      item.value.toLowerCase().includes(lcaseValue);

    if (!value || this.autoCompleteDisabled) {
      return [];
    }

    const filteredItems = items.filter(matches);
    return limit ? filteredItems.slice(0, limit) : filteredItems;
  }

  private setupButtonTypeObservable(): Observable<'Search' | 'Clear'> {
    type SourceType = 'valueChange' | 'click';
    type ButtonType = 'Search' | 'Clear';

    const { controller, buttonClick, searchClick, clearClick } = this;
    const sources: Observable<SourceType>[] = [
      controller.valueChanges.pipe(mapTo('valueChange')),
      buttonClick.pipe(mapTo('click'))
    ];
    const stateReducer = (prev: ButtonType, source: SourceType): ButtonType => {
      if (source === 'valueChange') {
        return 'Search';
      }

      if (prev === 'Search') {
        searchClick.emit(this.getValue(controller.value));
        return 'Clear';
      } else {
        clearClick.emit();
        return 'Search';
      }
    };

    return from(sources).pipe(
      mergeAll(),
      scan(stateReducer, 'Search'),
      startWith<ButtonType>('Search'),
      distinctUntilChanged(),
      shareReplay(1)
    );
  }
}
