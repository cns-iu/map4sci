import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

import { SITE_CONFIGURATION_URL, SiteConfigurationService } from './site-configuration.service';


/**
 * Factory function for initializing site configuration.
 *
 * @param config Configuration service.
 * @param url Url to load configuration from.
 * @returns An initialization function.
 */
function initializeSiteConfigurationFactory(
  config: SiteConfigurationService,
  url: string
): () => Observable<unknown> {
  return () => config.loadYaml(url);
}


@NgModule()
export class SiteConfigurationModule {
  /**
   * Configures the site configuration loading.
   *
   * @param url Url of site configuration.
   * @returns This module with the necessary providers.
   */
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
