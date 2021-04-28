#!/bin/bash
source constants.sh
set -ev

# need to adjust reference to tippcanoe to right place
tippecanoe -zg -o out.mbtiles --drop-densest-as-needed in.geojson