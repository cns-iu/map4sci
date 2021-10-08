import { MatDialog } from '@angular/material/dialog';

import { BaseModalComponent } from './base-modal.component';


class CustomModalComponent extends BaseModalComponent {
  static readonly DEFAULT_DATA: Record<string, unknown> = { a: 1 };
  static readonly DEFAULT_CONFIG = { data: { b: 2 }, width: '1px' };
}


describe('BaseModalComponent', () => {
  let dialogService: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    dialogService = jasmine.createSpyObj('MatDialog', ['open']);
    BaseModalComponent.dialogService = dialogService;
  });

  describe('static:.open(data, config)', () => {
    it('uses the dialog service to open a new modal', () => {
      CustomModalComponent.open();
      expect(dialogService.open).toHaveBeenCalledTimes(1);
    });

    it('merges data from the arguments and DEFAULT_*', () => {
      CustomModalComponent.open({ c: 3 }, { data: { d: 4 } });
      expect(dialogService.open).toHaveBeenCalledWith(jasmine.anything(), jasmine.objectContaining({
        data: { a: 1, b: 2, c: 3, d: 4 }
      }));
    });

    it('merges config from arguments and DEFAULT_CONFIG', () => {
      CustomModalComponent.open(undefined, { height: '2px' });
      expect(dialogService.open).toHaveBeenCalledWith(jasmine.anything(), jasmine.objectContaining({
        width: '1px',
        height: '2px'
      }));
    });

    it('throws if called on the base class', () => {
      expect(() => BaseModalComponent.open()).toThrow();
    });

    it('throws if the dialog service wasn\'t setup correctly', () => {
      BaseModalComponent.dialogService = undefined as unknown as MatDialog;
      expect(() => CustomModalComponent.open()).toThrow();
    });
  });
});
