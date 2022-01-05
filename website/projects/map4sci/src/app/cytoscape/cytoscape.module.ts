import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CytoscapeComponent } from "./cytoscape.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CytoscapeComponent],
  exports: [CytoscapeComponent]
})
export class CytoscapeModule {}
