import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MarkdownModalModule } from '../../../shared/components/markdown-modal/markdown-modal.module';
import { AnalyticsConsentModule } from '../analytics-consent/analytics-consent.module';
import { FooterComponent } from './footer.component';


@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,

    AnalyticsConsentModule,
    MarkdownModalModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
