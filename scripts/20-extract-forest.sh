#!/bin/bash
source constants.sh
set -ev

python3 -msrc.forests "$LAYERS_DIR" "$FORESTS_DIR"
