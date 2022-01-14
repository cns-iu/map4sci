import { Shallow } from 'shallow-render';

import { DatasetSummaryComponent } from './dataset-summary.component';
import { DatasetSummaryModule } from './dataset-summary.module';


describe('DatasetSelectorComponent', () => {
  let shallow: Shallow<DatasetSummaryComponent>;

  beforeEach(() => {
    shallow = new Shallow(DatasetSummaryComponent, DatasetSummaryModule);
  });

  it('creates', async () => {
    await expectAsync(shallow.render()).toBeResolved();
  });
});
