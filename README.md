# map4sci

Implementation of a graph algorithm that uses a multi level tree based approach for interactive graph visualization with semantic zoom (ZMLT).

The research paper can be found [here.](https://arxiv.org/pdf/1906.05996.pdf)

This algorithm also uses `Impred` which is improved `Pred` algorithm and it can be found [here.](https://hal.inria.fr/inria-00605921/document)

### Change Log

See [Changelog](CHANGELOG.md)

### Getting Started

###### 1. Requirements

* python3
* python3-dev
* java8-jdk
* make
* g++


###### 2. Setup virtual environment
Run [00x-setup-venv.sh](scripts/00x-setup-venv.sh) </a> script to setup the virtual environment and install all the dependencies

	./00x-setup-env.sh

To activate the virtual environment:

	source .venv/bin/activate

For more information on the virtual environment refer to the python [documentation](https://docs.python.org/3/library/venv.html).

###### 3. Building
	
Build the libraries by running [01x-build-libs.sh](scripts/01x-build-libs.sh) script.

	./01x-build-libs.sh

###### 4. Input

Update the [env.sh](env.sh) file to point to the data source config. The default data source is

	datasets/sample/config.sh

The location of the input graph to the algorithm is path assigned to $NETWORK environment variable. This can be updated in config.sh file. The default value is:

	datasets/sample/network.dot 

This location can be changed by changing the value of $NETWORK environment variable in [config.sh](datasets/sample/config.sh)

All the `config.sh` files should follow the format as given in [config.example.sh](datasets/config.example.sh)

###### 5. Run

Run [run.sh](run.sh) file to run all the steps in the algorithm. This script runs all the scripts in the [scripts](scripts) folder one by one.

	./run.sh

###### 6. Serve Site

Run [90x-serve-site.sh](scripts/90x-serve-site.sh) to serve the site

	./90x-serve-site.sh

###### 7. Deploy to Github Pages

Run [99x-publish.sh](scripts/99x-publish.sh) to publish the site to the Github pages.

### Details regarding the script files

S. No. | Name |Description | Input Location | Output Location
--- | ---| --- | --- | ---
1 | `00x-setup-venv.sh` | This script creates the virtual environment and installs all dependencies. |  |
2 | `01x-build-libs.sh` | Builds the dependent libraries, e.g: Kmeans. | |
3 | `02-check-requirements.sh` | Checks if all the dependencies are installed for the algorithm to run end to end. |  |
4 | `03-clear-old-files.sh` | Deletes the old files located at `$OUT/site-data/` |  |[$OUT](constants.sh)/site-data/  
5 | `10-extract-layers.sh` |  Extracts the beginning layers for the algorithm | [$NETWORK](datasets/sample/config.sh) | None
6 | `20-extract-forest.sh` | Takes the current and next layer to return the set of trees (forest) | [$LAYERS_DIR](constants.sh) | [$FORESTS_DIR](constants.sh)$
7 | `21-layout-base-layer.sh` | Lays down the base layer of the graph | [$LAYERS_DIR](constants.sh)/layer0.dot |  [$LAYERS_DIR](constants.sh)/layer0.dot
8 | `22-remove-crossings-first-layer.sh` | Removes the crossing if they are present in the first layer | [$LAYERS_DIR](constants.sh)/layer0.dot | None
9 | `23-impred.sh` | Run impred | [$LAYERS_DIR](constants.sh)/layer0.dot | [$OUT](constants.sh)/impred/layer0.dot
10 | `24-impred-remove-label-overlap.sh` | Impred to remove the label overlap | [$OUT](constants.sh)/impred/layer0.dot | [$OUT](constants.sh)/impred/layer0.dot
11 | `26-all-layers-except-first.sh` | Adding subcomponents and running impred on all layers except the first one |  |
12 | `30-generate-clusters.sh` | Creates clusters for the completed layout | [$OUT](constants.sh)/impred/layer7.dot | [$OUT](constants.sh)/clustered/map.svg
13 | `40-convert-to-geojson.sh` | Converts to the geojson files | [$OUT](constants.sh)/impred/layer7.dot | [$OUT](constants.sh)/clustered
14 | `50-build-map-page.sh` | None |  [$OUT](constants.sh)/site-data/visualization
15 | `60-measure-quality.sh` | [$OUT](constants.sh)/impred/layer7.dot | [$OUT](constants.sh)/quality_measurement/result.txt
16 | `90-generate-site.sh` |  |
17 | `90x-serve-site.sh` |  |  
18 | `99x-publish.sh` |  |

### Environment Variables Details

S. No. | Name | File | Default Value
--- | --- | --- | ---|
1 | $OUT | [constants.sh](constants.sh) | `raw-data/$DATASET/$VERSION`
2 | $LAYERS_DIR |[constants.sh](constants.sh) | `$OUT/layers`
3 | $NETWORK | [config.sh](datasets/sample/config.sh) | `datasets/sample/network.dot`
4 | $FORESTS_DIR | [constants.sh](constants.sh)| `$OUT/forests`

### Credits

Developed as a collaboration between the [Cyberinfrastructure for Network Science Center at Indiana University](http://cns.iu.edu/) and [University of Arizona](https://www.arizona.edu/)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
