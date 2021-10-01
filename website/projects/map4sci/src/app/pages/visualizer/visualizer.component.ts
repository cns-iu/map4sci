import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { EMPTY_DATASET } from '../../map/map';
import { MapDataService } from '../../services/map-data.service';

@Component({
  selector: 'm4s-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualizerComponent implements OnDestroy {

  events: string[] = [];
  opened: boolean = true;
  iconOpened: boolean = true;

  dataset = EMPTY_DATASET;

  get displayMap(): boolean {
    const { dataset } = this;
    if (!dataset.nodes) {
      return false;
    }
    if (!dataset.nodes.features) {
      return false;
    }
    if (dataset.nodes.features.length < 1) {
      return false;
    }

    return true;
  }

  private readonly subscriptions = new Subscription();

  constructor(
    readonly mapData: MapDataService,
    cdr: ChangeDetectorRef
  ) {
    const sub = mapData.dataset$.subscribe(ds => {
      this.dataset = ds;
      cdr.markForCheck();
    });

    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  mapDataSwitcherChange(value: string): void {
    this.mapData.setDataset(value);
  }

  toggle(): void {
    const { opened } = this;
    if (opened) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }
}
