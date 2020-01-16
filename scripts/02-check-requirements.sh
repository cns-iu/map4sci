#!/bin/bash
source constants.sh
set -ev


prog_exists () {
  # From https://stackoverflow.com/questions/592620/how-can-i-check-if-a-program-exists-from-a-bash-script
  command -v $1 >/dev/null 2>&1 || {
    echo >&2 "$1 must be installed. Aborting!";
    exit 1;
  }
}

pymodule_exists () {
  if [ -z "$pymodules" ]; then
    pymodules="$(pip3 freeze)"
  fi
  for mod in "$@"
  do
    if [[ "$pymodules" != *"$mod"* ]]; then
      echo >&2 "Missing python module $mod. Aborting!";
      exit 1;
    fi
  done
}

# Python
prog_exists python3
prog_exists pip3

pymodule_exists mkdocs click-man mkdocs-macros-plugin
pymodule_exists numpy networkx pygraphviz

# Java
prog_exists java

# Graphviz & other graph tools
prog_exists dot
prog_exists sfdp
prog_exists neato
prog_exists gvmap

# Other libraries
prog_exists libs/eba/kmeans
