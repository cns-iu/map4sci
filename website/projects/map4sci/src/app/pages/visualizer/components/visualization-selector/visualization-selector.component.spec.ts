import { Shallow } from 'shallow-render';

import { VisualizationSelectorComponent } from './visualization-selector.component';
import { VisualizationSelectorModule } from './visualization-selector.module';


describe('DatasetSelectorComponent', () => {
  let shallow: Shallow<VisualizationSelectorComponent>;

  beforeEach(() => {
    shallow = new Shallow(VisualizationSelectorComponent, VisualizationSelectorModule);
  });

  it('creates', async () => {
    await expectAsync(shallow.render()).toBeResolved();
  });
});
