#!/bin/bash
source constants.sh
set -ev

python3 -msrc.crossings.remove_crossings "$LAYOUT_DIR/layer0.dot"
