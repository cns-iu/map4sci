import { Injector, NgModule, Type } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { DATASET_DEFINITIONS } from '../configuration/dataset-definitions';
import { INDEX_FILES } from '../configuration/index-files';
import { DatasetDefinition, DatasetDefinitionService } from '../services/dataset-definition.service';
import { DatasetState } from './dataset.state';
import { IndexState } from './index.state';


const STATES: Type<unknown>[] = [
  IndexState,
  DatasetState
];


@NgModule({
  imports: [
    NgxsModule.forFeature(STATES),
  ],
  providers: [
    DatasetDefinitionService
  ]
})
export class StateModule {
  constructor(injector: Injector) {
    // Index initialization
    const index = injector.get(IndexState);
    INDEX_FILES.forEach((url: string) => index.loadIndexFile(url));

    // Dataset initialization
    const dataset = injector.get(DatasetDefinitionService);
    DATASET_DEFINITIONS.forEach((def: DatasetDefinition) => dataset.addDefinition(def));
  }
}
