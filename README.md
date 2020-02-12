# map4sci

### How to run?

Use <a href="https://github.com/cns-iu/map4sci/blob/workflow/run.sh">run.sh </a> file to run all the steps in the algorithm. This script runs all the scripts in the `scripts` folder one by one.

### Details regarding each of the script files

S. No. | Name |Description | Input Location | Output Location
--- | ---| --- | --- | ---
1 | `00x-setup-venv.sh` | This script creates the virtual environment and installs all dependencies. |  | 
2 | `01x-build-libs.sh` | Builds the dependent libraries, e.g: Kmeans. | | 
3 | `02-check-requirements.sh` | Checks if all the dependencies are installed for the algorithm to run end to end. |  | 
4 | `03-clear-old-files.sh` | Deletes the old files located at `$OUT/site-data/` |  | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$OUT</a>/site-data/  
5 | `10-extract-layers.sh` |  Extracts the beginning layers for the algorithm | <a href="https://github.com/cns-iu/map4sci/blob/develop/datasets/sample/config.sh">$NETWORK</a> | None
6 | `20-extract-forest.sh` | Takes the current and next layer to return the set of trees (forest) | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$LAYERS_DIR</a> | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh> $FORESTS_DIR </a>
7 | `21-layout-base-layer.sh` | Lays down the base layer of the graph | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$LAYERS_DIR </a>/layer0.dot |  <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$LAYERS_DIR</a>/layer0.dot"
8 | `22-remove-crossings-first-layer.sh` | Removes the crossing if they are present in the first layer | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$LAYERS_DIR </a>/layer0.dot" | None
9 | `23-impred.sh` | Run impred | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$LAYERS_DIR </a>/layer0.dot | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$OUT</a>/impred/layer0.dot
10 | `24-impred-remove-label-overlap.sh` | Impred to remove the label overlap | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$OUT</a>/impred/layer0.dot | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$OUT</a>/impred/layer0.dot
11 | `25-shorten-leaves.sh` | TODO: Check if USED |  | 
12 | `26-all-layers-except-first.sh` | Adding subcomponents and running impred on all layers except the first one |  | 
13 | `30-generate-clusters.sh` | Creates clusters for the completed layout | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$OUT</a>/impred/layer7.dot | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$OUT</a>/clustered/map.svg
14 | `40-convert-to-geojson.sh` | Converts to the geojson files | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$OUT</a>/impred/layer7.dot | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$OUT</a>/clustered
15 | `50-build-map-page.sh` | None |  <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$OUT</a>/site-data/visualization
16 | `60-measure-quality.sh` | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$OUT</a>/impred/layer7.dot | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>$OUT</a>/quality_measurement/result.txt
17 | `90-generate-site.sh` |  | 
18 | `90x-serve-site.sh` |  |  
19 | `99x-publish.sh` |  | 

### Environment Variables Details

S. No. | Name | File | Default Value
--- | --- | --- | ---|
1 | $OUT | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>constants.sh</a> | `raw-data/$DATASET/$VERSION`
2 | $LAYERS_DIR |<a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh>constants.sh </a> | `$OUT/layers`
3 | $NETWORK | <a href="https://github.com/cns-iu/map4sci/blob/develop/datasets/sample/config.sh">config.sh</a> | `datasets/sample/network.dot`
4 | $FORESTS_DIR | <a href=https://github.com/cns-iu/map4sci/blob/develop/constants.sh> constants.sh </a>| `$OUT/forests`






