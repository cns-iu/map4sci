#!/bin/bash
source constants.sh
if [ "$METHOD" != "batchtree" ]; then exit; fi;
set -ev

OUTFILE="$OUT/impred/layer7.dot"

~/workspaces/myaura/myaura/map4sci/src/run_batchtree.sh "$LAYERS_DIR/layer7.dot" $OUTFILE
