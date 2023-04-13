# Mapbox api token
# export MAPBOX_ACCESS_TOKEN="mytoken"

# The port to use when serving locally during development
DEV_PORT=4444
BASE_URL="http://localhost:${DEV_PORT}"

# Whether to sync with box.com
DOSYNC=true

export CURRENT_DATASET=${CURRENT_DATASET:="sample"}

# Load dataset specific configuration
source $DATASETS_DIR/${CURRENT_DATASET}/config.sh

export VERSION=${CURRENT_VERSION:="2022-07-28"}
