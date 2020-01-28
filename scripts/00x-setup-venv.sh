#!/bin/bash
set -ev

VENV=.venv
NAME="map4scr-venv"

# Parse command line arguments
if [ "$1" != "" ]; then
  VENV="$1"
fi
if [ "$2" != "" ]; then
  NAME="$2"
fi

# Create virtual environment
python3 -m venv "$VENV" --clear --prompt "$NAME"

# Enter environment
source "$VENV/bin/activate"

# Install python requirements
pip install nodeenv
pip install mkdocs click-man mkdocs-macros-plugin
pip install numpy pandas geojson
pip install networkx pygraphviz

# Install node
nodeenv -p

# Exit/Reenter environment to reload available commands (for `node` and `npm`)
deactivate
source "$VENV/bin/activate"

# Install node requirements
npm install http-server -g
npm install parcel -g

# Deactivate environment before leaving
deactivate
