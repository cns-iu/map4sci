#!/bin/bash
set -ev

IN_DOT=$1
OUT_DOT=$2
TEMP=${OUT_DOT}__temp
mkdir -p $TEMP

echo $TEMP

python3 libs/CG/src/initialization/initialize-layout.py $IN_DOT $TEMP/csv/network.csv

NODE_OPTIONS="--max-old-space-size=24000" node libs/CG/src/cli.js  $TEMP/csv/network.csv $TEMP/output.tsv

python3 src/layouts/batchtree_layout/add_pos_to_dot.py $IN_DOT $TEMP/output.tsv $OUT_DOT

rm -r $TEMP
