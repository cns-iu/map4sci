#!/bin/bash
source constants.sh
set -ev

for dataset in $(ls $DATASETS)
do
  OUT=${DATASETS}/${dataset}
  echo $dataset
  if [ ! -e $OUT/map4sci-completed ]
  then
    export CURRENT_DATASET=$dataset
    ./run.sh $dataset &> $OUT/map4sci.log.txt
    touch $OUT/map4sci-completed
  fi
done

./scripts/51x-build-all-dataset-maps.sh 
./scripts/90-generate-site.sh
