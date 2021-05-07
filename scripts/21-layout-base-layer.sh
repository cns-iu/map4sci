#!/bin/bash
source constants.sh
if [ "$METHOD" != "impred" ]; then exit; fi;
set -ev

dot -Tdot -Ktwopi -Nshape=plain "$LAYERS_DIR/layer0.dot" -o "$LAYOUT_DIR/layer0.dot"
