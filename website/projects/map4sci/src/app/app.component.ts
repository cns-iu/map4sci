import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, HostBinding, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { MarkdownModalComponent, MarkdownModalData } from './shared/components/markdown-modal/markdown-modal.component';
import { TrackingState } from './shared/components/tracking-popup/tracking.state';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TrackingPopupComponent } from './shared/components/tracking-popup/tracking-popup.component';


@Component({
  selector: 'm4s-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy, OnInit {
  @HostBinding('class') readonly clsName = 'm4s-root';

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly dialog: MatDialog,
    readonly tracking: TrackingState,
    readonly snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const snackBar = this.snackbar.openFromComponent(TrackingPopupComponent, {
      data: {
        preClose: () => {
          snackBar.dismiss();
        }
      },
      duration: this.tracking.snapshot.allowTelemetry === undefined ? Infinity : 3000
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
