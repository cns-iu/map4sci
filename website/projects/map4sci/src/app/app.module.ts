import { MapDataService } from './services/map-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';


@NgModule({
  imports: [
    BrowserModule,
    MapModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true
        }
      }
    })
  ],
  providers: [MapDataService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
