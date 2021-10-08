import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';

import { MarkdownModalComponent } from '../../../shared/components/markdown-modal/markdown-modal.component';
import { SiteConfigurationService } from '../../services/site-configuration/site-configuration.service';
import { AnalyticsConsentComponent } from '../analytics-consent/analytics-consent.component';


/**
 * Footer configuration.
 */
export interface FooterConfig {
  /** Copyright text. */
  copyright?: string;
  /** Url to terms of service markdown. */
  'terms-of-service'?: string;
  /** Url to privacy policy markdown. */
  'privacy-policy'?: string;
}

/**
 * Partial site configuration containing the footer configuration.
 */
export interface SiteConfigurationWithFooterConfig {
  /** Optional footer configuration. */
  footer?: FooterConfig;
}


/**
 * Page footer component.
 */
@Component({
  selector: 'm4s-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnDestroy {
  /** Component css selector. */
  @HostBinding('class') readonly clsName = 'm4s-footer';

  /** Copyright text. */
  readonly copyright: string;
  /** Terms of service markdown url. */
  readonly termsOfService: string | undefined;
  /** Privacy policy markdown url. */
  readonly privacyPolicy: string | undefined;

  /** Currently active analytics consent popup. */
  private consentPopup?: MatSnackBarRef<AnalyticsConsentComponent>;

  /**
   * Creates an instance of footer component.
   *
   * @param siteConfig The loaded site configuration.
   */
  constructor(siteConfig: SiteConfigurationService<SiteConfigurationWithFooterConfig>) {
    const {
      copyright = '',
      'terms-of-service': termsOfService,
      'privacy-policy': privacyPolicy
    } = siteConfig.get('footer') ?? {};

    this.copyright = copyright;
    this.termsOfService = termsOfService;
    this.privacyPolicy = privacyPolicy;
  }

  /**
   * Cleans up after this component.
   */
  ngOnDestroy(): void {
    this.dismissAnalyticsConsentPopup();
  }

  /**
   * Opens the terms of service modal.
   */
  openTermsOfService(): void {
    MarkdownModalComponent.open({
      title: 'Terms & Conditions',
      src: this.termsOfService!
    }, {
      width: '800px',
      height: '600px'
    });
  }

  /**
   * Opens the privacy policy modal.
   */
  openPrivacyPolicy(): void {
    MarkdownModalComponent.open({
      title: 'Privacy Policy',
      src: this.privacyPolicy
    }, {
      width: '800px',
      height: '600px'
    });
  }

  /**
   * Toggles the analytics opt in/out popup.
   */
  toggleAnalyticsConsent(): void {
    if (this.consentPopup) {
      this.dismissAnalyticsConsentPopup();
    } else {
      this.consentPopup = AnalyticsConsentComponent.open({
        dismissable: true
      });

      this.consentPopup.afterDismissed().pipe(take(1)).subscribe(() => {
        this.consentPopup = undefined;
      });
    }
  }

  /**
   * Closes the analytics consent popup if open.
   */
  private dismissAnalyticsConsentPopup(): void {
    this.consentPopup?.dismiss?.();
    this.consentPopup = undefined;
  }
}
