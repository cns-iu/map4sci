shopt -s expand_aliases

export LC_ALL=C.UTF-8
export LANG=C.UTF-8
export PYTHONPATH=./src
export MYPYPATH=$PYTHONPATH
export GPG_TTY=$(tty)

SRC=./src

source env.sh

VERSION=2020-01-06
ORIG=./raw-data/$DATASET/original
OUT=./raw-data/$DATASET/$VERSION
mkdir -p $ORIG $OUT/site-data
