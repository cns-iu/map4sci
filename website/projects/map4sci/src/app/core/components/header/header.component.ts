import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

import { SiteConfigurationService } from '../../services/site-configuration/site-configuration.service';


/**
 * Logo configuration.
 */
export interface LogoConfig {
  /** Whether to put the icon or text first. */
  layout?: 'icon-first' | 'label-first';
  /** Url for an icon. */
  icon?: string;
  /** Logo label. */
  label?: string;
  /** External link. */
  'link-to'?: string;
}

/**
 * Header configuration.
 */
export interface HeaderConfig {
  logo?: LogoConfig;
}

/**
 * Partial site configuration containing the header configuration.
 */
export interface SiteConfigurationWithHeaderConfig {
  header?: HeaderConfig;
}


/**
 * Page header component.
 */
@Component({
  selector: 'm4s-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  /** Component css selector. */
  @HostBinding('class') readonly clsName = 'm4s-header';

  /** Whether to reverse the content of the logo so that the label is put first. */
  readonly reverseLogoLayout: boolean;
  /** Logo icon url. */
  readonly logoIcon: string | undefined;
  /** Logo label text. */
  readonly logoLabel: string;
  /** External link to open on logo click. */
  readonly logoLink: string;

  /**
   * Creates an instance of header component.
   *
   * @param siteConfig The loaded site configuration.
   */
  constructor(siteConfig: SiteConfigurationService<SiteConfigurationWithHeaderConfig>) {
    const { layout, icon, label = '', 'link-to': linkTo = '' } = siteConfig.get('header', 'logo') ?? {};

    this.reverseLogoLayout = layout?.toLowerCase?.() === 'label-first';
    this.logoIcon = icon;
    this.logoLabel = label;
    this.logoLink = linkTo;
  }
}
