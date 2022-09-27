#!/bin/bash
source constants.sh
set -ev

if [ "$SKIP_MEASURES" != "true" ]; then
  INPUT=$OUT/impred/layer7.dot

  mkdir -p $OUT/quality_measurement
  python3 -msrc.quality_measurement $MEASUREMENTS $INPUT $OUT/quality_measurement/result.txt
else
  echo "Skipping network measures step..."
fi
