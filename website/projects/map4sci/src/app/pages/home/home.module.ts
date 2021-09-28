import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MarkdownModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }