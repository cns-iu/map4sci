import { MapDataService } from './services/map-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { MarkdownModalModule } from './shared/components/markdown-modal/markdown-modal.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    }),
    MarkdownModalModule
  ],
  providers: [MapDataService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
