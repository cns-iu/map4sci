import { Shallow } from 'shallow-render';

import { DatasetSelectorComponent } from './dataset-selector.component';
import { DatasetSelectorModule } from './dataset-selector.module';


describe('DatasetSelectorComponent', () => {
  let shallow: Shallow<DatasetSelectorComponent>;

  beforeEach(() => {
    shallow = new Shallow(DatasetSelectorComponent, DatasetSelectorModule);
  });

  it('creates', async () => {
    await expectAsync(shallow.render()).toBeResolved();
  });
});
