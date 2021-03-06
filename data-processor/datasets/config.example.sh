# Dataset configuration
# ---------------------

DATASET=sample
NETWORK=path/to/file

# Algorithm configuration
# -----------------------

# Number of nodes in each layer (in fractions)
LAYERS=0.1,0.2,0.3,0.4

# Number of times the layout algorithm is run
# Optional (but it is highly recommended that this is set)
ITERATIONS=

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
