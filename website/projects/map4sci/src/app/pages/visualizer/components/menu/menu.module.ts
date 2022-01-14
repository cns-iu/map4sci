import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DatasetSearchModule } from '../dataset-search/dataset-search.module';
import { DatasetSelectorModule } from '../dataset-selector/dataset-selector.module';
import { DatasetSummaryModule } from '../dataset-summary/dataset-summary.module';
import { VisualizationSelectorModule } from '../visualization-selector/visualization-selector.module';
import { MenuComponent } from './menu.component';



@NgModule({
  imports: [
    CommonModule,

    DatasetSearchModule,
    DatasetSelectorModule,
    DatasetSummaryModule,
    VisualizationSelectorModule,
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule { }
