import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

import { AnalyticsConsentComponent } from './core/components/analytics-consent/analytics-consent.component';
import { AnalyticsConsentService } from './core/services/analytics-consent/analytics-consent.service';


@Component({
  selector: 'm4s-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'm4s-root';

  constructor(private readonly consentService: AnalyticsConsentService) { }

  ngOnInit(): void {
    this.openTrackingPopup();
  }

  openTrackingPopup(): void {
    AnalyticsConsentComponent.open(undefined, {
      duration: this.consentService.hasUserSetConsent ? 3000 : Infinity
    });
  }
}
