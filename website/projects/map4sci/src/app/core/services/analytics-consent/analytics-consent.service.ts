import { Inject, Injectable } from '@angular/core';
import { IGoogleAnalyticsSettings, NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN, NGX_WINDOW } from 'ngx-google-analytics';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnalyticsConsentService {
  static readonly LOCAL_STORAGE_CONSENT_KEY = 'ALLOW_TELEMETRY';

  readonly consentChanged = new ReplaySubject<boolean>(1);

  private readonly gaTrackingCode: string;
  private consentGiven = this.loadConsentFromLocalStorage();

  get hasConsent(): boolean {
    return this.consentGiven !== false;
  }

  get hasUserSetConsent(): boolean {
    return this.consentGiven !== undefined;
  }

  constructor(
    @Inject(NGX_WINDOW) private readonly window: Record<string, boolean> | null,
    @Inject(NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN) { trackingCode }: IGoogleAnalyticsSettings
  ) {
    this.gaTrackingCode = trackingCode;
    this.disableGoogleTracking(!this.hasConsent);
    this.consentChanged.next(this.hasConsent);
  }

  setConsent(consentGiven: boolean): void {
    this.consentGiven = consentGiven;
    this.saveConsentInLocalStorage(consentGiven);
    this.disableGoogleTracking(!consentGiven);
    this.consentChanged.next(consentGiven);
  }

  private loadConsentFromLocalStorage(): boolean | undefined {
    const storageValue = localStorage.getItem(AnalyticsConsentService.LOCAL_STORAGE_CONSENT_KEY);
    return storageValue == null ? undefined : storageValue.toLowerCase() === 'true';
  }

  private saveConsentInLocalStorage(consentGiven: boolean): void {
    localStorage.setItem(
      AnalyticsConsentService.LOCAL_STORAGE_CONSENT_KEY,
      `${consentGiven}`
    );
  }

  private disableGoogleTracking(disabled = true): void {
    if (this.window) {
      this.window[`ga-disable-${this.gaTrackingCode}`] = disabled;
    }
  }
}
