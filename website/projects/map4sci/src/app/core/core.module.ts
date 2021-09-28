import { NgModule, Optional, SkipSelf } from '@angular/core';

import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { MenuModule } from './components/menu/menu.module';


@NgModule({
  imports: [
    // Services

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