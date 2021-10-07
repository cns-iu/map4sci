import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BaseModalComponent } from './base-modal.component';


/**
 * Factory function for initializing modals.
 *
 * @param dialogService The material dialog service used to open modals.
 * @returns An initialization function.
 */
function dialogServiceInitializationFactory(dialogService: MatDialog): () => void {
  return () => {
    BaseModalComponent.dialogService = dialogService;
  };
}


/**
 * Module providing functionality to make working with modals easier.
 */
@NgModule()
export class BaseModalModule {
  /**
   * Configures the modal base component.
   *
   * @returns This module with the necessary providers.
   */
  static forRoot(): ModuleWithProviders<BaseModalModule> {
    return {
      ngModule: BaseModalModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: dialogServiceInitializationFactory,
          deps: [MatDialog],
          multi: true
        }
      ]
    };
  }
}
