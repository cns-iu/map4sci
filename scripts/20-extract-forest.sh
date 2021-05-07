#!/bin/bash
source constants.sh
if [ "$METHOD" != "impred" ]; then exit; fi;
set -ev

python3 -msrc.forests "$LAYERS_DIR" "$FORESTS_DIR"
