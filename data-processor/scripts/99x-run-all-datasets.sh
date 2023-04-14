#!/bin/bash
source constants.sh
set -ev

for dataset in $(ls $DATASETS_DIR)
do
  FULL_DATASET_DIR=${DATASETS_DIR}/${dataset}
  echo $dataset
  if [ ! -e $FULL_DATASET_DIR/map4sci-completed ]
  then
    export CURRENT_DATASET=$dataset
    ./run.sh $dataset &> $FULL_DATASET_DIR/map4sci.log.txt
    touch $FULL_DATASET_DIR/map4sci-completed
  fi
done

./scripts/51x-build-all-dataset-maps.sh 
./scripts/90-generate-site.sh
