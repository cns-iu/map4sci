# Mapbox api token
# export MAPBOX_ACCESS_TOKEN="mytoken"

# The port to use when serving locally during development
DEV_PORT=4444
BASE_URL="http://localhost:${DEV_PORT}"

# Whether to sync with box.com
DOSYNC=true

# Load dataset specific configuration
source datasets/sample/config.sh
