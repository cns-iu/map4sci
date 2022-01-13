import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DatasetSummaryComponent } from './dataset-summary.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatasetSummaryComponent],
  exports: [DatasetSummaryComponent]
})
export class DatasetSummaryModule { }
