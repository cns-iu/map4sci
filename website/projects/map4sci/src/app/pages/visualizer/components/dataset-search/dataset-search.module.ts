import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

import { DatasetSearchComponent } from './dataset-search.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,

    NgxGoogleAnalyticsModule
  ],
  declarations: [DatasetSearchComponent],
  exports: [DatasetSearchComponent]
})
export class DatasetSearchModule { }
