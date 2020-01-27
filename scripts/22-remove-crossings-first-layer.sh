#!/bin/bash
source constants.sh
set -ev

python3 -msrc.crossings.remove_crossings "$OUT/sfdp_output/layer0.dot"
