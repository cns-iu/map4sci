import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

import { HeaderComponent } from './header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    NgxGoogleAnalyticsModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
