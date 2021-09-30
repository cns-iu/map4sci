import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapDataService } from '../../services/map-data.service';
import { MapModule } from '../../map/map.module';

import { VisualizerRoutingModule } from './visualizer-routing.module';
import { VisualizerComponent } from './visualizer.component';


@NgModule({
  imports: [
    CommonModule,
    VisualizerRoutingModule,
    MapModule
  ],
  declarations: [VisualizerComponent],
  providers: [MapDataService]
})
export class VisualizerModule { }
