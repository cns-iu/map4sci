#!/bin/bash
source constants.sh
set -ev

EDEGE_ATTRACTION=30
NODE_NODE_REPLUSION=20
EDGE_NODE_REPULSION=20
ITERATIONS=1

for i in {1..7}
do
  echo "Loop 2 - Iteration $i"

  j=$(( ${i}-1 ))
  LPREV=$OUT/impred/layer${j}.dot
  LO=$OUT/sfdp_output/layer${i}.dot
  LI=$OUT/impred/layer${i}.dot
  FL=$OUT/extract_forest/layer${i}_forest.dot

  # Add the forest to the improved drawing of the previous level
  # To get the new level
  # This drawing will be planar
  python3 -msrc.add_sub_component.add_sub_component $LPREV $FL $LO

  # Setup the box sizes for the layer
  # time python3 $setup_boxsizes_scriptfile $complete_graph_path ${font_sizes[${i}]}

  # Improve the drawing
  java -jar "libs/impred/ImPred.jar" --inputgraph=$LO --edgeattraction=$EDEGE_ATTRACTION --nodenoderepulsion=$NODE_NODE_REPLUSION --edgenoderepulsion=$EDGE_NODE_REPULSION --iterations=$ITERATIONS --outputfile=$LI

  # Remove the overlap of the labels
  java -jar "libs/impred/ImPredoverlapremoval.jar" --inputgraph=$LI --edgeattraction=10 --nodenoderepulsion=10 --edgenoderepulsion=5 --iterations=1 --outputfile=$LI
done

java -jar "libs/impred/ImPredoverlapremoval.jar" --inputgraph=$LI --edgeattraction=10 --nodenoderepulsion=10 --edgenoderepulsion=5 --iterations=20 --outputfile=$LI
