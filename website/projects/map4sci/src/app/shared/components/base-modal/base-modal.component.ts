import { Directive, Type } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';


/**
 * Type of modal components
 *
 * @template T The instance type.
 * @template D Modal data type.
 */
export interface ModalComponentConstructor<T, D> extends Type<T> {
  /** Optional default data used whenever a new modal is opened. */
  readonly DEFAULT_DATA?: D;
  /** Optional default configuration used whenever a new modal is opened. */
  readonly DEFAULT_CONFIG?: MatDialogConfig<D>;
}


/**
 * Base class for modals.
 */
@Directive()
export class BaseModalComponent {
  /** Material dialog service. Initialized in APP_INITIALIZER. */
  static dialogService: MatDialog;

  /**
   * Opens a new subclass modal.
   *
   * @template T Modal instance type.
   * @template D Modal data type.
   * @template R Value returned when the modal is closed.
   *
   * @param this Reference to the subclass (properly typed).
   * @param [data] Additional user data to pass to the modal.
   * @param [config] Additional configuration.
   * @returns A reference to the modal.
   * @throws {Error} If open is called on a non subclass.
   * @throws {Error} If the material dialog service has not been initialized properly.
   */
  static open<T, D = unknown, R = unknown>(
    this: ModalComponentConstructor<T, D> & typeof BaseModalComponent,
    data?: D, config?: MatDialogConfig<D>
  ): MatDialogRef<T, R> {
    if (this === BaseModalComponent) {
      throw new Error('BaseModalComponent must be subclassed to open new modals');
    }

    if (!this.dialogService) {
      throw new Error('MatDialog service not found');
    }

    return this.dialogService.open(this, {
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
