#!/bin/bash
source constants.sh
set -ev

cd ../website

if [ ! -e node_modules ]; then
  npm ci
fi
if [ ! -e dist ]; then
  npm run build
fi
