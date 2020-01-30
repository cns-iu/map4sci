#!/bin/bash
source constants.sh
set -ev

python3 -msrc.layers $NETWORK "$LAYERS_DIR" --layers "$LAYERS"
