import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { load } from 'js-yaml';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export const SITE_CONFIGURATION_URL = new InjectionToken<string>('Location of site configuration');


@Injectable({
  providedIn: 'root'
})
export class SiteConfigurationService {
  private configuration: Record<string, unknown> = {};

  constructor(private readonly http: HttpClient) {}

  get<T = unknown>(key: string): T | undefined {
    return this.configuration[key] as T | undefined;
  }

  getConfigObject<T extends Record<string, unknown>>(): T {
    return this.configuration as T;
  }

  loadYaml(url: string): Observable<unknown> {
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(rawYaml => this.parseAndSetConfig(rawYaml, url))
    );
  }

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
