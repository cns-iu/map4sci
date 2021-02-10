import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { MapComponent } from './map.component';


@NgModule({
  imports: [CommonModule, NgxMapboxGLModule],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule { }
