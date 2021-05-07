import { DatasetDefinition, DatasetDefinitionService } from './dataset-definition.service';


describe('DatasetDefinitionService', () => {
  const def: DatasetDefinition = { dataset: 'test', file: 'data.txt' };
  let service: DatasetDefinitionService;

  beforeEach(() => {
    service = new DatasetDefinitionService();
  });

  describe('getDefinition(dataset)', () => {
    it('returns undefined for non-existing datasets', () => {
      expect(service.getDefinition('does-not-exist')).toBeUndefined();
    });

    it('returns the definition if it exists', () => {
      service.addDefinition(def);
      expect(service.getDefinition(def.dataset)).toBeDefined();
    });
  });

  describe('addDefinition(definition)', () => {
    it('adds a definition entry which can later be fetched', () => {
      service.addDefinition(def);
      expect(service.getDefinition(def.dataset)).toBeDefined();
    });
  });
});
