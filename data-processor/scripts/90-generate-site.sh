#!/bin/bash
source constants.sh
set -ev

OUT_DS=$OUT/site-data/datasets/$DATASET

mkdir -p $OUT_DS
rm -f $OUT_DS/*.geojson
cp $OUT/clustered/*.geojson $OUT_DS

rm -f $OUT_DS/*.cx
cp $OUT/clustered/*.cx $OUT_DS

mkdir -p $SITE_DIR
rm -rf $SITE_DIR/*
cp -r ../website/dist/map4sci/* $SITE_DIR
cp -r $OUT/site-data/* $SITE_DIR/assets

if [ ! -e $OUT/site-data/datasets/index.json ]; then
  cat > $SITE_DIR/assets/datasets/index.json << EOF
[
  {"id": "$DATASET", "name": "$DATASET", "dir": "assets/datasets/$DATASET"}
]
EOF
fi
