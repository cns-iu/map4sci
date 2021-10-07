import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

import { SiteConfigurationService } from './site-configuration.service';


describe('SiteConfigurationService', () => {
  const sampleUrl = 'sample/path/to/config/file.yml';
  const sampleConfigYaml = `
    prop1: 1
    prop2: abc
    prop3:
      sub1: 2
      sub2:
        - a
        - b
  `;
  const sampleConfig = {
    prop1: 1,
    prop2: 'abc',
    prop3: {
      sub1: 2,
      sub2: ['a', 'b']
    }
  };

  let http: jasmine.SpyObj<HttpClient>;
  let service: SiteConfigurationService;


  function setGetRequestResult(yaml: string): void {
    http.get.and.returnValue(of(yaml));
  }

  function execLoadYaml(): Promise<Record<string, unknown>> {
    return service.loadYaml(sampleUrl).pipe(take(1)).toPromise();
  }


  beforeEach(async () => {
    http = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SiteConfigurationService(http);

    setGetRequestResult(sampleConfigYaml);
    await execLoadYaml();
  });

  describe('.loadYaml(url)', () => {
    beforeEach(() => {
      // Clear any tracking caused by the top level initialization
      http.get.calls.reset();
    });

    it('loads the url', () => {
      execLoadYaml();
      expect(http.get).toHaveBeenCalledTimes(1);
    });

    it('parses the result as yaml', async () => {
      setGetRequestResult(sampleConfigYaml);
      await expectAsync(execLoadYaml()).toBeResolvedTo(sampleConfig);
    });

    it('returns an empty object for empty/null yaml', async () => {
      setGetRequestResult('');
      await expectAsync(execLoadYaml()).toBeResolvedTo({});
    });

    it('fails on invalid yaml', async () => {
      setGetRequestResult('prop: [');
      await expectAsync(execLoadYaml()).toBeRejected();
    });

    it('fails if the top level value is not an object', async () => {
      setGetRequestResult('1');
      await expectAsync(execLoadYaml()).toBeRejected();
    });
  });

  describe('.get(key)', () => {
    it('returns the value for the key', () => {
      const key = 'prop1';
      expect(service.get(key)).toEqual(sampleConfig[key]);
    });

    it('can access deep properties using a path of keys', () => {
      const value = service.get('prop3', 'sub1');
      expect(value).toEqual(sampleConfig.prop3.sub1);
    });

    it('returns undefined if any parts of the path is missing', () => {
      const value = service.get('prop3', 'bad', 'path');
      expect(value).toBeUndefined();
    });
  });

  describe('.getConfigObject()', () => {
    it('returns the loaded configuration', () => {
      expect(service.getConfigObject()).toEqual(sampleConfig);
    });
  });
});
