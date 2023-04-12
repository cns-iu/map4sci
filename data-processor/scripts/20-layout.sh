#!/bin/bash
source constants.sh
set -ev

INPUT_LAYER=$OUT/layers/layer7.dot
OUTPUT_LAYER=$OUT/impred/layer7.dot

if [ "${LAYOUT}" == "DELG" ]; then
    src/layouts/delg/delg.sh $INPUT_LAYER $OUTPUT_LAYER
elif [ "${LAYOUT}" == "CG" ]; then
    src/layouts/cg/cg.sh $INPUT_LAYER $OUTPUT_LAYER
else
    src/layouts/batchtree_layout/batchtree.sh $INPUT_LAYER $OUTPUT_LAYER
fi
