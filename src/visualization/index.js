import MiniMap from "./mapboxgl-minimap.js"
console.log('index.js loaded')

/* @TODO:
    check for alledges, add to layer 9 if so <- script not working on alledges geojson files for some reason
    
    change color on hover? <- captured the hover event, can't access feature id for some reason

    make sure nodes are single point
    make sure edges go to the single point

    ------------------------------------------------------------------------------------------------------------
    near future: code will likely be transformed into TypeScript
    future: could create a scimap2020Map function which does zmltMap + more customization (like specific popups)
    future: push to NPM
*/

const blankStyle = {
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
let oldZoomIndex = 0;
let lines = [ // default in case lines isn't passed in the config object
    { 'level': 0   ,'zoom': 0 },
    { 'level': 1   ,'color': '#FFEBA1'  ,'width': 3.2   ,'opacity':1.0  ,'borderOpacity':1.0   ,'borderColor':'yellow'    ,'borderWidth': 1.2 ,'zoom': 3.0 },
    { 'level': 2   ,'color': '#FFEBA1'  ,'width': 3     ,'opacity':1.0  ,'borderOpacity':1.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1   ,'zoom': 5.5 },
    { 'level': 3   ,'color': '#F9D776'  ,'width': 2.7   ,'opacity':0.9  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1   ,'zoom': 6.5 },
    { 'level': 4   ,'color': '#c1b276'  ,'width': 2.7   ,'opacity':0.9  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1   ,'zoom': 7.0 },
    { 'level': 5   ,'color': '#94895f'  ,'width': 2.2   ,'opacity':0.8  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1   ,'zoom': 7.4 },
    { 'level': 6   ,'color': '#615b43'  ,'width': 2.2   ,'opacity':0.8  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1   ,'zoom': 7.7 },
    { 'level': 7   ,'color': 'gray'     ,'width': 2     ,'opacity':0.7  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1   ,'zoom': 8.0 },
    { 'level': 8   ,'color': 'gray'     ,'width': 2     ,'opacity':0.6  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1   ,'zoom': 8.2 },
    { 'level': 9   ,'color': 'gray'     ,'width': 1     ,'opacity':0.5  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1   ,'zoom': 9.0 }
];

window.zmltMap = function zmltMap(container, config) {
    if(config.lines) lines = config.lines;
    var map = new mapboxgl.Map({
        container: container,
        style: blankStyle,
        center: [-0, 0],
        zoom: 2,
        maxZoom: 10,
        minZoom: 2,
        renderWorldCopies: false,
        dragRotate: true
    });

    map.on('load', () => { loadMap(map, config)});
    return map;
}

function loadMap(map, config) {
    addMapSources(map, config.data);
    addMapClusters(map);
    addMapEdges(map, config.data);
    addMapNodes(map, config.nodeFontSizes);

    // Add zoom controls (without rotation controls) to the map.
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-left');

    if(config.minimapOptions.style === "blankStyle") config.minimapOptions.style = blankStyle;
    if(config.popups) addPopups(map, config.popups);
    map.addControl(new MiniMap(config.data, config.minimapOptions), 'bottom-left');
    map.on('zoom', () => updateMapFilters(map));

    // For Testing.
    map.on('moveend', function (e) { console.log('Zoom Level: ', map.getZoom()) });
}

function addMapSources(map, sources){
    map.addSource('edges_source', {
        'type': 'geojson',
        'data': sources.edges
    });
    map.addSource('nodes_source', {
        'type': 'geojson',
        'data': sources.nodes
    });
    map.addSource('cluster_source', {
        'type': 'geojson',
        'data': sources.clusters
    });
    map.addSource('cluster_boundary_source', {
        'type': 'geojson',
        'data': sources.clusterBoundaries
    });
    if(sources.allEdges){
        map.addSource('all_edges_source', {
            'type': 'geojson',
            'data': sources.allEdges
        });
    }
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

    // map.addLayer({
    //     "id": "cluster-labels",
    //     "type": "symbol",
    //     "minzoom": 2,
    //     "source": "cluster_source",
    //     "layout": {
    //         "text-field": "{label}",
    //         "text-font": [
    //             "Roboto Regular"
    //         ],
    //         "text-max-width": 5,
    //         "text-size": 15,
    //         "text-anchor": "center",
    //         "text-radial-offset": 1
    //     },
    //     "paint": {},
    // });

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

function addMapEdges(map, sources){
    const currentZoom = map.getZoom();
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
        "filter": [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]]
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
        "filter": [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]]
    });

    if(sources.allEdges){
        map.addLayer({
            "id": "all_edges",
            "type": "line",
            "source": "all_edges_source",
            "layout": {},
            "paint": {
                "line-color": ["get", "borderColor", ["at", lines.length-1, ["literal", lines]]],
                "line-width": ["get", "borderWidth", ["at", lines.length-1, ["literal", lines]]],
                "line-opacity": ["get", "borderOpacity", ["at", lines.length-1, ["literal", lines]]],
                "line-gap-width": ["get", "width", ["at", lines.length-1, ["literal", lines]]],
            },
            "minzoom": map.getMaxZoom()
        });
    }
}

function addMapNodes(map, nodeFontSizes){
    const currentZoom = map.getZoom();
    map.addLayer({
        "id": "node_labels",
        "type": "symbol",
        "source": "nodes_source",
        "layout": {
            "text-field": "{label}",
            "text-font": ["Open Sans Regular"],
            "text-size": ["at", ["get", "level"], ["literal", nodeFontSizes]],
            "text-variable-anchor": ["center", "right", "left"],
            "text-justify": "auto",
            "text-allow-overlap": true
        },
        "filter": [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]]
    });
    map.addLayer({
            "id": "nodes",
            "type": "circle",
            "source": "nodes_source",
            "layout": {},
            "paint": {
                "circle-color": "black",
                "circle-radius": 3
            },
            "filter": [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]]
    });
}

function addPopups(map, popups){
    popups.forEach(popup => {
        addPopupOnClick(map, popup.layer, popup.content)
    })
}

function addPopupOnClick(map, layer, content) {
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', layer, function (e) {
        let descriptionHTML = createPopulHTML(e.features[0].properties, content);
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

function createPopulHTML(description, content){
    let html = '';
    content.forEach((element, index) => {
        if(index % 2 == 0) html += element;
        else if(typeof(element) === 'string') html += description[element];
        else html += element[1](description[element[0]]);
    });

    return html;
}

function updateMapFilters(map){
    const currentZoom = map.getZoom();
    if(!zoomLevelChange(currentZoom)) return;
    map.setFilter('nodes',          [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]]);
    map.setFilter('node_labels',    [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]]);
    map.setFilter('edges_border',   [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]]);
    map.setFilter('edges',          [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", lines]]]]);
}

function zoomLevelChange(currentZoom){
    let currentIndex = findZoomIndex(currentZoom);
    if(currentIndex === oldZoomIndex) return false;
    oldZoomIndex = currentIndex;
    return true;
}

function findZoomIndex(zoom){
    for(let index = 0; index <= lines.length; index++){
        if(index == (lines.length-1)) return index;
        if(zoom >= lines[index]["zoom"] && zoom < lines[index + 1]["zoom"]) return index;
    }
}
