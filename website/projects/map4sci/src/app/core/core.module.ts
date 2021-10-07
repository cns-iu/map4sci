import { NgModule, Optional, SkipSelf } from '@angular/core';

import { environment } from '../../environments/environment';
import { BaseModalModule } from '../shared/components/base-modal/base-modal.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { SiteConfigurationModule } from './services/site-configuration/site-configuration.module';


@NgModule({
  imports: [
    // Non-core imports
    BaseModalModule.forRoot(),

    // Services
    SiteConfigurationModule.forRoot(environment.siteConfigurationUrl),

    // Components
    FooterModule,
    HeaderModule,
    MenuModule
  ],
  exports: [
    // Module forwarding
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
