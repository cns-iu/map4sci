import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { SiteConfigurationService } from '../site-configuration/site-configuration.service';
import { DEFAULT_THEME, ThemingConfig, ThemingService } from './theming.service';


function themingInitializationFactory(
  siteConfig: SiteConfigurationService,
  themingService: ThemingService
): () => Observable<unknown> {
  return () => siteConfig.configurationLoaded.pipe(
    take(1),
    tap(() => themingService.initialize())
  );
}


@NgModule()
export class ThemingModule {
  static forRoot(defaultTheme: Required<ThemingConfig>): ModuleWithProviders<ThemingModule> {
    return {
      ngModule: ThemingModule,
      providers: [
        {
          provide: DEFAULT_THEME,
          useValue: defaultTheme
        },
        {
          provide: APP_INITIALIZER,
          useFactory: themingInitializationFactory,
          deps: [SiteConfigurationService, ThemingService],
          multi: true
        }
      ]
    };
  }
}
