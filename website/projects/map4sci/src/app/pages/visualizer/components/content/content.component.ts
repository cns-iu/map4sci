import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { EdgeDataDefinition, NodeDataDefinition } from 'cytoscape';
import { Point } from 'geojson';
import { MapMouseEvent } from 'maplibre-gl';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Observable } from 'rxjs';

import { MapDataset, MapMarker } from '../../../../map/map';
import { NetworkDataset } from '../../services/network-dataset-processor.sevice';


export type VisualizationType = 'Map' | 'Network';

export interface ContentDatasets {
  mapDataset$: Observable<MapDataset>;
  networkDataset$: Observable<NetworkDataset>;
}


@Component({
  selector: 'm4s-visualizer-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {
  @HostBinding('class') readonly clsName = 'm4s-visualizer-content';

  @Input() visualization: VisualizationType = 'Map';
  @Input() datasets?: ContentDatasets;
  @Input() search?: string;

  mapPins = [];

  constructor(private readonly ga: GoogleAnalyticsService) { }

  searchMapDataset(dataset: MapDataset): MapMarker[] {
    const { search } = this;
    if (!search) {
      return [];
    }

    const lcaseSearch = search.toLowerCase();
    const markers: MapMarker[] = [];
    const matchesSearch = (label?: string) =>
      label ? label.toLowerCase().includes(lcaseSearch) : false;

    for (const node of dataset.nodes.features) {
      const label: string = node.properties?.label;
      if (matchesSearch(label)) {
        markers.push({
          coordinates: (node.geometry as Point).coordinates as [number, number],
          title: label
        });
      }
    }

    return markers;
  }

  logMapEvent(name: string, event: MapMouseEvent): void {
    this.ga.event(`${name}_${event.type}`, 'map_interaction', event.lngLat.toString());
  }

  logNetworkEvent(name: string, event: NodeDataDefinition | EdgeDataDefinition): void {
    this.ga.event(`${name}_click}`, 'network_interaction', event.id);
  }
}
