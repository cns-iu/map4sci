import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisualizerComponent } from './visualizer.component';

const routes: Routes = [{
  path: '',
  component: VisualizerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizerRoutingModule { }