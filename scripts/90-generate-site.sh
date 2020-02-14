#!/bin/bash
source constants.sh
set -ev

cp README.md docs/index.md
cp CHANGELOG.md docs

mkdocs build

rm -f docs/index.md docs/CHANGELOG.md

rm -rf site/data
cp -r $OUT/site-data site/data
cp -r $OUT/clustered/*.geojson site/data/visualization
