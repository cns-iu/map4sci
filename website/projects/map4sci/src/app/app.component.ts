import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { EMPTY_DATASET } from './map/map';
import { MapDataService } from './services/map-data.service';
import { MarkdownModalComponent, MarkdownModalData } from './shared/components/markdown-modal/markdown-modal.component';


@Component({
  selector: 'm4s-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  @HostBinding('class') readonly clsName = 'm4s-root';

  events: string[] = [];
  opened: boolean = true;

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
    cdr: ChangeDetectorRef,
    private readonly dialog: MatDialog
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

  mapDataSwitcherChange(event: Event): void {
    const mapId = (event.target as HTMLOptionElement | null)?.value ?? '';
    this.mapData.setDataset(mapId);
  }

  openTerms(): void {
    this.dialog.open<MarkdownModalComponent, MarkdownModalData>(MarkdownModalComponent, {
      width: '800px',
      height: '600px',
      data: {
        title: 'Terms & Conditions',
        src: 'assets/footer/terms.md'
      }
    });
  }

  openPrivacyPolicy(): void {
    this.dialog.open<MarkdownModalComponent, MarkdownModalData>(MarkdownModalComponent, {
      width: '800px',
      height: '600px',
      data: {
        title: 'Privacy Policy',
        src: 'assets/footer/privacy-policy.md'
      }
    });
  }
}
