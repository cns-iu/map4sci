#!/bin/bash
source constants.sh
set -ev

mkdir -p $OUT/impred

java -jar "libs/impred/ImPredoverlapremoval.jar" --inputgraph=$OUT/impred/layer0.dot --edgeattraction=10 --nodenoderepulsion=10 --edgenoderepulsion=5 --iterations=20 --outputfile=$OUT/impred/layer0.dot