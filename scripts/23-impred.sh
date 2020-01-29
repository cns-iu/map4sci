#!/bin/bash
source constants.sh
set -ev

mkdir -p $OUT/impred

EDGE_ATTRACTION=30
NODE_NODE_REPULSION=20
EDGE_NODE_REPULSION=20
ITERATIONS=1

java -jar "libs/impred/ImPred.jar"  --inputgraph=$LAYOUT_DIR/layer0.dot --edgeattraction=$EDGE_ATTRACTION --nodenoderepulsion=$NODE_NODE_REPULSION --edgenoderepulsion=$EDGE_NODE_REPULSION --iterations=$ITERATIONS --outputfile=$OUT/impred/layer0.dot
