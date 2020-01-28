#!/bin/bash
source constants.sh
set -ev

mkdir -p $OUT/layers
python3 -msrc.layers $NETWORK $OUT/layers --sizes $LAYERS
