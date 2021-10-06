import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { load } from 'js-yaml';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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
export class SiteConfigurationService<T extends Record<string, unknown> = Record<string, unknown>> {
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
   * @param key The configuration key to fetch.
   * @returns The value or undefined if the key did not exist.
   */
  get<K extends keyof T>(key: K): T[K];
  get<U = unknown>(key: string): U | undefined;
  get(key: string): unknown {
    return this.configuration[key];
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
    return yaml;
  }
}
