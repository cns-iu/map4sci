#!/bin/bash
source constants.sh
set -ev

SIZES="0.005 0.05 0.10 0.20 0.30 0.50 0.85"

python3 -msrc.layers $SRC_NETWORK $OUT --sizes $SIZES
