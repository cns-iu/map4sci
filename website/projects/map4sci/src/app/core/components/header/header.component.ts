import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

import { SiteConfigurationService } from '../../services/site-configuration/site-configuration.service';


interface LogoConfig {
  layout?: 'icon-first' | 'label-first';
  icon?: string;
  label?: string;
  linkTo?: string;
}

interface HeaderConfig {
  logo?: LogoConfig;
}

interface SiteConfigurationWithHeaderConfig {
  header?: HeaderConfig;
}


@Component({
  selector: 'm4s-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @HostBinding('class') readonly clsName = 'm4s-header';

  readonly reverseLogoLayout: boolean;
  readonly logoIcon: string | undefined;
  readonly logoLabel: string;
  readonly logoLink: string;

  constructor(siteConfig: SiteConfigurationService<SiteConfigurationWithHeaderConfig>) {
    const { layout, icon, label = '', linkTo = '' } = siteConfig.get('header', 'logo') ?? {};

    this.reverseLogoLayout = layout?.toLowerCase?.() === 'label-first';
    this.logoIcon = icon;
    this.logoLabel = label;
    this.logoLink = linkTo;
  }
}
