import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AnalyticsConsentComponent } from './analytics-consent.component';


@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [AnalyticsConsentComponent],
  exports: [AnalyticsConsentComponent]
})
export class AnalyticsConsentModule { }
