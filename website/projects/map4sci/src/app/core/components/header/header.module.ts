import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
