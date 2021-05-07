import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { MapComponent } from './map.component';


@NgModule({
  imports: [
    CommonModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZWRsdTc3NyIsImEiOiJja2wycDV2dzAwazg1MnFxamd2dDFmdmlyIn0.UxjI5qHgJIN5NZFJRi37DA',
    })
  ],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule { }
