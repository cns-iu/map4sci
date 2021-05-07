#!/bin/bash
source constants.sh
if [ "$METHOD" != "impred" ]; then exit; fi;
set -ev

mkdir -p $OUT/impred

java -jar "libs/impred/ImPredoverlapremoval.jar" --inputgraph=$OUT/impred/layer0.dot --edgeattraction=10 --nodenoderepulsion=10 --edgenoderepulsion=5 --iterations=20 --outputfile=$OUT/impred/layer0.dot
python3 -msrc.property_fetcher $OUT/layers/layer0.dot $OUT/impred/layer0.dot
