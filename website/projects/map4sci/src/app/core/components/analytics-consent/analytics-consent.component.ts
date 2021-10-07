import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { BasePopupComponent } from '../../../shared/components/base-popup/base-popup.component';
import { AnalyticsConsentService } from '../../services/analytics-consent/analytics-consent.service';


@Component({
  selector: 'm4s-analytics-consent',
  templateUrl: './analytics-consent.component.html',
  styleUrls: ['./analytics-consent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsConsentComponent extends BasePopupComponent implements OnDestroy {
  @HostBinding('class') readonly clsName = 'm4s-analytics-consent-popup';

  showGiveConsent = false;
  showRescindConsent = false;

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly ref: MatSnackBarRef<AnalyticsConsentComponent>,
    private readonly consentService: AnalyticsConsentService,
    cdr: ChangeDetectorRef
  ) {
    super();

    const sub = consentService.consentChanged.pipe(delay(50)).subscribe(() => {
      this.updateShownButtons();
      cdr.markForCheck();
    });

    this.subscriptions.add(sub);
    this.updateShownButtons();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setConsent(consentGiven: boolean): void {
    this.consentService.setConsent(consentGiven);
    this.ref.dismiss();
  }

  private updateShownButtons(): void {
    const { consentService: { hasConsent, hasUserSetConsent } } = this;
    this.showGiveConsent = !hasUserSetConsent || !hasConsent;
    this.showRescindConsent = !hasUserSetConsent || hasConsent;
  }
}
