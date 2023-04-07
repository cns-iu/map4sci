# Dataset configuration
# ---------------------

DATASET=lastfm-DELG
NETWORK="datasets/${DATASET}/network.dot"

# Algorithm configuration
# -----------------------

# Number of nodes in each layer (in fractions)
LAYERS="0.005,0.05,0.10,0.20,0.30,0.50,1.0"

# Number of times the layout algorithm is run
# Optional (but it is highly recommended that this is set)
ITERATIONS=1

# Additional arguments appended when calling the layout algorithm
# Optional
EXTRA_ARGS=
LAYOUT="DELG"
# Quality measurement configuration
# ---------------------------------

# Measurements to calculate
# Run `python3 -m src.quality_measurement -h` for available options
# Leave empty for all measurements to run
# Optional
MEASUREMENTS=
