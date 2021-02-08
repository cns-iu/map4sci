#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

rm -rf $OUT/!(site-data)
rm -rf $OUT/site-data/*
