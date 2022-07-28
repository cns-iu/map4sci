# Installing and running map4sci via Docker

## Pre-requisites

* Docker and docker compose
* Git with this repository checked out

## Building

Build the map4sci docker container:

`docker build . -t map4sci`

## Running

With docker-compose run:

`docker-compose run --rm map4sci`

To run map4sci from the terminal in docker:

```
cd data-processor
CURRENT_DATASET=sample ./run.sh
```

This will run map4sci against the 'sample' dataset in the datasets directory and produce data in raw-data and create a deployable site in the site directory. If you want to keep the site directory copy it into raw-data to be grabbed on the host machine: `cp -r site raw-data/`
