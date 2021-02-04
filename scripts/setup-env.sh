#!/bin/bash
set -euo pipefail
IFS=$'\n\t'


# Base paths

DIR="${0%/*}"
ROOT_DIR="$DIR/.."


# Parse arguments

declare -a PARAMS=()
SKIP_INSTALL=0

while [[ "$#" -gt 0 ]]; do
  case "$1" in
    --skip-install)
      SKIP_INSTALL=1
      shift
      ;;
    -*|--*)
      echo "Error: Unsupported flag $1" >&2
      exit 1
      ;;
    *)
      PARAMS+=("$1")
      shift
      ;;
  esac
done

ENV=${PARAMS[0]:-.env}
if [[ ! "$ENV" = /* ]]; then ENV="$ROOT_DIR/$ENV"; fi

PROMPT=${PARAMS[1]:-map4sci-env}


# Set cleanup on failures

function failure() {
  rm -rf "$ENV"
}

trap failure ERR


# Create environment

python3 -m venv "$ENV" --clear --prompt "$PROMPT"

set +u # Disable in case we are running old venv versions that can't handle strict mode
source "$ENV/bin/activate"
set -u

# Install basic requirements

pip install wheel
pip install nodeenv
nodeenv -p

set +u # Just to be on the safe side
deactivate
set -u


# Install dependencies if not explicitly disabled
if [[ "$SKIP_INSTALL" == 0 ]]; then
  source "$DIR/install-deps.sh" || true
fi
