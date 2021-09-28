import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VisualizerRoutingModule } from './visualizer-routing.module';
import { VisualizerComponent } from './visualizer.component';


@NgModule({
  imports: [
    CommonModule,
    VisualizerRoutingModule
  ],
  declarations: [VisualizerComponent]
})
export class VisualizerModule { }