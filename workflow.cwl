#!/usr/bin/env cwl-runner

cwlVersion: v1.2
class: CommandLineTool

requirements:
  DockerRequirement:
    dockerPull: map4sci:latest
    dockerOutputDirectory: /workspace/data-processor/output
  EnvVarRequirement:
    envDef:
      CURRENT_DATASET: $(inputs.dataset)
      CURRENT_VERSION: $(inputs.version)
      DATASETS_DIR: /workspace/data-processor/output/datasets
      RAW_DATA_DIR: /workspace/data-processor/output/raw-data
      SITE_DIR: /workspace/data-processor/output/site
      donkeyPull: ghcr.io/cns-iu/map4sci:main
  InitialWorkDirRequirement:
    listing:
    - entryname: /workspace/data-processor/output/datasets
      writable: false
      entry: $(inputs.datasets_dir)
    - entryname: /workspace/data-processor/output/raw-data
      writable: true
      entry: $(inputs.rawdata_dir)
    - entryname: /workspace/data-processor/output/site
      writable: true
      entry: $(inputs.site_dir)

inputs:
  dataset:
    type: string
    default: sample
  datasets_dir:
    type: Directory
  rawdata_dir:
    type: Directory
  script:
    type: string?
    inputBinding:
      position: 1
  script_cmd:
    type: string
    default: cd /workspace/data-processor && ./run.sh
  site_dir:
    type: Directory
  version:
    type: string
    default: v1

outputs:
  datasets:
    type: Directory
    outputBinding:
      glob: /workspace/data-processor/output/datasets
  raw_data_out:
    type: Directory
    outputBinding:
      glob: /workspace/data-processor/output/raw-data
  site_data_out:
    type: Directory
    outputBinding:
      glob: /workspace/data-processor/output/site
stdout: output.txt

baseCommand: bash
arguments:
- -c
- $(inputs.script_cmd)
