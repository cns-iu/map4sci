import { MatSnackBar } from '@angular/material/snack-bar';

import { BasePopupComponent } from './base-popup.component';


class CustomPopupComponent extends BasePopupComponent {
  static readonly DEFAULT_DATA: Record<string, unknown> = { a: 1 };
  static readonly DEFAULT_CONFIG = { data: { b: 2 }, duration: 1000 };
}


describe('BasePopupComponent', () => {
  let snackBarService: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    snackBarService = jasmine.createSpyObj('MatDialog', ['openFromComponent']);
    BasePopupComponent.snackBarService = snackBarService;
  });

  describe('static:.open(data, config)', () => {
    it('uses the dialog service to open a new popup', () => {
      CustomPopupComponent.open();
      expect(snackBarService.openFromComponent).toHaveBeenCalledTimes(1);
    });

    it('merges data from the arguments and DEFAULT_*', () => {
      CustomPopupComponent.open({ c: 3 }, { data: { d: 4 } });
      expect(snackBarService.openFromComponent).toHaveBeenCalledWith(jasmine.anything(), jasmine.objectContaining({
        data: { a: 1, b: 2, c: 3, d: 4 }
      }));
    });

    it('merges config from arguments and DEFAULT_CONFIG', () => {
      CustomPopupComponent.open(undefined, { direction: 'ltr' });
      expect(snackBarService.openFromComponent).toHaveBeenCalledWith(jasmine.anything(), jasmine.objectContaining({
        duration: 1000,
        direction: 'ltr'
      }));
    });

    it('throws if called on the base class', () => {
      expect(() => BasePopupComponent.open()).toThrow();
    });

    it('throws if the snack bar service wasn\'t setup correctly', () => {
      BasePopupComponent.snackBarService = undefined as unknown as MatSnackBar;
      expect(() => CustomPopupComponent.open()).toThrow();
    });
  });
});
