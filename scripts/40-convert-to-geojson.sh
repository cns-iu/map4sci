#!/bin/bash
source constants.sh
set -ev

MAP_FILE=$OUT/clustered/map.svg
LAYER_FILE=$OUT/impred/layer7.dot
OUTDIR=$OUT/clustered

python3 -msrc.converters svg2geo $MAP_FILE $LAYER_FILE $OUTDIR
