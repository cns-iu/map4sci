import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapDataService } from '../../services/map-data.service';
import { MapModule } from '../../map/map.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { VisualizerRoutingModule } from './visualizer-routing.module';
import { VisualizerComponent } from './visualizer.component';

import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  imports: [
    CommonModule,
    VisualizerRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MapModule,
    MatSidenavModule
  ],
  declarations: [VisualizerComponent],
  providers: [MapDataService]
})
export class VisualizerModule { }
