#!/bin/bash
source constants.sh
set -ev

cp CHANGELOG.md docs

mkdocs build

rm -f docs/CHANGELOG.md

rm -rf site/data
cp -r $OUT/site-data site/data
