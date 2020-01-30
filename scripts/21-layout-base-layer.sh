#!/bin/bash
source constants.sh
set -ev

dot -Tdot -Ktwopi -Nshape=plain "$LAYERS_DIR/layer0.dot" -o "$LAYOUT_DIR/layer0.dot"
