# map4sci

## Introduction

Welcome to the implementation of the graph algorithm that uses a multi-level tree-based approach for interactive graph visualization with semantic zoom, also known as ZMLT. This project is based on a research paper which can be found at the link provided in the project description.

The ZMLT algorithm is designed to provide an efficient and interactive way to visualize large graphs by using a multi-level tree-based approach. This approach is particularly useful for graphs with complex structures, where traditional force-directed layout algorithms may not produce the desired results.

This implementation of the ZMLT algorithm uses three layout algorithms - [BatchTree](https://github.com/cns-iu/map4sci-BatchTree), [CG](https://github.com/cns-iu/map4sci-CG), and [DELG](https://github.com/cns-iu/map4sci-DELG) - to generate layouts for the input graphs. These algorithms are known for their efficiency and ability to handle large graphs.

The ZMLT algorithm also provides semantic zoom functionality, which enables users to zoom in and out of the graph while maintaining the integrity of the graph structure. This functionality is especially useful when exploring large graphs that have multiple levels of detail.

This implementation of the ZMLT algorithm is designed to be user-friendly and easy to use. We hope that this project will be a useful resource for researchers, developers, and anyone who needs to visualize large graphs in an interactive and efficient way.

## Quick Start

Users of map4sci should use the `map4sci-project-template` as a template for their data projects. See <https://github.com/cns-iu/map4sci-project-template> for more information.

# Creating a Dataset

To create a dataset, follow these steps:

1. Create a folder with the name of the dataset inside `map4sci/data-processor/datasets`.
2. Inside the folder, create a `config.sh` file and a `network.dot` file.

`Note that you can create multiple datasets to be processed.`

## Configuring the Dataset

The config.sh file contains the configuration parameters for the dataset, which are used by the layout algorithm to generate the visualization. Here's a brief overview of the parameters:

All the `config.sh` files should follow the format as given in the [config.example.sh](data-processor/datasets/config.example.sh).

The `network.dot` file plays a crucial role in generating the graph layout, as it provides input graph data to the ZMLT algorithm. To generate a DOT file from JSON data with networkx, the JSON data should contain a list of nodes and a list of edges, where each node and edge has specific properties.

The nodes should have the following properties:

`id`: A numeric ID from 1 to N, where N is the total number of nodes in the graph.
`label`: A string label that represents the name or description of the node.
`weight`: A numeric value that represents the importance or significance of the node. Higher weights indicate more important nodes.

The edges should have the following properties:

`weight`: A numeric value that represents the strength or importance of the edge. Higher weights indicate stronger or more important edges.
`level`: An integer value typically from 1 to 7, which points to where we generate the levels ourselves in map4sci. This property represents the level or hierarchy of the edge, with lower levels indicating more important edges.
`source`: The numeric ID of the source node for the edge.
`target`: The numeric ID of the target node for the edge.

Creating and editing the network.dot file is recommended to be done by using NetworkX, a popular Python package for creating, manipulating, and analyzing graphs and networks. NetworkX provides a wide range of functionality for working with graphs, including algorithms for graph traversal, centrality, clustering, and more. Additionally, NetworkX provides a `write_dot` function that can be used to export the graph in the Graphviz DOT format, which can be used by the Algorithm. For Javascript libraries such as graphlib can be used to achieve the same to create or export the graph in the Graphviz DOT format. Its importance to the ZMLT algorithm implementation cannot be overstated, as it serves as the backbone for generating visually appealing and informative graph layouts.

for example refer [json2dot.py](https://github.com/cns-iu/obms/blob/main/map4sci/src/json2dot.py). This script takes a JSON file as input and generates a DOT file representing the network described in the JSON file. To use the script, simply run `python json2dot.py data.json network.dot` where data.json is the JSON file containing the network data and network.dot is the graph in the DOT format.

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

### Running using Docker

1. Install Docker.
2. Clone the Map4Sci repository: `git clone https://github.com/cns-iu/map4sci`.
3. `cd map4sci`.
4. Build the Docker image: `docker build -t map4sci`.
5. Start a Docker container from the image: `docker compose run -it map4sci`. This will run the run.sh script automatically.

You can include optional environment variables when starting the container to customize the behavior of the run.sh script. Here are the available options:

`CURRENT_DATASET`: The name of the dataset to use for the workflow. This should match one of the dataset names in the data directory. Default is Sample.
`CURRENT_VERSION`: The version of the dataset to use for the workflow.
`NODE_OPTIONS`: Additional Node.js options to pass to the node command.

### Running using Docker Compose

1. Install Docker
2. Clone the Map4Sci repository:`git clone https://github.com/cns-iu/map4sci`
3. `cd map4sci`
4. Run the following command to start the containers: `docker-compose up`
5. Wait for the containers to start up. This may take a few minutes, depending on your machine
6. It should now start running for the sample dataset in the repository

### Running using cwltool/cwl-runner

1. `pip install cwltool`: This command installs the CWL (Common Workflow Language) tool on your system. CWL is a standard for describing scientific workflows and provides a common language for specifying these workflows.
2. `cwl-runner map4sci.cwl map4sci-job.all-datasets.yml`: This command runs the workflow specified in the map4sci.cwl file with input specified in map4sci-job.all-datasets.yml. This workflow processes all the datasets and generates outputs for each of them.
3. `cwl-runner map4sci.cwl map4sci-job.combined-site.yml`: This command runs the workflow specified in the map4sci.cwl file with input specified in map4sci-job.combined-site.yml. This workflow processes all the datasets and combines the outputs to build a combined site.
4. `cwl-runner map4sci.cwl map4sci-job.single-dataset.yml`: This command runs the workflow specified in the map4sci.cwl file with input specified in map4sci-job.single-dataset.yml. This workflow processes a single dataset and generates outputs for it.

To customize these jobs, you can modify the input YAML files (map4sci-job.all-datasets.yml, map4sci-job.combined-site.yml, map4sci-job.single-dataset.yml) to specify your own inputs. You can also modify the map4sci.cwl file to change the workflow steps or add new steps. Additionally, you can modify the commands used to run the jobs depending on your environment and requirements.

You can include Optional Arguments as below,

`CWL_DEBUG`: Set to true to enable debug output from the CWL tool using `--debug`. Default is false.
`CWLTOOL_ARGS`: Additional arguments to pass to the CWL tool. Default is an empty string.

### Viewing Results

1. Run: `npx http-server -c-1 --cors=* data-processor/site`.
2. Once the server is running, you should be able to access your site by navigating to http://localhost:8080 in your web browser.

### 6. Serve Site

Run [90x-serve-site.sh](scripts/90x-serve-site.sh) to serve the site

    ./scripts/90x-serve-site.sh

## Details regarding the script files

| S. No. | Name                            | Description                                                                 | Input Location                                      | Output Location                        |
| ------ | ------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------- |
| 1      | `03-clear-old-files.sh`         | Deletes the old files located at `$OUT/site-data/`                          |                                                     | [$OUT](constants.sh)/site-data/        |
| 2      | `10-extract-layers.sh`          | Extracts the beginning layers for the algorithm                             | [$NETWORK](datasets/sample/config.sh)               | None                                   |
| 3      | `30-generate-clusters.sh`       | Creates clusters for the completed layout                                   | [$OUT](constants.sh)/impred/layer7.dot              | [$OUT](constants.sh)/clustered/map.svg |
| 4      | `40-convert-to-cytoscape.sh`    | Converts to the cytoscape files                                             | [$OUT](constants.sh)/impred/layer7.dot              | [$OUT](constants.sh)/clustered         |
| 4      | `40-convert-to-geojson.sh`      | Converts to the geojson files                                               | [$OUT](constants.sh)/impred/layer7.dot              | [$OUT](constants.sh)/clustered         |
| 4      | `41-tile-data.sh`               | it uses the Tippecanoe tool to generate MBTiles files for all GeoJSON files |                                                     | [$OUT](constants.sh)/clustered         |
| 5      | `50-build-site.sh`              | None                                                                        | [$OUT](constants.sh)/site-data/visualization        |
| 5      | `51x-build-all-dataset-maps.sh` | Builds all dataset                                                          | [$OUT](constants.sh)/site-data/visualization        |
| 6      | `60-measure-quality.sh`         | [$OUT](constants.sh)/impred/layer7.dot                                      | [$OUT](constants.sh)/quality_measurement/result.txt |
| 7      | `90-generate-site.sh`           |                                                                             |
| 8      | `90x-serve-site.sh`             |                                                                             |
| 9      | `99x-run-all-datasets.sh`       |                                                                             |

## Environment Variables Details

| S. No. | Name          | File                                   | Default Value                 |
| ------ | ------------- | -------------------------------------- | ----------------------------- |
| 1      | $OUT          | [constants.sh](constants.sh)           | `raw-data/$DATASET/$VERSION`  |
| 2      | $LAYERS_DIR   | [constants.sh](constants.sh)           | `$OUT/layers`                 |
| 3      | $NETWORK      | [config.sh](datasets/sample/config.sh) | `datasets/sample/network.dot` |
| 4      | $FORESTS_DIR  | [constants.sh](constants.sh)           | `$OUT/forests`                |
| 5      | $LAYOUT_DIR   | [constants.sh](constants.sh)           | `$OUT/layout`                 |
| 6      | SITE_DATA_DIR | [constants.sh](constants.sh)           | `$OUT/site-data`              |

## Credits

Developed as a collaboration between the [Cyberinfrastructure for Network Science Center at Indiana University](http://cns.iu.edu/) and [University of Arizona](https://www.arizona.edu/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
