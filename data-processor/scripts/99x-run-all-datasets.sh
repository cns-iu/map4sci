#!/bin/bash
source constants.sh
set -ev

for dataset in $(ls $DATASETS_DIR | grep -v config.example.sh)
do
  echo $dataset
  OUTPUT_DIR="$RAW_DATA_DIR/$dataset/$VERSION"
  if [ ! -e $OUTPUT_DIR/map4sci-completed ]
  then
    export CURRENT_DATASET=$dataset
    ./run.sh $dataset &> $OUTPUT_DIR/map4sci.log.txt
    touch $OUTPUT_DIR/map4sci-completed
  fi
done

./scripts/51x-build-all-dataset-maps.sh 
./scripts/90-generate-site.sh
