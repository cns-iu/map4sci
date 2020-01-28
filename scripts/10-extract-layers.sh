#!/bin/bash
source constants.sh
set -ev

SIZES="0.005 0.05 0.10 0.20 0.30 0.50 0.85"

mkdir -p $OUT/layers
python3 -msrc.layers $NETWORK $OUT/layers --sizes $SIZES
