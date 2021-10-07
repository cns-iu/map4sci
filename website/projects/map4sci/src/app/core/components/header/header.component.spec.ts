import { RouterTestingModule } from '@angular/router/testing';
import { Shallow } from 'shallow-render';

import { SiteConfigurationService } from '../../services/site-configuration/site-configuration.service';
import { HeaderComponent, LogoConfig } from './header.component';
import { HeaderModule } from './header.module';


describe('HeaderComponent', () => {
  const sampleUrl = '/does/not/exist';

  let configSpy: jasmine.SpyObj<SiteConfigurationService>;
  let shallow: Shallow<HeaderComponent>;

  function setLogoConfig(config: LogoConfig): void {
    configSpy.get.and.returnValue(config);
  }

  beforeEach(() => {
    configSpy = jasmine.createSpyObj('SiteConfigurationService', ['get']);
    shallow = new Shallow(HeaderComponent, HeaderModule)
      .import(RouterTestingModule.withRoutes([]))
      .mock(SiteConfigurationService, configSpy);
  });

  describe('.reverseLogoLayout', () => {
    it('uses the configuration to compute the value', async () => {
      setLogoConfig({ layout: 'label-first' });
      const { instance } = await shallow.render();
      expect(instance.reverseLogoLayout).toBeTrue();
    });

    it('is case insensitive to the configuration value', async () => {
      setLogoConfig({ layout: 'LABEL-first' as 'label-first' });
      const { instance } = await shallow.render();
      expect(instance.reverseLogoLayout).toBeTrue();
    });

    it('defaults to false', async () => {
      const { instance } = await shallow.render();
      expect(instance.reverseLogoLayout).toBeFalse();
    });
  });

  describe('.logoIcon', () => {
    it('is loaded from the configuration', async () => {
      setLogoConfig({ icon: sampleUrl });
      const { instance } = await shallow.render();
      expect(instance.logoIcon).toEqual(sampleUrl);
    });
  });

  describe('.logoLabel', () => {
    it('is loaded from the configuration', async () => {
      const label = 'A Nice Company';
      setLogoConfig({ label });
      const { instance } = await shallow.render();
      expect(instance.logoLabel).toEqual(label);
    });
  });

  describe('.logoLink', () => {
    it('is loaded from the configuration', async () => {
      setLogoConfig({ 'link-to': sampleUrl });
      const { instance } = await shallow.render();
      expect(instance.logoLink).toEqual(sampleUrl);
    });
  });
});
