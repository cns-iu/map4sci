#!/bin/bash
set -ev

IN_DOT=$1
OUT_DOT=$2
TEMP=${OUT_DOT}__temp
mkdir -p $TEMP


python3 libs/DELG/src/initialize-layout.py $IN_DOT $TEMP/input.json

node libs/DELG/src/cli.js $TEMP/input.json $TEMP/output.tsv

python3 src/layouts/batchtree_layout/add_pos_to_dot.py $IN_DOT $TEMP/output.tsv $OUT_DOT

rm -r $TEMP
