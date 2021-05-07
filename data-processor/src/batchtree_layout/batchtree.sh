#!/bin/bash
set -ev

IN_DOT=$1
OUT_DOT=$2
TEMP=${OUT_DOT}__temp
mkdir -p $TEMP

python3 src/batchtree_layout/dot2mtx.py $IN_DOT $TEMP/network

libs/BatchTree/bin/BatchTree -input $TEMP/network.mtx -label $TEMP/network.labels -output $TEMP/ -algo 2

python3 src/batchtree_layout/add_pos_to_dot.py $IN_DOT $TEMP/network.mtx*.txt $OUT_DOT

rm -r $TEMP

# Remove BatchTree leavings
rm -f Results.txt
