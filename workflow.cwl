#!/usr/bin/env cwl-runner

cwlVersion: v1.0
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
    - entry: $(inputs.datasets_dir)
    - writable: true
      entry: $(inputs.rawdata_dir)
    - writable: true
      entry: $(inputs.site_dir)

inputs:
  dataset:
    type: string
    default: sample
  datasets_dir:
    type: Directory
  rawdata_dir:
    type: Directory
  site_dir:
    type: Directory
  version:
    type: string
    default: v1

outputs:
  script_output:
    type: stdout
stdout: output.txt

baseCommand:
- bash
- -c
- cd /workspace/data-processor && ./run.sh
