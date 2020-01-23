#!/bin/bash
set -ev

path_to_layers="../results/layers"
forest_output="../results/extract_forest"
extractforest_scriptfile="../src/extract_forest/extract_forest.py"

python3 $extractforest_scriptfile -i $path_to_layers -o $forest_output
