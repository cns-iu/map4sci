#!/bin/bash
source constants.sh
set -ev

rm -rf $OUT/site-data/maps

for datasetDir in $OUT/../../*/$VERSION
do
  dataset=$(basename $(dirname $datasetDir))
  echo $dataset $datasetDir

  if [ -e $datasetDir/clustered ]
  then
    mapDir=$OUT/site-data/maps/$dataset
    mkdir -p $mapDir
    rm -rf $mapDir
    cp -r $OUT/site-data/visualization $mapDir
    cp -r $datasetDir/clustered/*.geojson $mapDir
  fi
done
