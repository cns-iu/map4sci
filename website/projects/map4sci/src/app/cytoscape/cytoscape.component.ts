import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";

@Component({
  selector: "m4s-cytoscape",
  templateUrl: "./cytoscape.component.html",
  styleUrls: ["./cytoscape.component.scss"]
})
export class CytoscapeComponent implements AfterViewInit {
  @ViewChild("cy") el: ElementRef;

  ngAfterViewInit() {
    cytoscape.use(dagre);

    var cy = cytoscape({
      container: document.getElementById("cy"),
      elements: {
        nodes: [
          {
            data: { id: "Customers" }
          },
          {
            data: { id: "Orders" }
          },
          {
            data: { id: "Items" }
          },
          {
            data: { id: "ItemsTest" }
          },
          {
            data: { id: "Shipping" }
          },
          {
            data: { id: "Returns" }
          },
          {
            data: {
              id: "Name",
              parent: "Customers",
              type: "rect"
            }
          },
          {
            data: {
              id: "Address",
              parent: "Customers",
              type: "rect"
            }
          },
          {
            data: {
              id: "Address5",
              parent: "Customers",
              type: "rect"
            }
          },
          {
            data: {
              id: "ShipTest",
              parent: "Customers",
              type: "rect"
            }
          },
          {
            data: {
              id: "Heading",
              parent: "Orders",
              type: "head"
            }
          },
          {
            data: {
              id: "Id",
              parent: "Orders",
              type: "rect"
            }
          },
          {
            data: {
              id: "Quantity",
              parent: "Items",
              type: "rect"
            }
          },
          {
            data: {
              id: "Item1",
              parent: "Items",
              type: "rect"
            }
          },
          {
            data: {
              id: "Item5",
              parent: "Items",
              type: "rect"
            }
          },
          {
            data: {
              id: "Ship",
              parent: "Items",
              type: "rect"
            }
          },
          {
            data: {
              id: "Return1",
              parent: "Returns",
              type: "rect"
            }
          }
        ],
        edges: [
          {
            data: {
              id: "ad",
              source: "Name",
              target: "Id"
            }
          },
          {
            data: {
              id: "ad3",
              source: "Address",
              target: "Quantity"
            }
          },
          {
            data: {
              id: "ad6",
              source: "Address5",
              target: "Item5"
            }
          },

          {
            data: {
              id: "fd8",
              source: "Item5",
              target: "Return1"
            }
          }
        ]
      },
      layout: { name: "dagre" }
    });

    cy.layout({
      name: "dagre",
      spacingFactor: 0,
    }).run();

    cy.on("tap", "node", function(evt) {
      var node = evt.target;
      console.log("tapped " + node.id());
      cy.nodes(node).classes("foo");
    });
  }
}
