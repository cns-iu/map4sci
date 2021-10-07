import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TrackingPopupComponent } from './shared/components/tracking-popup/tracking-popup.component';
import { TrackingState } from './shared/components/tracking-popup/tracking.state';


@Component({
  selector: 'm4s-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'm4s-root';

  constructor(
    readonly tracking: TrackingState,
    readonly snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.openTrackingPopup();
  }

  openTrackingPopup(): void {
    const snackBar = this.snackbar.openFromComponent(TrackingPopupComponent, {
      data: {
        preClose: () => {
          snackBar.dismiss();
        }
      },
      duration: this.tracking.snapshot.allowTelemetry === undefined ? Infinity : 3000
    });
  }
}
