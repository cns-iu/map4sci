# map4sci

Implementation of a graph algorithm that uses a multi level tree based approach for interactive graph visualization with semantic zoom (ZMLT).

The research paper can be found [here.](https://arxiv.org/pdf/1906.05996.pdf)

This algorithm uses the [BatchTree implementation](https://github.com/khaled-rahman/BatchTree) of the ZMLT layout algorithm.

## Quick Start

Users of map4sci should use the map4sci-project-template as a template for their data projects. See <https://github.com/cns-iu/map4sci-project-template> for more information.

# Creating Dataset

To create the dataset, follow these steps:

1. Create a folder with the name of the dataset.
2. Inside the folder, create a `config.sh` file and a `network.dot` file.

## Configuring the Dataset
The config.sh file contains the configuration parameters for the dataset, which are used by the layout algorithm to generate the visualization. Here's a brief overview of the parameters:

DATASET: The name of the dataset.
NETWORK: The path to the network file (network.dot) that contains the graph data.
LAYOUT: The algorithm that should be used to generate the layout eg. Batchtree, CG or DELG
LAYERS: A comma-separated list of fractions that determine the number of nodes in each layer of the graph.
ITERATIONS: The number of times the layout algorithm should be run. This is optional, but it's recommended to set this to ensure the best possible layout is generated.
LAYOUT: The layout algorithm to use. The default value is BatchTree.
EXTRA_ARGS: Any additional arguments that should be passed to the layout algorithm.
MEASUREMENTS: The quality measurements to calculate. Leave this empty to calculate all available measurements.
To configure the dataset, you can modify the values in the config.sh file as needed. Be sure to update the DATASET and NETWORK parameters to match the name and location of your dataset. You can also adjust the other parameters to customize the layout algorithm and quality measurements.

All the `config.sh` files should follow the format as given in [config.example.sh](data-processor/datasets/config.example.sh)

## Change Log

See [Changelog](CHANGELOG.md)

## Getting Started

### 1. Requirements

- python3
- python3-dev
- java8-jdk
- make
- g++

### 2. Setup virtual environment

Run [00x-setup-venv.sh](scripts/00x-setup-venv.sh) </a> script to setup the virtual environment and install all the dependencies

    ./scripts/00x-setup-venv.sh

To activate the virtual environment:

    source .venv/bin/activate

For more information on the virtual environment refer to the python [documentation](https://docs.python.org/3/library/venv.html).

### 3. Input

Update the [env.sh](env.sh) file to point to the data source config. The default data source is

    data-processor/datasets/sample/config.sh

The location of the input graph to the algorithm is path assigned to $NETWORK environment variable. This can be updated in config.sh file. The default value is:

    data-processor/datasets/sample/network.dot

This location can be changed by changing the value of $NETWORK environment variable in [config.sh](data-processor/datasets/sample/config.sh)

All the `config.sh` files should follow the format as given in [config.example.sh](data-processor/datasets/config.example.sh)

### 5. Run

Run [run.sh](data-processor/run.sh) file to run all the steps in the algorithm. This script runs all the scripts in the [scripts](data-processor/scripts) folder one by one.

    cd data-processor
    ./run.sh

### 6. Serve Site

Run [90x-serve-site.sh](scripts/90x-serve-site.sh) to serve the site

    ./scripts/90x-serve-site.sh

## Details regarding the script files

| S. No. | Name                                 | Description                                                                       | Input Location                                      | Output Location                        |
| ------ | ------------------------------------ | --------------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------- |
| 1      | `00x-setup-venv.sh`                  | This script creates the virtual environment and installs all dependencies.        |                                                     |
| 2      | `01x-build-libs.sh`                  | Builds the dependent libraries, e.g: Kmeans.                                      |                                                     |
| 3      | `02-check-requirements.sh`           | Checks if all the dependencies are installed for the algorithm to run end to end. |                                                     |
| 4      | `03-clear-old-files.sh`              | Deletes the old files located at `$OUT/site-data/`                                |                                                     | [$OUT](constants.sh)/site-data/        |
| 5      | `10-extract-layers.sh`               | Extracts the beginning layers for the algorithm                                   | [$NETWORK](datasets/sample/config.sh)               | None                                   |
| 6      | `20-extract-forest.sh`               | Takes the current and next layer to return the set of trees (forest)              | [$LAYERS_DIR](constants.sh)                         | [$FORESTS_DIR](constants.sh)$          |
| 7      | `21-layout-base-layer.sh`            | Lays down the base layer of the graph                                             | [$LAYERS_DIR](constants.sh)/layer0.dot              | [$LAYERS_DIR](constants.sh)/layer0.dot |
| 8      | `22-remove-crossings-first-layer.sh` | Removes the crossing if they are present in the first layer                       | [$LAYERS_DIR](constants.sh)/layer0.dot              | None                                   |
| 9      | `23-impred.sh`                       | Run impred                                                                        | [$LAYERS_DIR](constants.sh)/layer0.dot              | [$OUT](constants.sh)/impred/layer0.dot |
| 10     | `24-impred-remove-label-overlap.sh`  | Impred to remove the label overlap                                                | [$OUT](constants.sh)/impred/layer0.dot              | [$OUT](constants.sh)/impred/layer0.dot |
| 11     | `26-all-layers-except-first.sh`      | Adding subcomponents and running impred on all layers except the first one        |                                                     |
| 12     | `30-generate-clusters.sh`            | Creates clusters for the completed layout                                         | [$OUT](constants.sh)/impred/layer7.dot              | [$OUT](constants.sh)/clustered/map.svg |
| 13     | `40-convert-to-geojson.sh`           | Converts to the geojson files                                                     | [$OUT](constants.sh)/impred/layer7.dot              | [$OUT](constants.sh)/clustered         |
| 14     | `50-build-map-page.sh`               | None                                                                              | [$OUT](constants.sh)/site-data/visualization        |
| 15     | `60-measure-quality.sh`              | [$OUT](constants.sh)/impred/layer7.dot                                            | [$OUT](constants.sh)/quality_measurement/result.txt |
| 16     | `90-generate-site.sh`                |                                                                                   |
| 17     | `90x-serve-site.sh`                  |                                                                                   |
| 18     | `99x-publish.sh`                     |                                                                                   |

## Environment Variables Details

| S. No. | Name         | File                                   | Default Value                 |
| ------ | ------------ | -------------------------------------- | ----------------------------- |
| 1      | $OUT         | [constants.sh](constants.sh)           | `raw-data/$DATASET/$VERSION`  |
| 2      | $LAYERS_DIR  | [constants.sh](constants.sh)           | `$OUT/layers`                 |
| 3      | $NETWORK     | [config.sh](datasets/sample/config.sh) | `datasets/sample/network.dot` |
| 4      | $FORESTS_DIR | [constants.sh](constants.sh)           | `$OUT/forests`                |

## Credits

Developed as a collaboration between the [Cyberinfrastructure for Network Science Center at Indiana University](http://cns.iu.edu/) and [University of Arizona](https://www.arizona.edu/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
