#!/bin/bash
source constants.sh
set -ev

mkdir -p $OUT/sfdp_output

sfdp "$OUT/layers/layer0.dot" -Tdot > "$OUT/sfdp_output/layer0.dot"
