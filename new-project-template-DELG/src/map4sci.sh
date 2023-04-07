#!/bin/bash
source constants.sh
set -ev

docker compose -f src/docker-compose.yml run --rm -e CURRENT_DATASET=$1 -e CURRENT_VERSION=${CURRENT_VERSION} map4sci $2
