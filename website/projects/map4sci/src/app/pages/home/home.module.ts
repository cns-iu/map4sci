import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,

    MarkdownModule,

    HomeRoutingModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
