import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

import { DatasetSelectorComponent } from './dataset-selector.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatSelectModule,

    NgxGoogleAnalyticsModule
  ],
  declarations: [DatasetSelectorComponent],
  exports: [DatasetSelectorComponent]
})
export class DatasetSelectorModule { }
