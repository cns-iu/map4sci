#!/bin/bash
source constants.sh
set -ev

FOREST_OUTPUT="/extract_forest"

mkdir -p $OUT/extract_forest
python3 -msrc.extract_forest.extract_forest -i $OUT/layers -o $OUT/$FOREST_OUTPUT
