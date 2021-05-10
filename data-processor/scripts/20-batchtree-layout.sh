#!/bin/bash
source constants.sh
set -ev

INPUT_LAYER=$OUT/layers/layer7.dot
OUTPUT_LAYER=$OUT/impred/layer7.dot

src/batchtree_layout/batchtree.sh $INPUT_LAYER $OUTPUT_LAYER
