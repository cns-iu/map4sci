#!/bin/bash
set -euo pipefail
IFS=$'\n\t'


# Base paths

DIR="${0%/*}"
ROOT_DIR="$DIR/.."
DATA_PROCESSOR_DIR="$ROOT_DIR/data-processor"
WEBSITE_DIR="$ROOT_DIR/website"


# Parse arguments

ENV=${1:-.env}
if [[ ! "$ENV" = /* ]]; then ENV="$ROOT_DIR/$ENV"; fi


# Install dependencies

set +u # Disable in case we are running old venv versions that can't handle strict mode
source "$ENV/bin/activate"
set -u

pip install -r "$DATA_PROCESSOR_DIR/requirements.txt"
(cd "$WEBSITE_DIR"; npm install)

set +u # Just to be on the safe side
deactivate
set -u
