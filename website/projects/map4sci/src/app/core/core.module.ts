import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { environment } from '../../environments/environment';
import { BaseModalModule } from '../shared/components/base-modal/base-modal.module';
import { BasePopupModule } from '../shared/components/base-popup/base-popup.module';
import { AnalyticsConsentModule } from './components/analytics-consent/analytics-consent.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { MousePositionCollectorModule } from './services/mouse-position-collector/mouse-position-collector.module';
import { SiteConfigurationModule } from './services/site-configuration/site-configuration.module';
import { ThemingModule } from './services/theming/theming.module';


@NgModule({
  imports: [
    // Non-core imports
    NgxGoogleAnalyticsModule.forRoot(environment.googleAnalyticsToken, [
      { command: 'set', values: [{ app: 'm4s' }] }
    ]),
    NgxGoogleAnalyticsRouterModule.forRoot(),

    BaseModalModule.forRoot(),
    BasePopupModule.forRoot(),

    // Services
    SiteConfigurationModule.forRoot(environment.siteConfigurationUrl),
    ThemingModule.forRoot(environment.defaultTheme),
    MousePositionCollectorModule.forRoot(),

    // Components
    AnalyticsConsentModule,
    FooterModule,
    HeaderModule,
    MenuModule
  ],
  exports: [
    // Module forwarding
    AnalyticsConsentModule,
    FooterModule,
    HeaderModule,
    MenuModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() other: CoreModule | null) {
    if (other) {
      throw new Error('CoreModule should only be imported once in the AppModule!');
    }
  }
}
