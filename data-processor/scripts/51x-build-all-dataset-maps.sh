#!/bin/bash
source constants.sh
set -ev

rm -rf $OUT/site-data/datasets

INDEX=$OUT/site-data/datasets/index.json

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

    rm -f $mapDir/*.cx
    cp -r $datasetDir/clustered/*.cx $mapDir
  fi

  if [ ! -e $INDEX ]; then
    cat > $INDEX << EOF
[
  {"id": "$dataset", "name": "$dataset", "dir": "assets/datasets/$dataset"}
EOF
  else
    cat >> $INDEX << EOF
, {"id": "$dataset", "name": "$dataset", "dir": "assets/datasets/$dataset"}
EOF
  fi
done

echo "]" >> $INDEX
