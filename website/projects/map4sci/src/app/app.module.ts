import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MapModule } from './map/map.module';
import { MapDataService } from './services/map-data.service';
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
    MarkdownModalModule,
    MatSnackBarModule
  ],
  providers: [MapDataService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
