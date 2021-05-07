import { from } from 'rxjs';

import { validate } from './validate';


describe('validate(pred, message?, errorType?)', () => {
  const sampleData = [1, 2];
  let pred: jasmine.Spy<(data: unknown) => boolean>;
  let next: jasmine.Spy<(data: unknown) => void>;
  let error: jasmine.Spy<(error: unknown) => void>;
  let complete: jasmine.Spy<() => void>;
  let exec: (data: unknown[], msg?: string, errorType?: new (msg?: string) => unknown) => void;

  beforeEach(() => {
    pred = jasmine.createSpy().and.returnValue(true);
    next = jasmine.createSpy();
    error = jasmine.createSpy();
    complete = jasmine.createSpy();
    exec = (data, msg, errorType) => from(data).pipe(
      validate(pred, msg, errorType)
    ).subscribe({ next, error, complete });
  });

  it('calls the predicate for each value', () => {
    exec(sampleData);
    expect(pred).toHaveBeenCalledTimes(sampleData.length);
  });

  it('passes the value on if the predicate returns true', () => {
    exec(sampleData);
    expect(next).toHaveBeenCalledTimes(sampleData.length);
  });

  it('completes when the underlying observable completes', () => {
    exec([]);
    expect(complete).toHaveBeenCalledTimes(1);
  });

  it('errors if the predicate returns false', () => {
    pred.and.returnValue(false);
    exec(sampleData);
    expect(error).toHaveBeenCalled();
  });

  it('accepts a custom error message', () => {
    const msg = 'A test message';
    pred.and.returnValue(false);
    exec(sampleData, msg);
    expect(error).toHaveBeenCalledWith(new Error(msg));
  });

  it('accepts a custom error type', () => {
    pred.and.returnValue(false);
    exec(sampleData, undefined, TypeError);
    expect(error).toHaveBeenCalledWith(jasmine.any(TypeError));
  });
});
