import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { load } from 'js-yaml';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';


/**
 * Type for any non-primitive object.
 */
// eslint-disable-next-line @typescript-eslint/ban-types -- Any non-primitive object
type NonPrimitive = object;


// Complicated types for deep property access
// Adapted from https://catchts.com/deep-pick
// ------------------------------------------

/**
 * Constructs all possible deep property paths for an object.
 *
 * @template T The object type.
 *
 * @example
 * // A = ['a'] | ['a', 'b']
 * type Foo = { a: { b: string } };
 * type A = KeyPaths<Foo>;
 */
export type KeyPaths<T, Paths extends PropertyKey[] = []> =
  T extends PropertyKey ? Paths : ({
    [P in keyof T]: [...Paths, P] | KeyPaths<T[P], [...Paths, P]>
  }[keyof T]);

/**
 * Determines the type of value at the specified deep property path.
 *
 * @template T The object type.
 * @template Path The deep path to access.
 *
 * @example
 * // A = { b: string }
 * type Foo = { a: { b: string } };
 * type A = ValueForKeyPath<Foo, ['a']>;
 */
export type ValueForKeyPath<T, Path extends readonly PropertyKey[]> =
  // Remove inner nulls and undefineds and put it on the outer result
  T extends null | undefined ? (
    ValueForKeyPath<NonNullable<T>, Path> | undefined
  ) : (
    // Base case - no more keys
    Path extends [] ? T : (
      // Base case - single key
      Path extends [infer K] ? (
        K extends keyof T ? T[K] : never
      ) : (
        // Recursion case
        Path extends [infer K, ...infer Rest] ? (
          Rest extends readonly PropertyKey[] ? (
            K extends keyof T ? (
              ValueForKeyPath<T[K], Rest>
            ) : never
          ): never
        ) : never
      )
    )
  );


/**
 * Injection token for the url of the site configuration file.
 */
export const SITE_CONFIGURATION_URL = new InjectionToken<string>('URL for site configuration');


/**
 * Provides access to site configuration loaded during app initialization.
 *
 * @template T Optional type useful for specifiying the entire or parts of the configuration's shape.
 */
@Injectable({
  providedIn: 'root'
})
export class SiteConfigurationService<T extends NonPrimitive = Record<string, unknown>> {
  /** Emits whenever a new configuration is loaded. */
  readonly configurationLoaded = new ReplaySubject<T>(1);

  /** Loaded site configuration. */
  private configuration: Record<string, unknown> = {};

  /**
   * Creates an instance of site configuration service.
   *
   * @param http Service used to load configuration yaml files.
   */
  constructor(private readonly http: HttpClient) { }

  /**
   * Retrieves a value from the configuration.
   *
   * @param keys A deep property path.
   * @returns The value or undefined if any object along the path did not exist.
   */
  get<Paths extends KeyPaths<T> & readonly PropertyKey[]>(...keys: Paths): ValueForKeyPath<T, Paths>;

  /**
   * Retrieves a value from the configuration.
   * This is the general fallback case.
   *
   * @template U Optional type to cast result to. It is the user's responsibility to ensure this is correct.
   *
   * @param keys A deep property path.
   * @returns The value or undefined if any object along the path did not exist.
   */
  get<U = unknown>(...keys: string[]): U | undefined;

  get(...keys: string[]): unknown {
    return keys.reduce<Record<string, unknown> | undefined>(
      (obj, key) => obj?.[key] as Record<string, unknown>,
      this.configuration
    );
  }

  /**
   * Fetches the entire site configuration object.
   *
   * @returns The site configuration.
   */
  getConfigObject(): T {
    return this.configuration as T;
  }

  /**
   * Loads and sets the site configuration from a yaml file loaded from an url.
   *
   * @param url Url of the yaml file.
   * @returns Observable of the loaded and parsed yaml.
   */
  loadYaml(url: string): Observable<Record<string, unknown>> {
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(rawYaml => this.parseAndSetConfig(rawYaml, url))
    );
  }

  /**
   * Parses the yaml and sets it as the new configuration.
   *
   * @param rawYaml Raw yaml text.
   * @param url Url from which the yaml was loaded.
   * @returns The parsed yaml.
   */
  private parseAndSetConfig(rawYaml: string, url: string): Record<string, unknown> {
    const yaml = load(rawYaml, { filename: url }) as Record<string, unknown> ?? {};

    if (typeof yaml !== 'object') {
      const message = `Expected site configuration to be an object, got: ${yaml}`;
      throw new Error(message);
    }

    this.configuration = yaml;
    this.configurationLoaded.next(this.configuration as T);
    return yaml;
  }
}
