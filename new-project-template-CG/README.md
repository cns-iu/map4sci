# Template for projects using map4sci

## Prerequisites

1. Docker (and Docker Compose) installed and running
2. datasets directory filled with datasets in the proper format (network.dot + config.sh)

## Running

Run the `run.sh` script which will loop through all datasets in the datasets directory and run map4sci over them. It skips datasets which have succesfully finished already.

## Results

Results will be in the `raw-data` directory and a fully built static website in the `site` directory.
