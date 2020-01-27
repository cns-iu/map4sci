import nodes from '../../raw-data/sample/2020-01-06/clustered/nodes.geojson'
import edges from '../../raw-data/sample/2020-01-06/clustered/edges.geojson'
import cluster from '../../raw-data/sample/2020-01-06/clustered/cluster.geojson'
import clusterBoundary from '../../raw-data/sample/2020-01-06/clustered/boundary.geojson'

console.log('index.js loaded')

/* @TODO:
    check for alledges, add to layer 9 if so
    navigation pane <- no built in way to accomplish this.
    proper pop ups <- method is built with basics, need design direction to finish

    change color on hover? <- captured the hover event, can't access feature id for some reason
*/

var geo_data = { nodes, edges, cluster, clusterBoundary };

var blankStyle = {
    "version": 8,
    "name": "Blank",
    "center": [
        0,
        0
    ],
    "zoom": 0,
    "sources": {},
    "sprite": "https://cdn.jsdelivr.net/gh/lukasmartinelli/osm-liberty@gh-pages/sprites/osm-liberty",
    "glyphs": "https://cdn.jsdelivr.net/gh/orangemug/font-glyphs@gh-pages/glyphs/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "rgba(255,255,255,1)"
            }
        }
    ],
    "id": "blank"
};

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRwaGlsbGlwczIwMTciLCJhIjoiY2s1NDNvaHdrMGZidDNobHFkdHB5MG1wcCJ9.NG8JyVzQuA6pP9UfZhlubg';
var map = new mapboxgl.Map({
    container: 'map',
    style: blankStyle,
    center: [-0, 0],
    zoom: 1,
    renderWorldCopies: false,
    dragRotate: false
});

map.on('load', () => {
    addMapSources(map);
    addMapClusters(map);
    addMapEdges(map);
    addMapNodes(map);

    // Add zoom controls (without rotation controls) to the map in the top-left position.
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-left');

    // For Testing.
    map.on('moveend', function (e) { console.log('Zoom Level: ', map.getZoom()) });

    addPopupOnClick(map, 'nodes', 'label');
    addPopupOnClick(map, 'edges', 'label');
});

function addPopupOnClick(map, layer, field) {
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', layer, function (e) {
        let descriptionHTML = createPopulHTML(e.features[0].properties, field);
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(descriptionHTML)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', layer, function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', layer, function () {
        map.getCanvas().style.cursor = '';
    });
}

function createPopulHTML(description, field){
    return `
        <p class="popup-label">${capitalizeString(field)}</p>
        <p>${description[field]}</p>
    `
}

function capitalizeString(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function addMapSources(map){
    map.addSource('edges_source', {
        'type': 'geojson',
        'data': geo_data.edges
    });
    map.addSource('nodes_source', {
        'type': 'geojson',
        'data': geo_data.nodes
    });
    map.addSource('cluster_source', {
        'type': 'geojson',
        'data': geo_data.cluster
    });
    map.addSource('cluster_boundary_source', {
        'type': 'geojson',
        'data': geo_data.clusterBoundary
    });
}

function addMapClusters(map){
    map.addLayer({
        "id": "cluster",
        "type": "fill",
        "source": "cluster_source",
        "layout": {},
        "paint": {
            "fill-color": ['get', 'fill'],
            "fill-opacity": 0.7,
            "fill-outline-color": ['get', 'stroke']
        },
    });

    map.addLayer({
        "id": "cluster-labels",
        "type": "symbol",
        "minzoom": 2,
        "source": "cluster_source",
        "layout": {
            "text-field": "{label}",
            "text-font": [
                "Roboto Regular"
            ],
            "text-max-width": 5,
            "text-size": 15,
            "text-anchor": "center",
            "text-radial-offset": 1
        },
        "paint": {},
    });

    map.addLayer({
        "id": "cluster_boundary",
        "type": "line",
        "minzoom": 3,
        "source": "cluster_boundary_source",
        "layout": {},
        "paint": {
            "line-color": ['get', 'stroke'],
            "line-width": 0.5,
            "line-opacity": 0.8
        },
    });
}

const zoom = {
    1: 3,
    2: 5.5,
    3: 6.5,
    4: 7,
    5: 7.4,
    6: 7.7,
    7: 8,
    8: 8.2,
    9: 8.5
}

function addMapEdges(map){
    const lines = [
        { 'level': 1    ,'color': '#FFEBA1'     ,'width': 3     ,'opacity':1.0    ,'borderColor':'#F9D776'    ,'borderWidth': 1 },
        { 'level': 2    ,'color': '#FFEBA1'     ,'width': 3     ,'opacity':1.0    ,'borderColor':'#F9D776'    ,'borderWidth': 1 },
        { 'level': 3    ,'color': '#F9D776'     ,'width': 2.5   ,'opacity':0.7 },
        { 'level': 4    ,'color': '#F9D776'     ,'width': 2.5   ,'opacity':0.7 },
        { 'level': 5    ,'color': 'gray'        ,'width': 2     ,'opacity':0.5 },
        { 'level': 6    ,'color': 'gray'        ,'width': 2     ,'opacity':0.5 },
        { 'level': 7    ,'color': 'gray'        ,'width': 1.5   ,'opacity':0.5 },
        { 'level': 8    ,'color': 'gray'        ,'width': 1.5   ,'opacity':0.5 }
    ]

    lines.forEach((line) => {
        map.addLayer({
            "id": "edges_" + line.level,
            "type": "line",
            "source": "edges_source",
            "layout": {},
            "paint": {
                "line-color": line.color,
                "line-width": line.width,
                "line-opacity": line.opacity
            },
            "filter": ['==', "level", line.level],
            "minzoom": zoom[line.level],
        });

        if(line.borderWidth){
            map.addLayer({
                "id": "edges_border_" + line.level,
                "type": "line",
                "source": "edges_source",
                "layout": {},
                "paint": {
                    "line-color": line.borderColor,
                    "line-width": line.borderWidth,
                    "line-opacity": line.opacity,
                    "line-gap-width": line.width
                },
                "minzoom": zoom[line.level],
                "filter": ['==', "level", line.level]
            });
        }
    });
}

function addMapNodes(map){
    for(let level = 1; level <= 9; level++) {
        // map.addLayer({
        //     "id": "nodes_" + level,
        //     "type": "circle",
        //     "minzoom": zoom[level],
        //     "source": "nodes_source",
        //     "layout": {},
        //     "paint": {
        //         "circle-color": "black",
        //         "circle-radius": 3
        //     },
        //     "filter": ["==", "level", level]
        // });

        map.addLayer({
            "id": "node_labels_" + level,
            "type": "symbol",
            "minzoom": zoom[level],
            "source": "nodes_source",
            "layout": {
                "text-field": "{label}",
                "text-font": ["Open Sans Regular"],
                "text-size": ["to-number", ["get", "fontsize"]],
                //"text-variable-anchor": ["top", "bottom", "right", "left", "top-right", "top-left", "bottom-right", "bottom-left"],
                "text-anchor": "center",
                "text-justify": "center",
                "text-allow-overlap": true,
                //"text-radial-offset": .25,
            },
            "filter": ["==", "level", level]
        });
    }
}
