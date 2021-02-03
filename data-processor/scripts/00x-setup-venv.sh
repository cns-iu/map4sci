#!/bin/bash
set -ev

VENV=${1:-.venv}
NAME=${2:-"map4sci-venv"}

# Create virtual environment
python3 -m venv "$VENV" --clear --prompt "$NAME"

# Enter environment
source "$VENV/bin/activate"

# Install python requirements
pip install nodeenv
pip install -r requirements.txt

# Install node
nodeenv -p

# Reenter environment to reload available commands (for `node` and `npm`)
deactivate
source "$VENV/bin/activate"

# Install node requirements
npm install parcel -g

# Deactivate environment before leaving
deactivate
