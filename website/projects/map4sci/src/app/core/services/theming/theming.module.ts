import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { DEFAULT_THEME, ThemingConfig, ThemingService } from './theming.service';


function themingInitializationFactory(themingService: ThemingService): () => void {
  return () => themingService.initialize();
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
          deps: [ThemingService],
          multi: true
        }
      ]
    };
  }
}
