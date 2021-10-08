import { Directive, Type } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';


/**
 * Type of popup components
 *
 * @template T The instance type.
 * @template D Pupup data type.
 */
export interface PopupComponentConstructor<T, D> extends Type<T> {
  /** Optional default data used whenever a new popup is opened. */
  readonly DEFAULT_DATA?: D;
  /** Optional default configuration used whenever a new popup is opened. */
  readonly DEFAULT_CONFIG?: MatSnackBarConfig<D>;
}


/**
 * Base class for popups.
 */
@Directive()
export class BasePopupComponent {
  /** Material snack bar service. Initialized in APP_INITIALIZER. */
  static snackBarService: MatSnackBar;

  /**
   * Opens a new subclass popup.
   *
   * @template T Popup instance type.
   * @template D Popup data type.
   *
   * @param this Reference to the subclass (properly typed).
   * @param [data] Additional user data to pass to the popup.
   * @param [config] Additional configuration.
   * @returns A reference to the popup.
   * @throws {Error} If open is called on a non subclass.
   * @throws {Error} If the material snack bar service has not been initialized properly.
   */
  static open<T, D = unknown>(
    this: PopupComponentConstructor<T, D> & typeof BasePopupComponent,
    data?: D, config?: MatSnackBarConfig<D>
  ): MatSnackBarRef<T> {
    if (this === BasePopupComponent) {
      throw new Error('BasePopupComponent must be subclassed to open new popups');
    }

    if (!this.snackBarService) {
      throw new Error('MatSnackBar service not found');
    }

    return this.snackBarService.openFromComponent(this, {
      ...this.DEFAULT_CONFIG,
      ...config,
      data: {
        ...this.DEFAULT_CONFIG?.data,
        ...this.DEFAULT_DATA,
        ...config?.data,
        ...data
      }
    });
  }

  /**
   * Does nothing. Purely for type inference purposes.
   *
   * @param _args Unused
   */
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(..._args: unknown[]) {
    // Intentionally empty to get correct inference for `open`
  }
}
