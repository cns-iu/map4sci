import { Shallow } from 'shallow-render';

import { DatasetSearchComponent } from './dataset-search.component';
import { DatasetSearchModule } from './dataset-search.module';


describe('DatasetSelectorComponent', () => {
  let shallow: Shallow<DatasetSearchComponent>;

  beforeEach(() => {
    shallow = new Shallow(DatasetSearchComponent, DatasetSearchModule);
  });

  it('creates', async () => {
    await expectAsync(shallow.render()).toBeResolved();
  });
});
