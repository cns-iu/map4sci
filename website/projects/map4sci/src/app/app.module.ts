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
import { TrackingPopupModule } from './shared/components/tracking-popup/tracking-popup.module';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { INITIAL_TELEMETRY_SETTING, TrackingState } from './shared/components/tracking-popup/tracking.state';
import { environment } from '../environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';


export const ROOT_STATES = [
  TrackingState
];

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
    TrackingPopupModule,
    NgxGoogleAnalyticsModule.forRoot(
      INITIAL_TELEMETRY_SETTING === false ? '' : environment.googleAnalyticsToken, [
        { command: 'set', values: [{ app: 'm4s' }] }
      ]),
    MatSnackBarModule
  ],
  providers: [MapDataService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
