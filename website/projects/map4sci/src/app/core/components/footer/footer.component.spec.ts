import { Shallow } from 'shallow-render';

import { BaseModalComponent } from '../../../shared/components/base-modal/base-modal.component';
import { BasePopupComponent } from '../../../shared/components/base-popup/base-popup.component';
import { SiteConfigurationService } from '../../services/site-configuration/site-configuration.service';
import { FooterComponent, FooterConfig } from './footer.component';
import { FooterModule } from './footer.module';


describe('FooterComponent', () => {
  const sampleUrl = '/does/not/exist';

  let configSpy: jasmine.SpyObj<SiteConfigurationService>;
  let modalOpenSpy: jasmine.Spy<typeof BaseModalComponent.open>;
  let popupOpenSpy: jasmine.Spy<typeof BasePopupComponent.open>;
  let shallow: Shallow<FooterComponent>;

  function setFooterConfig(config: FooterConfig): void {
    configSpy.get.and.returnValue(config);
  }

  beforeEach(() => {
    configSpy = jasmine.createSpyObj('SiteConfigurationService', ['get']);
    modalOpenSpy = spyOn(BaseModalComponent, 'open');
    popupOpenSpy = spyOn(BasePopupComponent, 'open');

    shallow = new Shallow(FooterComponent, FooterModule)
      .mock(SiteConfigurationService, configSpy);
  });

  describe('.copyright', () => {
    it('is loaded from the configuration', async () => {
      const copyright = 'abc';
      setFooterConfig({ copyright });
      const { instance } = await shallow.render();
      expect(instance.copyright).toEqual(copyright);
    });

    it('defaults to the empty string', async () => {
      const { instance } = await shallow.render();
      expect(instance.copyright).toEqual('');
    });
  });

  describe('.termsOfService', () => {
    it('is loaded from the configuration', async () => {
      setFooterConfig({ 'terms-of-service': sampleUrl });
      const { instance } = await shallow.render();
      expect(instance.termsOfService).toEqual(sampleUrl);
    });
  });

  describe('.privacyPolicy', () => {
    it('is loaded from the configuration', async () => {
      setFooterConfig({ 'privacy-policy': sampleUrl });
      const { instance } = await shallow.render();
      expect(instance.privacyPolicy).toEqual(sampleUrl);
    });
  });

  describe('.openTermsOfService()', () => {
    it('opens a modal', async () => {
      const { instance } = await shallow.render();
      instance.openTermsOfService();
      expect(modalOpenSpy).toHaveBeenCalled();
    });
  });

  describe('.openPrivacyPolicy()', () => {
    it('opens a modal', async () => {
      const { instance } = await shallow.render();
      instance.openPrivacyPolicy();
      expect(modalOpenSpy).toHaveBeenCalled();
    });
  });

  describe('.openAnalyticsConsent()', () => {
    it('opens a popup', async () => {
      const { instance } = await shallow.render();
      instance.openAnalyticsConsent();
      expect(popupOpenSpy).toHaveBeenCalled();
    });
  });
});
