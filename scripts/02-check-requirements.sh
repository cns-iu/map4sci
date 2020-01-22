#!/bin/bash
source constants.sh
set -ev

abort () {
  echo >&2 "$1 Aborting!";
  exit 1;
}

prog_exists () {
  for prog in "$@"
  do
    # From https://stackoverflow.com/questions/592620/how-can-i-check-if-a-program-exists-from-a-bash-script
    command -v "$prog" >/dev/null 2>&1 || abort "$prog must be installed."
  done
}

pymodule_exists () {
  if [ -z "$pymodules" ]; then
    pymodules="$(pip3 freeze)"
  fi
  for mod in "$@"
  do
    [[ "$pymodules" == *"$mod"* ]] || abort "Missing python module $mod."
  done
}

# Python
prog_exists python3 pip3

pymodule_exists mkdocs click-man mkdocs-macros-plugin
pymodule_exists numpy pandas geojson
pymodule_exists networkx pygraphviz

# Java
prog_exists java

# Graphviz & other graph tools
prog_exists dot sfdp neato
prog_exists gvmap

# Other libraries
prog_exists libs/eba/kmeans
