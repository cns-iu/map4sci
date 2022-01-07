import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkComponent } from './network.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NetworkComponent],
  exports: [NetworkComponent]
})
export class NetworkModule {}
