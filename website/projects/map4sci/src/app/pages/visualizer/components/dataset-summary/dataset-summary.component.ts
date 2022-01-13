import { formatNumber } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input, LOCALE_ID } from '@angular/core';


export interface DatasetSummary {
  label: string;
  numNodes: number;
  numEdges: number;
}

interface Metric {
  label: string;
  value: unknown;
  position?: 'start' | 'end';
}


const DEFAULT_DATASET_SUMMARY: DatasetSummary = {
  label: 'No dataset selected',
  numNodes: 0,
  numEdges: 0
};


@Component({
  selector: 'm4s-dataset-summary',
  templateUrl: './dataset-summary.component.html',
  styleUrls: ['./dataset-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatasetSummaryComponent {
  @HostBinding('class') readonly clsName = 'm4s-dataset-summary';

  @Input() summary?: DatasetSummary;

  get metrics(): Metric[] {
    const {
      summary: { label, numNodes, numEdges } = DEFAULT_DATASET_SUMMARY,
      locale
    } = this;

    return [
      { label: 'Dataset', value: label },
      { label: 'Number of nodes', value: formatNumber(numNodes, locale) },
      { label: 'Number of edges', value: formatNumber(numEdges, locale) }
    ];
  }

  constructor(@Inject(LOCALE_ID) private readonly locale: string) {}
}
