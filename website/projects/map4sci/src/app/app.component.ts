import { Any } from '@angular-ru/common/typings';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';

import { EMPTY_DATASET, MapDataset } from './map/map';
import { MapDataService } from './services/map-data.service';


@Component({
  selector: 'm4s-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'm4s-root';

  private subscriptions = new Subscription();

  constructor(readonly mapData: MapDataService) { }

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

  ngOnInit(): void {
    this.subscriptions.add(
      this.mapData.dataset$.subscribe(ds => this.dataset = ds as unknown as MapDataset)
    );
  }

  mapDataSwitcherChange(event: Any): void {
    const mapId: string = event.target.value;
    this.mapData.setDataset(mapId);
  }
}
