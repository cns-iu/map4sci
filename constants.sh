shopt -s expand_aliases

# Set global configuration
export LC_ALL=C.UTF-8
export LANG=C.UTF-8
export PYTHONPATH=".:./src"
export GPG_TTY=$(tty)

# Load environment
source env.sh

# Shorthands and configuration options
VERSION="2020-01-06"

SRC="./src"
ORIG="./raw-data/$DATASET/original"
OUT="./raw-data/$DATASET/$VERSION"

SITE_DATA_DIR="$OUT/site-data"
LAYERS_DIR="$OUT/layers"
FORESTS_DIR="$OUT/forests"
LAYOUT_DIR="$OUT/layout"

# Check required configuration
_=${DATASET:?"No dataset selected!"}
_=${NETWORK:?"No network file selected!"}
_=${LAYERS:?"No layers specified!"}
_=${METHOD:?"No method (impred, batchtree) specified!"}

# Set defaults
_=${ITERATIONS:=1}
_=${EXTRA_ARGS=}
_=${MEASUREMENTS=}

# Create directories
mkdir -p "$ORIG" "$SITE_DATA_DIR" "$LAYERS_DIR" "$FORESTS_DIR" "$LAYOUT_DIR"
