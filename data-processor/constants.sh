shopt -s expand_aliases

# Set global configuration
export LC_ALL=C.UTF-8
export LANG=C.UTF-8
export PYTHONPATH=".:./src"
export GPG_TTY=$(tty)

VERSION="2022-04-19"

# Load environment
source env.sh

export DATASETS_DIR=${DATASETS_DIR:="./datasets"}
export RAW_DATA_DIR=${RAW_DATA_DIR:="./raw-data"}
export SITE_DIR=${SITE_DIR:="./site"}

# Update network paths to use the DATASETS_DIR if relative to datasets
if [[ $NETWORK = datasets/* ]]; then
  NETWORK=$DATASETS_DIR/$(echo $NETWORK | perl -pe 's/^datasets\///g')
fi

# Shorthands and configuration options
SRC="./src"
ORIG="$RAW_DATA_DIR/$DATASET/original"
OUT="$RAW_DATA_DIR/$DATASET/$VERSION"

SITE_DATA_DIR="$OUT/site-data"
LAYERS_DIR="$OUT/layers"
FORESTS_DIR="$OUT/forests"
LAYOUT_DIR="$OUT/layout"

# Check required configuration
_=${DATASET:?"No dataset selected!"}
_=${NETWORK:?"No network file selected!"}
_=${LAYERS:?"No layers specified!"}

# Set defaults
_=${ITERATIONS:=1}
_=${EXTRA_ARGS=}
_=${MEASUREMENTS=}

# Create directories
mkdir -p "$ORIG" "$SITE_DATA_DIR" "$LAYERS_DIR" "$FORESTS_DIR" "$LAYOUT_DIR"
