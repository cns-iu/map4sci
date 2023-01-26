shopt -s expand_aliases

export CURRENT_VERSION=v1

# Load environment
if [ -e env.sh ]; then
  source env.sh
fi

# Create directories
mkdir -p ./datasets ./raw-data ./site
