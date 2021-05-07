#!/bin/bash
source constants.sh
set -ev

DIR=$OUT/clustered

for f in $DIR/*.geojson
do
  libs/tippecanoe-bin/bin/tippecanoe -zg -o ${f%.*}.mbtiles --drop-densest-as-needed $f
done
