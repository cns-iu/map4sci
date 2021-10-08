import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, InjectionToken, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SiteConfigurationService } from '../site-configuration/site-configuration.service';


export interface ThemingConfig {
  primary?: string;
  'primary-text'?: string;
  background?: string;
  header?: string;
  body?: string;
  'link-text'?: string;
}

export interface SiteConfigurationWithThemingConfig {
  theming?: ThemingConfig;
}


export const DEFAULT_THEME = new InjectionToken<Required<ThemingConfig>>('Default theme');


@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  private styleEl?: HTMLStyleElement;

  constructor(
    @Inject(DEFAULT_THEME) readonly defaultTheme: Required<ThemingConfig>,
    @Inject(DOCUMENT) private readonly document: Document | null,
    private readonly sanitizer: DomSanitizer,
    private readonly siteConfig: SiteConfigurationService<SiteConfigurationWithThemingConfig>
  ) { }

  initialize(): void {
    const { document, sanitizer } = this;
    if (!this.styleEl && document) {
      const styleEl = this.styleEl = document.createElement('style');
      const rule = sanitizer.sanitize(SecurityContext.STYLE, this.getThemingStyleRule());

      styleEl.appendChild(document.createTextNode(''));
      document.head.appendChild(styleEl);

      if (rule && styleEl.sheet) {
        styleEl.sheet.insertRule(rule);
      }
    }
  }

  private getThemingStyleRule(): string {
    const { defaultTheme, siteConfig } = this;
    const {
      primary, 'primary-text': primaryText, background,
      header, body, 'link-text': linkText
    } = siteConfig.get('theming') ?? {};

    return `:root {
      --primary: ${primary ?? defaultTheme.primary};
      --primary-text: ${primaryText ?? defaultTheme['primary-text']};
      --background: ${background ?? defaultTheme.background};
      --header: ${header ?? defaultTheme.header};
      --body: ${body ?? defaultTheme.body};
      --link-text: ${linkText ?? defaultTheme['link-text']};
    }`;
  }
}
