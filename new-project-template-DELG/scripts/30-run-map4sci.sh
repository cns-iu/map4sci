#!/bin/bash
source constants.sh
set -ev

DATASETS=./datasets

for dataset in $(ls $DATASETS)
do
  OUT=${DATASETS}/${dataset}
  echo $dataset
  if [ ! -e $OUT/map4sci-completed ]
  then
    time ./src/map4sci.sh $dataset &> $OUT/map4sci.log.txt
    touch $OUT/map4sci-completed
  fi
done

time ./src/map4sci.sh $dataset ./scripts/51x-build-all-dataset-maps.sh 
time ./src/map4sci.sh $dataset ./scripts/90-generate-site.sh
# cp --no-preserve=ownership -r site/* ../docs
