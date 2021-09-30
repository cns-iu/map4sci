import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapDataService } from '../../services/map-data.service';
import { MapModule } from '../../map/map.module';

import { VisualizerRoutingModule } from './visualizer-routing.module';
import { VisualizerComponent } from './visualizer.component';

import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  imports: [
    CommonModule,
    VisualizerRoutingModule,
    MapModule,
    MatSidenavModule
  ],
  declarations: [VisualizerComponent],
  providers: [MapDataService]
})
export class VisualizerModule { }
