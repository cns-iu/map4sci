#!/bin/bash
set -euo pipefail
IFS=$'\n\t'


# Base paths

DIR="${0%/*}"
ROOT_DIR="$DIR/.."
DATA_PROCESSOR_DIR="$ROOT_DIR/data-processor"
WEBSITE_DIR="$ROOT_DIR/website"


# Parse arguments

ENV=${1:-.env}
if [[ ! "$ENV" = /* ]]; then ENV="$ROOT_DIR/$ENV"; fi


# Install dependencies

set +u # Disable in case we are running old venv versions that can't handle strict mode
source "$ENV/bin/activate"
set -u

# Install website (NPM) deps
pip install -r "$DATA_PROCESSOR_DIR/requirements.txt"
(cd "$WEBSITE_DIR"; npm install)

# Build Tippecanoe GEOJSON optimizer
({
    cd "$DATA_PROCESSOR_DIR/libs"

    export PREFIX="../tippecanoe-bin"
    rm -rf ./tippecanoe*
    git clone https://github.com/mapbox/tippecanoe.git
    cd tippecanoe
    make -j
    make install
})

# Build BatchTree layout algorithm
({
    cd "$DATA_PROCESSOR_DIR/libs"

    rm -rf ./BatchTree*
    git clone https://github.com/khaled-rahman/BatchTree
    cd BatchTree
    make
})

# Build kmeans c++ program
make -C $DATA_PROCESSOR_DIR/libs/eba/

set +u # Just to be on the safe side
deactivate
set -u
