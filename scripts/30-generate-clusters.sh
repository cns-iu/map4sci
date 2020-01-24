#!/bin/bash
source constants.sh
set -ev

INFILE=$OUT/impred/layer7.dot
OUTFILE=$OUT/clustered/map.svg

mkdir -p $OUT/clustered

sed '/^$/d' $INFILE | perl -pe 's/\ \[\ \]//g' | # kmeans can't handle empty lines and empty attribute lists
libs/eba/kmeans -action=clustering -C=modularity |
gvmap -e |
neato -Nshape=rectangle -GforcelabelsX=false -Ecolor=grey -Gstart=123  -n2 -Tsvg >"$OUTFILE"
