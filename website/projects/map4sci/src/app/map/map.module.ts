import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMapLibreGLModule } from 'ngx-maplibre-gl';

import { MapComponent } from './map.component';


@NgModule({
  imports: [
    CommonModule,
    NgxMapLibreGLModule
  ],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule { }
