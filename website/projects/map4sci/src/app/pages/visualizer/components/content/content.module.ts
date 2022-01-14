import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NetworkModule } from '@shared/components/network/network.module';

import { MapModule } from '../../../../map/map.module';
import { ContentComponent } from './content.component';



@NgModule({
  imports: [
    CommonModule,

    MapModule,
    NetworkModule
  ],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class ContentModule { }
