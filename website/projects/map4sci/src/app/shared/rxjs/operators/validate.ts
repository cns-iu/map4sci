import { MonoTypeOperatorFunction, OperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators';


/**
 * Operator that throws an error when the provided predicate returns a falsy value
 *
 * @param pred Predicate function
 * @param message Custom error message
 * @param errorType Custom error class
 */
export function validate<T, U extends T>(
  pred: (data: T) => data is U,
  message?: string,
  errorType?: new (message?: string) => unknown
): OperatorFunction<T, U>;

export function validate<T>(
  pred: (data: T) => boolean,
  message?: string,
  errorType?: new (message?: string) => unknown
): MonoTypeOperatorFunction<T>;

export function validate(
  pred: (data: unknown) => boolean,
  message?: string,
  errorType?: new (message?: string) => unknown
): MonoTypeOperatorFunction<unknown> {
  return tap(data => {
    if (!pred(data)) {
      throw new (errorType ?? Error)(message);
    }
  });
}
