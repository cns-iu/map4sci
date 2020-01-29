shopt -s expand_aliases

# Set global configuration
export LC_ALL=C.UTF-8
export LANG=C.UTF-8
export PYTHONPATH="./src"
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

# Check required configuration
[ ${DATASET:?"No dataset selected!"} ]
[ ${NETWORK:?"No network file selected!"} ]

# Set defaults
[ ${ITERATIONS:=1} ]
[ ${EXTRA_ARGS=} ]
[ ${MEASUREMENTS=} ]

# Create directories
mkdir -p "$ORIG" "$SITE_DATA_DIR" "$LAYERS_DIR" "$FORESTS_DIR"
