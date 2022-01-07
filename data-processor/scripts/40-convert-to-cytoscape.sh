#!/bin/bash
source constants.sh
set -ev

INFILE=$OUT/impred/layer7.dot
OUTFILE=$OUT/clustered/network.cx

python3 -msrc.converters dot2cx $INFILE $OUTFILE $DATASET
