#!/bin/bash
source constants.sh
if [ "$METHOD" != "impred" ]; then exit; fi;
set -ev

python3 -msrc.crossings.remove_crossings "$LAYOUT_DIR/layer0.dot"
