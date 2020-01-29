import MiniMap from "./mapboxgl-minimap.js"

import nodes from '../../raw-data/nodes.geojson'
import edges from '../../raw-data/edges.geojson'
import cluster from '../../raw-data/cluster.geojson'
import clusterBoundary from '../../raw-data/boundary.geojson'
console.log('index.js loaded')

var geo_data = { nodes, edges, cluster, clusterBoundary };

/* @TODO:
    check for alledges, add to layer 9 if so <- script not working on alledges geojson files for some reason
    navigation pane <- no built in way to accomplish this.
                    <- used github library as base, required modification. works pretty well
    proper pop ups <- method is built with basics, need design direction to finish
    change color on hover? <- captured the hover event, can't access feature id for some reason

    remove addLayer loops -> find built in mapbox ways to use the dictionaries
                        -> done. required tracking of zoom event and re-filtering layers. not sure of performance impact

    make sure nodes are single point
    -> edges go to the single point

    switch to using urls from files

    turn reusable code into api zmltMap(container, config) => Map
    config and zmltMap call go in index.html

    ------------------------------------------------------------------------------------------------------------
    near future: code will likely be transformed into TypeScript
    future: could create a scimap2020Map function which does zmltMap + more customization (like specific popups)
    future: push to NPM
*/

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

var map = new mapboxgl.Map({
    container: 'map',
    style: blankStyle,
    center: [-0, 0],
    zoom: 2,
    maxZoom: 10,
    minZoom: 2,
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

    map.on('zoomend', function (e) {
        // if(current zoom +- old zoom != different zoom level) return;
        map.setFilter('node_labels', [">=", map.getZoom(), ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]])
        map.setFilter('edges_border', [">=", map.getZoom(), ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]])  
        map.setFilter('edges', [">=", map.getZoom(), ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]])  
    });

    // Possible position values are 'bottom-left', 'bottom-right', 'top-left', 'top-right'
    map.addControl(new MiniMap(), 'bottom-left');

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

// GeoJson 'level' to Mapbox minzoom level.
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

const lines = [
    {},
    { 'level': 1    ,'color': '#FFEBA1'     ,'width': 3     ,'opacity':1.0    ,'borderOpacity':1.0   ,'borderColor':'#F9D776'    ,'borderWidth': 1, 'zoom': zoom[1] },
    { 'level': 2    ,'color': '#FFEBA1'     ,'width': 3     ,'opacity':1.0    ,'borderOpacity':1.0   ,'borderColor':'#F9D776'    ,'borderWidth': 1, 'zoom': zoom[2] },
    { 'level': 3    ,'color': '#F9D776'     ,'width': 2.5   ,'opacity':0.7    ,'borderOpacity':0.0   ,'borderColor':'#F9D776'    ,'borderWidth': 1, 'zoom': zoom[3] },
    { 'level': 4    ,'color': '#F9D776'     ,'width': 2.5   ,'opacity':0.7    ,'borderOpacity':0.0   ,'borderColor':'#F9D776'    ,'borderWidth': 1, 'zoom': zoom[4] },
    { 'level': 5    ,'color': 'gray'        ,'width': 2     ,'opacity':0.5    ,'borderOpacity':0.0   ,'borderColor':'#F9D776'    ,'borderWidth': 1, 'zoom': zoom[5] },
    { 'level': 6    ,'color': 'gray'        ,'width': 2     ,'opacity':0.5    ,'borderOpacity':0.0   ,'borderColor':'#F9D776'    ,'borderWidth': 1, 'zoom': zoom[6] },
    { 'level': 7    ,'color': 'gray'        ,'width': 1.5   ,'opacity':0.5    ,'borderOpacity':0.0   ,'borderColor':'#F9D776'    ,'borderWidth': 1, 'zoom': zoom[7] },
    { 'level': 8    ,'color': 'gray'        ,'width': 1.5   ,'opacity':0.5    ,'borderOpacity':0.0   ,'borderColor':'#F9D776'    ,'borderWidth': 1, 'zoom': zoom[8] },
];

function addMapEdges(map){
    map.addLayer({
        "id": "edges",
        "type": "line",
        "source": "edges_source",
        "layout": {},
        "paint": {
            "line-color": ["get", "color", ["at", ["get", "level"], ["literal", lines]]],
            "line-width": ["get", "width", ["at", ["get", "level"], ["literal", lines]]],
            "line-opacity":  ["get", "opacity", ["at", ["get", "level"], ["literal", lines]]]
        },
        "minzoom": 1,
        "filter": [">=", map.getZoom(), ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]]
    });
    map.addLayer({
        "id": "edges_border",
        "type": "line",
        "source": "edges_source",
        "layout": {},
        "paint": {
            "line-color": ["get", "borderColor", ["at", ["get", "level"], ["literal", lines]]],
            "line-width": ["get", "borderWidth", ["at", ["get", "level"], ["literal", lines]]],
            "line-opacity": ["get", "borderOpacity", ["at", ["get", "level"], ["literal", lines]]],
            "line-gap-width": ["get", "width", ["at", ["get", "level"], ["literal", lines]]],
        },
        "minzoom": 1,
        "filter": [">=", map.getZoom(), ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]]
    });
}

function addMapNodes(map){
    map.addLayer({
        "id": "node_labels",
        "type": "symbol",
        "source": "nodes_source",
        "layout": {
            "text-field": "{label}",
            "text-font": ["Open Sans Regular"],
            "text-size": ["to-number", ["get", "fontsize"]],
            //"text-variable-anchor": ["center", "top", "bottom", "right", "left", "top-right", "top-left", "bottom-right", "bottom-left"],
            "text-variable-anchor": ["center", "right", "left"],
            //"text-anchor": "center",
            "text-justify": "auto",
            "text-allow-overlap": true,
            //"text-radial-offset": 1,
        },
        "filter": [">=", map.getZoom(), ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]]
    });
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
}

function capitalizeString(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function zmltMap(container, config) {
    return 
}