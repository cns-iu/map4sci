import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

import { SITE_CONFIGURATION_URL, SiteConfigurationService } from './site-configuration.service';


function initializeSiteConfigurationFactory(
  config: SiteConfigurationService,
  url: string
): () => Observable<unknown> {
  return () => config.loadYaml(url);
}


@NgModule()
export class SiteConfigurationModule {
  static forRoot(url: string): ModuleWithProviders<SiteConfigurationModule> {
    return {
      ngModule: SiteConfigurationModule,
      providers: [
        {
          provide: SITE_CONFIGURATION_URL,
          useValue: url
        },
        {
          provide: APP_INITIALIZER,
          useFactory: initializeSiteConfigurationFactory,
          deps: [SiteConfigurationService, SITE_CONFIGURATION_URL],
          multi: true
        }
      ]
    };
  }
}
