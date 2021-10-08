import { MatSnackBarDismiss, MatSnackBarRef } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { Shallow } from 'shallow-render';

import { BaseModalComponent } from '../../../shared/components/base-modal/base-modal.component';
import { BasePopupComponent } from '../../../shared/components/base-popup/base-popup.component';
import { SiteConfigurationService } from '../../services/site-configuration/site-configuration.service';
import { FooterComponent, FooterConfig, SiteConfigurationWithFooterConfig } from './footer.component';
import { FooterModule } from './footer.module';


describe('FooterComponent', () => {
  const sampleUrl = '/does/not/exist';

  let configSpy: jasmine.SpyObj<SiteConfigurationService<SiteConfigurationWithFooterConfig>>;
  let modalOpenSpy: jasmine.Spy<typeof BaseModalComponent.open>;
  let popupOpenSpy: jasmine.Spy<typeof BasePopupComponent.open>;
  let popupRefSpy: jasmine.SpyObj<MatSnackBarRef<unknown>>;
  let popupAfterDismissedSubject: Subject<MatSnackBarDismiss>;
  let shallow: Shallow<FooterComponent>;

  function setFooterConfig(config: FooterConfig): void {
    configSpy.get.and.returnValue(config);
  }

  beforeEach(() => {
    configSpy = jasmine.createSpyObj('SiteConfigurationService', ['get']);
    modalOpenSpy = spyOn(BaseModalComponent, 'open');
    popupOpenSpy = spyOn(BasePopupComponent, 'open');
    popupRefSpy = jasmine.createSpyObj('MatSnackBarRef', ['dismiss', 'afterDismissed']);
    popupAfterDismissedSubject = new Subject();

    popupOpenSpy.and.returnValue(popupRefSpy);
    popupRefSpy.afterDismissed.and.returnValue(popupAfterDismissedSubject);
    popupRefSpy.dismiss.and.callFake(() =>
      popupAfterDismissedSubject.next({ dismissedByAction: false })
    );

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

  describe('.ngOnDestroy()', () => {
    it('dismisses the consent popup if open', async () => {
      const { instance } = await shallow.render();
      instance.toggleAnalyticsConsent();
      instance.ngOnDestroy();
      expect(popupRefSpy.dismiss).toHaveBeenCalled();
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

  describe('.toggleAnalyticsConsent()', () => {
    it('opens a popup', async () => {
      const { instance } = await shallow.render();
      instance.toggleAnalyticsConsent();
      expect(popupOpenSpy).toHaveBeenCalled();
    });

    it('closes the popup if already open', async () => {
      const { instance } = await shallow.render();
      instance.toggleAnalyticsConsent();
      instance.toggleAnalyticsConsent();
      expect(popupRefSpy.dismiss).toHaveBeenCalled();
    });
  });
});
