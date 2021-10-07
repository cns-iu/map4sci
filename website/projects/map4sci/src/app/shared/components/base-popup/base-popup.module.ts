import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BasePopupComponent } from './base-popup.component';


/**
 * Factory function for initializing popups.
 *
 * @param snackBarService The material dialog service used to open popups.
 * @returns An initialization function.
 */
function snackBarServiceInitializationFactory(snackBarService: MatSnackBar): () => void {
  return () => {
    BasePopupComponent.snackBarService = snackBarService;
  };
}


/**
 * Module providing functionality to make working with popups easier.
 */
@NgModule()
export class BasePopupModule {
  /**
   * Configures the popup base component.
   *
   * @returns This module with the necessary providers.
   */
  static forRoot(): ModuleWithProviders<BasePopupModule> {
    return {
      ngModule: BasePopupModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: snackBarServiceInitializationFactory,
          deps: [MatSnackBar],
          multi: true
        }
      ]
    };
  }
}
