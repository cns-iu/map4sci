#!/bin/bash
source constants.sh
set -ev

rm -f datasets/*/map4sci.log.txt
rm -f datasets/*/map4sci-completed
rm -rf ./raw-data ./site
