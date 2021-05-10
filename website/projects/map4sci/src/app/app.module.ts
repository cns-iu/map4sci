import { MapDataService } from './services/map-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    MapModule,
    HttpClientModule
  ],
  providers: [MapDataService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
