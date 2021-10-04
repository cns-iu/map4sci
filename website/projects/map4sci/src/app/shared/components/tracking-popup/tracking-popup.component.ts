import { Component, ElementRef, HostBinding, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { TrackingState } from './tracking.state';

type SnackBarData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preClose: () => any;
  duration: number;
};


@Component({
  selector: 'm4s-tracking-popup',
  templateUrl: './tracking-popup.component.html',
  styleUrls: ['./tracking-popup.component.scss']
})
export class TrackingPopupComponent {
  @HostBinding('class') readonly clsName = 'm4s-tracking-popup';

  container: HTMLElement;

  constructor(elementRef: ElementRef<HTMLElement>, readonly tracking: TrackingState, @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData) {
    this.container = elementRef.nativeElement;
  }

  dismiss(): void {
    this.data.preClose();
  }

  submit(entry: boolean): void {
    this.tracking.setAllowTelemetry(entry);
    this.dismiss();
  }

  showButton(button: 'opt-in' | 'opt-out'): boolean {
    if (this.tracking.snapshot.allowTelemetry === undefined) {
      return true;
    } else {
      return button === 'opt-in' ? !this.tracking.snapshot.allowTelemetry : this.tracking.snapshot.allowTelemetry;
    }
  }
}
