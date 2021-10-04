import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapDataService } from '../../services/map-data.service';
import { MapModule } from '../../map/map.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { VisualizerRoutingModule } from './visualizer-routing.module';
import { VisualizerComponent } from './visualizer.component';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    VisualizerRoutingModule,
    MapModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ],
  declarations: [VisualizerComponent],
  providers: [MapDataService]
})
export class VisualizerModule { }
