import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { VisualizationSelectorComponent } from './visualization-selector.component';



@NgModule({
  imports: [
    CommonModule,

    MatButtonToggleModule
  ],
  declarations: [VisualizationSelectorComponent],
  exports: [VisualizationSelectorComponent]
})
export class VisualizationSelectorModule { }
