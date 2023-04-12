# Dataset configuration
# ---------------------

DATASET=sample
NETWORK="datasets/sample/network.dot"


# Algorithm configuration
# -----------------------

# Number of nodes in each layer (in fractions)
LAYERS="0.005,0.05,0.10,0.20,0.30,0.50,0.85"

# Number of times the layout algorithm is run
# Optional (but it is highly recommended that this is set)
ITERATIONS=1

LAYOUT="BatchTree"
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
