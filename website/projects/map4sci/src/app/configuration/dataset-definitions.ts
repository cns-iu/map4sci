import { parse } from 'papaparse';

import { DatasetDefinition } from '../services/dataset-definition.service';


function defaultCsvParser(raw: unknown): unknown {
  return parse(raw as string, {
    header: true,
    skipEmptyLines: 'greedy',
    dynamicTyping: true
  }).data;
}


export const DATASET_DEFINITIONS: DatasetDefinition[] = [
  {
    dataset: 'overview-nodes',
    file: 'nodes.csv',
    type: 'text',
    parser: defaultCsvParser
  },
  {
    dataset: 'overview-edges',
    file: 'edges.csv',
    type: 'text',
    parser: defaultCsvParser
  },
  {
    dataset: 'boundaries',
    file: 'boundary.geojson',
    type: 'json'
  },
  {
    dataset: 'clusters',
    file: 'cluster.geojson',
    type: 'json'
  },
  {
    dataset: 'edges',
    file: 'edges.geojson',
    type: 'json'
  },
  {
    dataset: 'nodes',
    file: 'nodes.geojson',
    type: 'json'
  },
  {
    dataset: 'tree-edges',
    file: 'tree-edges.csv',
    type: 'text',
    parser: defaultCsvParser
  }
];
