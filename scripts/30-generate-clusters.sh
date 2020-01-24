#!/bin/bash
source constants.sh
set -ev

INFILE="TODO"
OUTFILE=$OUT/clustered/map.svg

libs/eba/kmeans -action=clustering -C=modularity <"$INFILE" |
gvmap -e |
neato -Nshape=rectangle -GforcelabelsX=false -Ecolor=grey -Gstart=123  -n2 -Tsvg >"$OUTFILE"
