# Dataset configuration
# ---------------------

DATASET=--DATASET--
NETWORK="datasets/${DATASET}/network.dot"
SKIP_MEASURES=true

# Algorithm configuration
# -----------------------

# Number of nodes in each layer (in fractions)
#LAYERS="0.005,0.05,0.10,0.20,0.50,0.75,1.0"
LAYERS="0.025,0.1,0.2,0.4,0.6,0.8,1.0"

# Number of times the layout algorithm is run
# Optional (but it is highly recommended that this is set)
ITERATIONS=1

# Additional arguments appended when calling the layout algorithm
# Optional
EXTRA_ARGS=

# Quality measurement configuration
# ---------------------------------

# Measurements to calculate
# Run `python3 -m src.quality_measurement -h` for available options
# Leave empty for all measurements to run
# Optional
MEASUREMENTS=
