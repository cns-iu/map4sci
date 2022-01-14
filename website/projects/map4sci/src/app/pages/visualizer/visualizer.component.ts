import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map, shareReplay, take } from 'rxjs/operators';

import { MapDatasetDirectory } from '../../map/map';
import { MapDataService } from '../../services/map-data.service';
import { ContentDatasets, VisualizationType } from './components/content/content.component';
import { MenuDataset } from './components/menu/menu.component';
import { NetworkDatasetProcessor } from './services/network-dataset-processor.sevice';


export interface Dataset extends MenuDataset, ContentDatasets { }


@Component({
  selector: 'm4s-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualizerComponent implements OnDestroy {
  readonly visualizations: VisualizationType[] = ['Map', 'Network'];
  selectedVisualization: VisualizationType = 'Map';

  readonly datasets$ = this.setupDatasets();
  selectedDataset?: Dataset;
  datasetSearch?: string;

  opened = true;

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly mapData: MapDataService,
    private readonly networkDatasetProcessor: NetworkDatasetProcessor,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.setupInitialDatasetSelection();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setSelectedVisualization(visualization: VisualizationType): void {
    this.selectedVisualization = visualization;
  }

  setSelectedDataset(dataset: Dataset): void {
    this.selectedDataset = dataset;
  }

  searchDataset(value: string): void {
    this.datasetSearch = value;
  }

  clearDatasetSearch(): void {
    this.datasetSearch = undefined;
  }

  toggle(): void {
    this.opened = !this.opened;
  }

  private setupDatasets(): Observable<Dataset[]> {
    const { mapData, networkDatasetProcessor } = this;
    const dirToDataset = (dir: MapDatasetDirectory): Dataset => {
      const mapDataset$ = mapData.getDataset(dir.id).pipe(shareReplay(1));
      const networkDataset$ = mapDataset$.pipe(
        map(ds => networkDatasetProcessor.process(ds))
      );
      const searchableItems$ = mapDataset$.pipe(
        map(ds => ds.nodes.features.map(node => node.properties?.label)),
        map(options => options.map(opt => ({ id: opt, value: opt }))),
      );
      const summaries$ = mapDataset$.pipe(
        map(ds => ({
          label: dir.name,
          numNodes: ds.nodes.features.length,
          numEdges: ds.edges.features.length
        })),
      );

      return {
        id: dir.id,
        label: dir.name,
        mapDataset$,
        networkDataset$,
        searchableItems$,
        summaries$
      };
    };

    return mapData.datasetDirectory$.pipe(
      map(dirs => dirs.map(dirToDataset))
    );
  }

  private setupInitialDatasetSelection(): void {
    const { datasets$, cdr, subscriptions } = this;
    const firstDataset$ = datasets$.pipe(
      filter(datasets => datasets.length > 0),
      map(datasets => datasets[0]),
      take(1)
    );
    const sub = firstDataset$.subscribe(dataset => {
      if (this.selectedDataset === undefined) {
        this.setSelectedDataset(dataset);
        cdr.markForCheck();
      }
    });

    subscriptions.add(sub);
  }
}
