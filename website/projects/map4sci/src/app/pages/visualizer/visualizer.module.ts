import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

import { MapDataService } from '../../services/map-data.service';
import { ContentModule } from './components/content/content.module';
import { MenuModule } from './components/menu/menu.module';
import { VisualizerRoutingModule } from './visualizer-routing.module';
import { VisualizerComponent } from './visualizer.component';


@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatSidenavModule,

    NgxGoogleAnalyticsModule,

    VisualizerRoutingModule,
    ContentModule,
    MenuModule
  ],
  declarations: [VisualizerComponent],
  providers: [MapDataService]
})
export class VisualizerModule { }
