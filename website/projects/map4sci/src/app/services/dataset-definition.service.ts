import { Injectable } from '@angular/core';


/**
 * Definition with location, type, and parsing required for loading a dataset
 */
export interface DatasetDefinition {
  /** Dataset identifier */
  dataset: string;
  /** File name */
  file: string;
  /** File type */
  type?: 'json' | 'text' | 'blob' | 'arraybuffer';
  /** Additional parsing during data loading */
  parser?: (data: unknown) => unknown;
}


/**
 * A service for dataset definition lookup
 */
@Injectable()
export class DatasetDefinitionService {
  /** Definitions indexed by dataset */
  private readonly definitions: Record<string, DatasetDefinition> = {};

  /**
   * Retrieves a previously added definition
   *
   * @param dataset Dataset to find definition for
   * @returns The definition if found, else undefined
   */
  getDefinition(dataset: string): DatasetDefinition | undefined {
    return this.definitions[dataset];
  }

  /**
   * Adds a dataset definition for future lookup
   *
   * @param definition Definition to add
   */
  addDefinition(definition: DatasetDefinition): void {
    this.definitions[definition.dataset] = definition;
  }
}
