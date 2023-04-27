# map4sci

## Introduction

Welcome to the implementation of the graph algorithm that uses a multi-level tree-based approach for interactive graph visualization with semantic zoom, also known as ZMLT. This project is based on a research paper which can be found at the link provided in the project description.

The ZMLT algorithm is designed to provide an efficient and interactive way to visualize large graphs by using a multi-level tree-based approach. This approach is particularly useful for graphs with complex structures, where traditional force-directed layout algorithms may not produce the desired results.

This implementation of the ZMLT algorithm uses three layout algorithms - [BatchTree](https://github.com/cns-iu/map4sci-BatchTree), [CG](https://github.com/cns-iu/map4sci-CG), and [DELG](https://github.com/cns-iu/map4sci-DELG) - to generate layouts for the input graphs. These algorithms are known for their efficiency and ability to handle large graphs.

The ZMLT algorithm also provides semantic zoom functionality, which enables users to zoom in and out of the graph while maintaining the integrity of the graph structure. This functionality is especially useful when exploring large graphs that have multiple levels of detail.

This implementation of the ZMLT algorithm is designed to be user-friendly and easy to use. We hope that this project will be a useful resource for researchers, developers, and anyone who needs to visualize large graphs in an interactive and efficient way.

## Quick Start

Users of map4sci should use the `map4sci-project-template` as a template for their data projects. See <https://github.com/cns-iu/map4sci-project-template> for more information.

## Change Log

See [Changelog](CHANGELOG.md)

## Getting Started

### 1. Requirements

- python3
- python3-dev
- java8-jdk
- make
- g++

### 2. Creating a Dataset

To create a dataset, follow these steps:

1. Create a folder with the name of the dataset inside `map4sci/data-processor/datasets`.
2. Inside the folder, create a `config.sh` file and a `network.dot` file.

`Note that you can create multiple datasets to be processed.`

### 2.1 Configuring the Dataset

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

Creating and editing the network.dot file is recommended to be done by using NetworkX, a popular Python package for creating, manipulating, and analyzing graphs and networks. NetworkX provides a wide range of functionality for working with graphs, including algorithms for graph traversal, centrality, clustering, and more. Additionally, NetworkX provides a [write_dot](https://networkx.org/documentation/stable/reference/generated/networkx.drawing.nx_agraph.write_dot.html) function that can be used to export the graph in the Graphviz DOT format, which can be used by the Algorithm. For Javascript libraries such as graphlib can be used to achieve the same to create or export the graph in the Graphviz DOT format. Its importance to the ZMLT algorithm implementation cannot be overstated, as it serves as the backbone for generating visually appealing and informative graph layouts.

For an example refer [json2dot.py](https://github.com/cns-iu/obms/blob/main/map4sci/src/json2dot.py). This script takes a JSON file as input and generates a DOT file representing the network described in the JSON file. To use the script, simply run `python json2dot.py data.json network.dot` where data.json is the JSON file containing the network data and network.dot is the graph in the DOT format.

`Note: it's recommended to use the write_dot method provided by the AGraph class instead of the write_dot method provided by the pydot library.`

### 3. Running Locally

Run [run.sh](data-processor/run.sh) file to run all the steps in the algorithm. To run all the scripts in the scripts folder in numerical order from 00-.sh to 99-.sh (skipping scripts not of the form NN-*.sh), you can execute the run.sh script located in the data-processor directory. The run.sh script can be executed by running the following command in the terminal from the data-processor directory:

    `cd data-processor`
    `./run.sh`

finds all scripts in the scripts folder that match the pattern NN-*.sh, sorts them numerically, and then executes them in order. This allows you to add custom scripts to modify the behavior of the algorithm and have them executed in the appropriate order.

`Note: Make sure that all custom scripts you add to the scripts folder are named in the form NN-*.sh, where NN is a two-digit number (e.g., 01-myscript.sh) to ensure they are executed in the correct order.`

### Running using Docker

- #### Requirements

  - [Docker](https://docs.docker.com/engine/install/)
  - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


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

- #### Requirements

  - [Docker](https://docs.docker.com/engine/install/)
  - [Docker Compose](https://docs.docker.com/compose/install/)
  - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

1. Install Docker
2. Clone the Map4Sci repository:`git clone https://github.com/cns-iu/map4sci`
3. `cd map4sci`
4. Run the following command to start the containers: `docker-compose up`
5. Wait for the containers to start up. This may take a few minutes, depending on your machine
6. It should now start running for the sample dataset in the repository

To customize the Map4Sci application running in Docker Compose, you can modify the configuration files and Docker Compose files in the map4sci directory. Here are some steps to help you get started:

1. Change the configuration files: The docker-compose.yml file in the map4sci directory contains the Docker Compose configuration for the application. You can modify this file to change the Docker container settings, such as the port mapping, container name, or environment variables.
2. Add custom data: To add your own data to the application, you can place the data files in a directory on your local machine and then mount that directory as a volume in the Docker container. To do this, modify the docker-compose.yml file to add a volumes section under the map4sci service. For example, if you have a directory called my_data on your local machine, you can add the following line to the docker-compose.yml file: `volumes: - ./my_data:/app/data`. This will mount the my_data directory on your local machine as a volume at the /app/data directory inside the container.
3. Modify the application code: If you need to make more substantial changes to the application code, you can modify the code files in the scripts directory. Once you have made your changes, you can rebuild the Docker image using the `docker-compose build` command, and then start the containers again using `docker-compose up`.

### Running using cwltool/cwl-runner

- #### Requirements

  - [Python 3.x (version 3.5 or later)](https://www.python.org/downloads/)
  - [pip (Python package installer)](https://pip.pypa.io/en/stable/installation/)
  - cwltool (Common Workflow Language tool) `python -m pip install cwl-runner cwltool`

1. `pip install cwltool`: This command installs the CWL (Common Workflow Language) tool on your system. CWL is a standard for describing scientific workflows and provides a common language for specifying these workflows.
2. `cwl-runner map4sci.cwl map4sci-job.all-datasets.yml`: This command runs the workflow specified in the map4sci.cwl file with input specified in map4sci-job.all-datasets.yml. This workflow processes all the datasets and generates outputs for each of them.
3. `cwl-runner map4sci.cwl map4sci-job.combined-site.yml`: This command runs the workflow specified in the map4sci.cwl file with input specified in map4sci-job.combined-site.yml. This workflow processes all the datasets and combines the outputs to build a combined site.
4. `cwl-runner map4sci.cwl map4sci-job.single-dataset.yml`: This command runs the workflow specified in the map4sci.cwl file with input specified in map4sci-job.single-dataset.yml. This workflow processes a single dataset and generates outputs for it.

To customize these jobs, you can modify the input YAML files (map4sci-job.all-datasets.yml, map4sci-job.combined-site.yml, map4sci-job.single-dataset.yml) to specify your own inputs. You can also modify the map4sci.cwl file to change the workflow steps or add new steps. Additionally, you can modify the commands used to run the jobs depending on your environment and requirements.

You can include Optional Arguments as below,

`CWL_DEBUG`: Set to true to enable debug output from the CWL tool using `--debug`. Default is false.
`CWLTOOL_ARGS`: Additional arguments to pass to the CWL tool. Default is an empty string.

### Viewing the Results

1. Run: `npx http-server -c-1 --cors=* data-processor/site`.
2. Once the server is running, you should be able to access your site by navigating to http://localhost:8080 in your web browser.



## Details regarding the script files

| S. No. | Name                            | Description                                                                                                                                                                                        | Input Location                          | Output Location                                     |
| ------ | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | --------------------------------------------------- |
| 1      | `03-clear-old-files.sh`         | Deletes the old files located at `$OUT/site-data/`                                                                                                                                                 |                                         | [$OUT](constants.sh)/site-data/                     |
| 2      | `10-extract-layers.sh`          | Extracts the beginning layers for the algorithm                                                                                                                                                    | [$NETWORK](datasets/sample/config.sh)   | None                                                |
| 3      | `30-generate-clusters.sh`       | Creates clusters for the completed layout                                                                                                                                                          | [$OUT](constants.sh)/impred/layer7.dot  | [$OUT](constants.sh)/clustered/map.svg              |
| 4      | `40-convert-to-cytoscape.sh`    | Converts to the cytoscape files                                                                                                                                                                    | [$OUT](constants.sh)/impred/layer7.dot  | [$OUT](constants.sh)/clustered                      |
| 5      | `40-convert-to-geojson.sh`      | Converts to the geojson files                                                                                                                                                                      | [$OUT](constants.sh)/impred/layer7.dot  | [$OUT](constants.sh)/clustered                      |
| 6      | `41-tile-data.sh`               | It uses the Tippecanoe tool to generate MBTiles files for all GeoJSON files                                                                                                                        |                                         | [$OUT](constants.sh)/clustered                      |
| 7      | `50-build-site.sh`              | Checks if the required dependencies are installed, and builds the website using npm                                                                                                                |                                         |
| 8      | `51x-build-all-dataset-maps.sh` | Generates the index.json file for all available datasets, and copies the necessary files to the site-data directory for each dataset.                                                              | [$OUT](constants.sh)/site-data/datasets |
| 9      | `60-measure-quality.sh`         | Script to perform network quality measurement on a given network file.                                                                                                                             | [$OUT](constants.sh)/impred/layer7.dot  | [$OUT](constants.sh)/quality_measurement    |
| 10     | `90-generate-site.sh`           | Copies the clustered GeoJSON and CX files to the site-data directory, copies the website assets to the site directory, and creates an index.json file for the dataset if it doesn't already exist. | [$OUT](constants.sh)/site-data/         | [$OUT](constants.sh)/site-data/datasets/            |
| 11     | `90x-serve-site.sh`             | Starts an HTTP server for local development, serving the files in the $SITE_DIR directory.                                                                                                         | [$SITE_DIR] (constants.sh)              |          |
| 12     | `99x-run-all-datasets.sh`       | Script to loop through all datasets in DATASETS_DIR, run Map4Sci for each dataset if not already completed, then generate site and build all dataset maps.                                         | [$DATASETS_DIR] (constants.sh)          | [$OUT](constants.sh)/raw-data/dataset/version/      |

## Environment Variables Details

| S. No. | Name           | File                                   | Default Value                                 |
| ------ | -------------- | -------------------------------------- | --------------------------------------------- |
| 1      | $OUT           | [constants.sh](constants.sh)           | `raw-data/$DATASET/$VERSION`                  |
| 2      | $LAYERS_DIR    | [constants.sh](constants.sh)           | `$OUT/layers`                                 |
| 3      | $NETWORK       | [config.sh](datasets/sample/config.sh) | `datasets/sample/network.dot`                 |
| 5      | $LAYOUT_DIR    | [constants.sh](constants.sh)           | `$OUT/layout`                                 |
| 6      | $SITE_DATA_DIR | [constants.sh](constants.sh)           | `$OUT/site-data`                              |
| 7      | $RAW_DATA_DIR  | [constants.sh](constants.sh)           | `$raw-data`                                   |
| 8      | $DATASETS_DIR  | [constants.sh](constants.sh)           | `$datasets`                                   |
| 9      | $NODE_OPTIONS  | [constants.sh](constants.sh)           | `$NODE_OPTIONS:="--max-old-space-size=24000"` |

## Credits

Developed as a collaboration between the [Cyberinfrastructure for Network Science Center at Indiana University](http://cns.iu.edu/) and [University of Arizona](https://www.arizona.edu/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
