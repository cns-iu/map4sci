#!/bin/bash
source constants.sh
set -ev

# need to adjust reference to tippcanoe to right place
tippecanoe -zg -o out.mbtiles --drop-densest-as-needed in.geojson --force

if [ -f out.mbtiles ]
then
   mv out.mbtiles ../website/projects/map4sci/src/assets/out.mbtiles
else
    echo 'Error generating out.mbtiles'
fi