#!/bin/bash
source constants.sh
set -ev

rm -rf $OUT/site-data/visualization
mkdir -p $OUT/site-data/visualization
parcel build src/visualization/index.html --out-dir $OUT/site-data/visualization --public-url ./
