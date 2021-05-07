#!/bin/bash
source constants.sh
set -ev

rm -rf $OUT/site-data/datasets

for datasetDir in $OUT/../../*/$VERSION
do
  dataset=$(basename $(dirname $datasetDir))
  echo $dataset $datasetDir
  
  if [ -e $datasetDir/clustered ]
  then
    mapDir=$OUT/site-data/datasets/$dataset
    mkdir -p $mapDir
    rm -f $mapDir/*.geojson
    cp -r $datasetDir/clustered/*.geojson $mapDir
  fi
done
