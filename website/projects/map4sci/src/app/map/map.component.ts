/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/no-input-rename */
import { Any } from '@angular-ru/common/typings';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FeatureCollection } from 'geojson';
import { FullscreenControl, Layout, Map, MapLayerMouseEvent, Marker, NavigationControl, Popup } from 'maplibre-gl';

import { Edge, MapMarker, MiniMapOptions, Node, PopupContent, PopupLayer, ZoomLookup } from './map';
import {
  blankStyle, defaultEdges, defaultInitialZoom, defaultMapCenter, defaultMinimapOptions, defaultNodes,
  defaultTextOverlapEnabledZoom,
} from './map-defaults';
import { MiniMap } from './minimap';
import { ZoomLevelControl } from './zoom-level.control';


@Component({
  selector: 'm4s-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnChanges{
  // Inputs
  @Input() mapStyle = blankStyle;
  @Input() edgeFeatures!: FeatureCollection;
  @Input() nodeFeatures!: FeatureCollection;
  @Input() clusterFeatures!: FeatureCollection;
  @Input() boundaryFeatures!: FeatureCollection;
  @Input() currentZoom = defaultInitialZoom;
  @Input() mapMarkers: MapMarker[] = [];

  private initialZoomConfig: number = defaultInitialZoom;
  @Input('initialZoomConfig')
  set InitialZoomConfig(initialZoom: number | undefined) {
    this.initialZoomConfig = initialZoom ?? defaultInitialZoom;
  }

  private minimapConfig: MiniMapOptions = defaultMinimapOptions;
  @Input('minimapConfig')
  set MinimapConfig(options: MiniMapOptions | undefined) {
    this.minimapConfig = options ?? defaultMinimapOptions;
  }

  private edgesConfig: Edge[] = defaultEdges;
  @Input('edgesConfig')
  set EdgesConfig(edges: Edge[] | undefined) {
    this.edgesConfig = edges ?? defaultEdges;
  }

  private nodesConfig: Node[] = defaultNodes;
  @Input('nodesConfig')
  set NodesConfig(nodes: Node[] | undefined) {
    this.nodesConfig = nodes ?? defaultNodes;
  }

  private textOverlapEnabledZoomConfig: number = defaultTextOverlapEnabledZoom;
  @Input('textOverlapEnabledZoomConfig')
  set TextOverlapEnabledZoomConfig(zoom: number | undefined) {
    this.textOverlapEnabledZoomConfig = zoom ?? defaultTextOverlapEnabledZoom;
  }

  mapCenterConfig: [number, number] = defaultMapCenter;
  @Input('mapCenterConfig')
  set MapCenterConfig(mapCenter: [number, number] | undefined) {
    this.mapCenterConfig = mapCenter ?? defaultMapCenter;
  }

  // Outputs
  @Output() readonly nodeClick = new EventEmitter<MapLayerMouseEvent>();
  @Output() readonly edgeClick = new EventEmitter<MapLayerMouseEvent>();
  @Output() readonly zoomChange = new EventEmitter<number>();
  @Output() readonly panChange = new EventEmitter<[number, number]>();

  map!: Map;
  nodeZoomIndex = 0;
  edgeZoomIndex = 0;
  hoverEdgeID: string | number | undefined;
  hoverNodeID: string | number | undefined;
  textOverlapEnabled = false;

  // These allow the layer tags to be much more readable.
  currentNodeFormula: Any = ['at', ['get', 'level'], ['literal', this.nodesConfig]];
  currentEdgeFormula: Any = ['get', 'zoom', ['at', ['get', 'level'], ['literal', this.edgesConfig]]];
  edgeFormula = ['at', ['get', 'level'], ['literal', this.edgesConfig]];
  lastEdgeFormula = ['at', this.edgesConfig.length - 1, ['literal', this.edgesConfig]];

  nodeLabelsLayout: Layout = {
    'text-field': '{label}',
    'text-font': ['Open Sans Regular'],
    'text-size': ['get', 'fontSize', this.currentNodeFormula],
    'text-variable-anchor': ['top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left', 'right', 'center'],
    'text-radial-offset': 0.25,
    'text-allow-overlap': false
  } as unknown as Layout;

  /*
    Popup content needs to follow specific pattern to function properly.
    Property names will be used to look up data from the geoJson sources.
    Pass in format ['<anyHTML>and text</anyHTML><p>', 'propertyName', '</p>more html or text']

    You can pass in as many as you like but they need to alternate between raw html, and property names.
    You can also pass in a formatter with the property name in format ['propertyName', formatterMethod]
  */
  popups: PopupLayer[] = [
    {
      layer: 'edges',
      content: [
        '<p class="popup-label">Edge</p><p>',
        ['label', this.capitalizeFirstLetter],
        '</p>'
      ]
    },
    {
      layer: 'nodes',
      content: [
        '<p class="popup-label">Node</p><p>',
        'label',
        '</p>'
      ]
    }
  ];

  containerStyles = `
      border: 1px solid lightgray;
      border-radius: 5px;
      -webkit-box-shadow: 3px 3px 5px 4px #00000021;
      -moz-box-shadow: 3px 3px 5px 4px #00000021;
      box-shadow: 3px 3px 5px 4px #00000021;
  `;

  ngOnChanges(): void {
    this.addMapMarkers(this.mapMarkers);
  }

  capitalizeFirstLetter(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  nodeClicked(event: MapLayerMouseEvent): void {
    this.nodeClick.emit(event);
  }

  edgeClicked(event: MapLayerMouseEvent): void {
    this.edgeClick.emit(event);
  }

  onMapLoad(map: Map): void {
    this.map = map;

    if (this.initialZoomConfig !== defaultInitialZoom) {
      map.setZoom(this.initialZoomConfig);
    }

    this.currentZoom = map.getZoom();

    // Use the same map center for the minimap unless the minimapOptions have been customized.
    if (this.minimapConfig === defaultMinimapOptions) {
      this.minimapConfig.center = this.mapCenterConfig;
    }

    // ShowCompass off to disable rotation.
    map.addControl(new NavigationControl({ showCompass: false }), 'top-right');
    map.addControl(new FullscreenControl({}), 'top-right');
    if (this.nodeFeatures.features.length === 0) {
      console.warn('0 node features.');
    } else if (this.clusterFeatures.features.length === 0) {
      console.warn('0 cluster features');
    } else {
      map.addControl(new MiniMap({ nodes: this.nodeFeatures, clusters: this.clusterFeatures }, this.minimapConfig), 'bottom-right');
    }
    map.addControl(new ZoomLevelControl(), 'bottom-right');

    this.map.resize();

    this.addMapMarkers(this.mapMarkers);
    this.addEdgeHover(map);
    this.addNodeHover(map);
    this.addPopups();

    // When the user zooms the map, this method handles showing and hiding data based on zoom level
    map.on('zoom', () => this.updateFilters());
    map.on('zoomend', () => this.zoomChange.emit(this.map.getZoom()));
    map.on('moveend', () => this.panChange.emit(this.map.getCenter().toArray() as [number, number]));
  }

  addMapMarkers(markers: MapMarker[]): void {
    if (!markers.length) {
      return;
    }

    markers.forEach(marker => {
      if (this.map) {
        const popup = new Popup({
          closeOnClick: true,
          closeOnMove: true,
          closeButton: false,
          className: 'map-marker-popup'
        }).setHTML(`<h3>${marker.title}</h3>`);

        new Marker(marker.config ?? {})
          .setLngLat(marker.coordinates)
          .setPopup(popup)
          .addTo(this.map);
      }
    });
  }

  // In order to show more or less data based on the zoom level we have to update the layer filters when the map zooms.
  updateFilters(): void {
    const { map, edgesConfig, nodesConfig, textOverlapEnabledZoomConfig, textOverlapEnabled } = this;
    const currentZoom: number = map.getZoom();

    // When the zoom level changes, check if we need to display a different set of nodes. If we do, update the node filter.
    if (this.nodeLevelChange()) {
      const currentNode = ['get', 'zoom', ['at', ['get', 'level'], ['literal', nodesConfig]]];
      map.setFilter('node_labels', ['>=', currentZoom, currentNode]);
    }

    // When the zoom level changes, check if we need to display a different set of edges. If we do, update the edges filter.
    // We decided showing the nodes (without labels) at the same time as the edges was preferable, instead of waiting for
    // when the labels will fit.
    if (this.edgeLevelChange()) {
      const currentEdge = ['get', 'zoom', ['at', ['get', 'level'], ['literal', edgesConfig]]];
      map.setFilter('nodes', ['>=', currentZoom, currentEdge]);
      map.setFilter('edges_border', ['>=', currentZoom, currentEdge]);
      map.setFilter('edges', ['>=', currentZoom, currentEdge]);
    }

    //  Determing if text overlap should be enabled or disabled based on the break point set in the config object.
    if (!textOverlapEnabled && currentZoom > textOverlapEnabledZoomConfig) {
      map.setLayoutProperty('node_labels', 'text-allow-overlap', true);
      this.textOverlapEnabled = true;
    } else if (textOverlapEnabled && currentZoom < textOverlapEnabledZoomConfig) {
      map.setLayoutProperty('node_labels', 'text-allow-overlap', false);
      this.textOverlapEnabled = false;
    }
  }

  // Returns whether or not the zoom level has changed enough to warrant a change in which nodes we are displaying.
  nodeLevelChange(): boolean {
    const currentIndex: number = this.getZoomIndex(this.nodesConfig);
    if (currentIndex === this.nodeZoomIndex) {
      return false;
    }
    this.nodeZoomIndex = currentIndex;
    return true;
  }

  // Returns whether or not the zoom level has changed enough to warrant a change in which edges we are displaying.
  edgeLevelChange(): boolean {
    const currentIndex: number = this.getZoomIndex(this.edgesConfig);
    if (currentIndex === this.edgeZoomIndex) {
      return false;
    }
    this.edgeZoomIndex = currentIndex;
    return true;
  }

  addEdgeHover(map: Map): void {
    map.on('mousemove', 'edges', (e) => {
      // When the mouse moves, check if the mouse is on top of a feature from the edges source.
      if (!e.features) {
        return;
      }

      if (e.features.length > 0) {
        // If there was already an edge with the hover status, turn that hover status off first
        if (this.hoverEdgeID) {
          map.setFeatureState(
            { source: 'edges', id: this.hoverEdgeID },
            { hover: false }
          );
        }
        // Set the hover status of the new edge to true, and save the ID to the object so we can compare
        // later, when the mouse moves again.
        this.hoverEdgeID = e.features[0].id;
        map.setFeatureState(
          { source: 'edges', id: this.hoverEdgeID },
          { hover: true }
        );
      }
    });

    map.on('mouseleave', 'edges', () => {
      // When the mouse leaves the edge source features, turn the hover status off
      if (this.hoverEdgeID) {
        map.setFeatureState(
          { source: 'edges', id: this.hoverEdgeID },
          { hover: false }
        );
      }
      this.hoverEdgeID = undefined;
    });
  }

  addNodeHover(map: Map): void {
    map.on('mousemove', 'nodes', (e) => {
      if (!e.features) {
        return;
      }

      // When the mouse moves, check if the mouse is on top of a feature from the nodes source.
      if (e.features.length > 0) {
        // If there was already an node with the hover status, turn that hover status off first
        if (this.hoverNodeID) {
          map.setFeatureState(
            { source: 'nodes', id: this.hoverNodeID },
            { hover: false }
          );
        }
        // Set the hover status of the new node to true, and save the ID to the object so we can compare
        // later, when the mouse moves again.
        this.hoverNodeID = e.features[0].id;
        map.setFeatureState(
          { source: 'nodes', id: this.hoverNodeID },
          { hover: true }
        );
      }
    });

    map.on('mouseleave', 'nodes', () => {
      // When the mouse leaves the edge source features, turn the hover status off
      if (this.hoverNodeID) {
        map.setFeatureState(
          { source: 'nodes', id: this.hoverNodeID },
          { hover: false }
        );
      }
      this.hoverNodeID = undefined;
    });
  }

  addPopups(): void {
    this.popups.forEach(popup => {
      this.addPopupOnClick(popup.layer, popup.content);
    });
  }

  addPopupOnClick(layer: string, content: PopupContent): void {
    const { map } = this;
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', layer, (e) => {
      if (!e.features) {
        return;
      }

      const descriptionHTML = this.createPopupHTML(e.features[0].properties, content);
      new Popup({
        closeOnClick: true,
        closeOnMove: true,
        closeButton: false,
        className: 'map-marker-popup'
      })
        .setLngLat(e.lngLat)
        .setHTML(descriptionHTML)
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', layer, () => {
      map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', layer, () => {
      map.getCanvas().style.cursor = '';
    });
  }

  // Takes the description field of the element, and uses it with the popup content defined in the config object
  // to return the concatenated html string.
  createPopupHTML(description: Any, content: PopupContent): string {
    let html = '';
    content.forEach((element, index: number) => {
      if (!element) {
        return;
      }
      // The config object for popups is structued like ['<html>', 'propertyName', '</html>]
      // so on even indexes, we just concatenate the html string, on odd indexes we use the string to lookup the property value.
      if (this.isEven(index)) {
        html += element;

      // Along with property values, you can pass along a formatting function in form of ['propertyName', function]
      // This checks if there is one, if there is it uses that function to format the value of the property before
      // concatenating it.
      } else if (typeof (element) === 'string') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        html += description[element];
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        html += element[1](description[element[0]]);
      }
    });

    return html;
  }

  // Converts the current zoom number, to the index number of the object with the same .zoom property in the lookup array passed in.
  // Used because getZoom() will return very precise values, and the nodes / edges config objects will not match up exactly.
  getZoomIndex(zoomLookup: ZoomLookup): number {
    const zoom: number = this.map.getZoom();
    for (let index = 0; index <= zoomLookup.length; index++) {
      if (index === (zoomLookup.length - 1)) {
        return index;
      }
      if (zoom >= zoomLookup[index].zoom && zoom < zoomLookup[index + 1].zoom) {
        return index;
      }
    }

    console.error('No Zoom index found.  Zoom lookup: ', zoomLookup);
    return 0;
  }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}
