import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Inject, OnDestroy } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { BasePopupComponent } from '../../../shared/components/base-popup/base-popup.component';
import { AnalyticsConsentService } from '../../services/analytics-consent/analytics-consent.service';


export interface AnalyticsConsentComponentData {
  dismissable?: boolean;
}


@Component({
  selector: 'm4s-analytics-consent',
  templateUrl: './analytics-consent.component.html',
  styleUrls: ['./analytics-consent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsConsentComponent extends BasePopupComponent implements OnDestroy {
  static readonly DEFAULT_DATA: AnalyticsConsentComponentData = { dismissable: false };

  @HostBinding('class') readonly clsName = 'm4s-analytics-consent-popup';

  readonly dismissable: boolean;
  showGiveConsent = false;
  showRescindConsent = false;

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly ref: MatSnackBarRef<AnalyticsConsentComponent>,
    private readonly consentService: AnalyticsConsentService,
    @Inject(MAT_SNACK_BAR_DATA) data: AnalyticsConsentComponentData,
    cdr: ChangeDetectorRef
  ) {
    super();

    this.dismissable = data.dismissable ?? false;
    this.updateShownButtons();

    this.subscriptions.add(consentService.consentChanged.pipe(
      delay(50)
    ).subscribe(() => {
      this.updateShownButtons();
      cdr.markForCheck();
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  dismiss(): void {
    this.ref.dismiss();
  }

  setConsent(consentGiven: boolean): void {
    this.consentService.setConsent(consentGiven);
    this.dismiss();
  }

  private updateShownButtons(): void {
    const { consentService: { hasConsent, hasUserSetConsent } } = this;
    this.showGiveConsent = !hasUserSetConsent || !hasConsent;
    this.showRescindConsent = !hasUserSetConsent || hasConsent;
  }
}
