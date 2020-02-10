import MiniMap from "./mapboxgl-minimap.js";
const mapboxgl = window.mapboxgl as any;

/* @TODO:
    use node size when it get's added to workflow
    ------------------------------------------------------------------------------------------------------------
    future: could create a scimap2020Map function which does zmltMap + more customization (like specific popups)
    future: push to NPM
*/
interface Edge {
    level: number,
    zoom: number,
    color: string,
    width: number,
    opacity: number,
    borderOpacity: number,
    borderColor: string,
    borderWidth: number
}
interface Node {
    level: number,
    zoom: number,
    fontSize: number
}

type ZoomLevel = [number, number, number];
interface MiniMapOptions {
    id: number | string,
    width: string,
    height: string,
    style: mapboxgl.Style | string,
    center: [number, number],
    zoom: number,
    containerStyles: string,
    zoomAdjust: null | Function,
    zoomLevels: ZoomLevel[],
    edgeColor: string,
    edgeWidth: number,
    edgeOpacity: number,
    fillColor: string,
    fillOpacity: number,
    dragPan: boolean,
    scrollZoom: boolean,
    boxZoom: boolean,
    dragRotate: boolean,
    keyboard: boolean,
    doubleClickZoom: boolean,
    touchZoomRotate: boolean
}

type PopupContent = (string | [string, Function])[];
interface Popup {
    layer: string,
    content: PopupContent
}
interface Sources {
    nodes: string,
    edges: string,
    clusters: string,
    clusterBoundaries: string,
    allEdges?: string
}
interface Configuration {
    sources: Sources,
    edges: Edge[],
    nodes: Node[],
    popups?: Popup[],
    minimapOptions?: any
}

const blankStyle: mapboxgl.Style = {
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
    ]
};
let textOverlapEnabled: boolean = false;
let oldEdgeZoomIndex: number = 0;
let oldNodeZoomIndex: number = 0;
let hoverEdgeID: number = null;
let hoverNodeID: number|string = null;
let nodes: Node[] = [
    { 'level':0     ,'zoom':0.0   ,'fontSize':0  },
    { 'level':1     ,'zoom':2.3   ,'fontSize':20 },
    { 'level':2     ,'zoom':4.5   ,'fontSize':18 },
    { 'level':3     ,'zoom':5.0   ,'fontSize':18 },
    { 'level':4     ,'zoom':5.5   ,'fontSize':16 },
    { 'level':5     ,'zoom':6.0   ,'fontSize':16 },
    { 'level':6     ,'zoom':6.2   ,'fontSize':14 },
    { 'level':7     ,'zoom':6.5   ,'fontSize':14 },
    { 'level':8     ,'zoom':6.7   ,'fontSize':12 },
    { 'level':9     ,'zoom':7.5   ,'fontSize':12 },
];
let edges: Edge[] = [
    { 'level': 0   ,'zoom': 0       ,'color': ''         ,'width': 0     ,'opacity':0.0  ,'borderOpacity':0.0   ,'borderColor':''          ,'borderWidth': 0    },
    { 'level': 1   ,'zoom': 1.5     ,'color': '#FFEBA1'  ,'width': 3.2   ,'opacity':1.0  ,'borderOpacity':1.0   ,'borderColor':'yellow'    ,'borderWidth': 1.2  },
    { 'level': 2   ,'zoom': 3.5     ,'color': '#FFEBA1'  ,'width': 3     ,'opacity':1.0  ,'borderOpacity':1.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1    },
    { 'level': 3   ,'zoom': 4.5     ,'color': '#F9D776'  ,'width': 2.7   ,'opacity':0.9  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1    },
    { 'level': 4   ,'zoom': 5.0     ,'color': '#c1b276'  ,'width': 2.7   ,'opacity':0.9  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1    },
    { 'level': 5   ,'zoom': 5.4     ,'color': '#94895f'  ,'width': 2.2   ,'opacity':0.8  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1    },
    { 'level': 6   ,'zoom': 5.7     ,'color': '#615b43'  ,'width': 2.2   ,'opacity':0.8  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1    },
    { 'level': 7   ,'zoom': 6.0     ,'color': 'gray'     ,'width': 2     ,'opacity':0.7  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1    },
    { 'level': 8   ,'zoom': 6.2     ,'color': 'gray'     ,'width': 2     ,'opacity':0.6  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1    },
    { 'level': 9   ,'zoom': 7.0     ,'color': 'gray'     ,'width': 1     ,'opacity':0.5  ,'borderOpacity':0.0   ,'borderColor':'#F9D776'   ,'borderWidth': 1    }
];

globalThis.ZmltMap = class ZmltMap {
    container?: string;
    config: Configuration;
    sources: Sources;
    edges: Edge[];
    nodes: Node[];
    popups: Popup[];
    minimapOptions: MiniMapOptions;
    map: mapboxgl.Map;

    constructor(config:Configuration){
        this.config = config;
        this.sources = config.sources;
        this.edges = config.edges ? config.edges : edges;
        this.nodes = config.nodes ? config.nodes : nodes;
        this.popups = config.popups ? config.popups : [];
        this.minimapOptions = config.minimapOptions;

        if(this.minimapOptions.style === "blankStyle") this.minimapOptions.style = blankStyle;
    }

    load(container:string){
        this.container = container;
        this.map = new mapboxgl.Map({
            container: this.container,
            style: blankStyle,
            center: [-0, 0],
            zoom: 2,
            maxZoom: 10,
            minZoom: 1,
            renderWorldCopies: false,
            dragRotate: true
        });
        this.map.on('load', () => { loadMap(this.map, this.config)});
    }
}

function loadMap(map: mapboxgl.Map, config: Configuration) {
    addMapSources(map, config.sources);
    addMapClusters(map);
    addMapEdges(map, config);
    addEdgeHover(map);
    addMapNodes(map, config);
    addNodeHover(map);
    

    // Add zoom controls (without rotation controls) to the map.
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-left');

    if(config.minimapOptions.style === "blankStyle") config.minimapOptions.style = blankStyle;
    if(config.popups) addPopups(map, config.popups);

    const miniMap: mapboxgl.IControl = new MiniMap(config.sources, config.minimapOptions);
    map.addControl(miniMap, 'bottom-left');
    map.addControl(new mapboxgl.FullscreenControl());
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

function addMapClusters(map: mapboxgl.Map){
    map.addLayer({
        "id": "cluster",
        "type": "fill",
        "source": "cluster_source",
        "layout": {},
        "paint": {
            "fill-color": ['get', 'fill'],
            "fill-opacity": 0.7,
            "fill-outline-color": ['get', 'stroke']
        }
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

function addMapEdges(map: mapboxgl.Map, config: Configuration){
    if(config.edges) edges = config.edges;
    const currentZoom: number = map.getZoom();
    map.addLayer({
        "id": "edges",
        "type": "line",
        "source": "edges_source",
        "layout": {},
        "paint": {
            "line-color": ["case",
                ['boolean', ['feature-state', 'hover'], false], "red",
                ["get", "color", ["at", ["get", "level"], ["literal", edges]]]
            ],
            "line-width": ["get", "width", ["at", ["get", "level"], ["literal", edges]]],
            "line-opacity":  ["get", "opacity", ["at", ["get", "level"], ["literal", edges]]]
        },
        "filter": [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", edges]]]]
    });
    map.addLayer({
        "id": "edges_border",
        "type": "line",
        "source": "edges_source",
        "layout": {},
        "paint": {
            "line-color": ["get", "borderColor", ["at", ["get", "level"], ["literal", edges]]],
            "line-width": ["get", "borderWidth", ["at", ["get", "level"], ["literal", edges]]],
            "line-opacity": ["get", "borderOpacity", ["at", ["get", "level"], ["literal", edges]]],
            "line-gap-width": ["get", "width", ["at", ["get", "level"], ["literal", edges]]],
        },
        "filter": [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", edges]]]]
    });

    if(config.sources.allEdges){
        map.addLayer({
            "id": "all_edges",
            "type": "line",
            "source": "all_edges_source",
            "layout": {},
            "paint": {
                "line-color": ["get", "borderColor", ["at", edges.length-1, ["literal", edges]]],
                "line-width": ["get", "borderWidth", ["at", edges.length-1, ["literal", edges]]],
                "line-opacity": ["get", "borderOpacity", ["at", edges.length-1, ["literal", edges]]],
                "line-gap-width": ["get", "width", ["at", edges.length-1, ["literal", edges]]],
            },
            "minzoom": map.getMaxZoom()
        });
    }
}

function addMapNodes(map:mapboxgl.Map, config: Configuration){
    if(config.nodes) nodes = config.nodes;
    const currentZoom: number = map.getZoom();
    const nodeLabelsLayer: mapboxgl.Layer | any = {
        "id": "node_labels",
        "type": "symbol",
        "source": "nodes_source",
        "layout": {
            "text-field": "{label}",
            "text-font": ["Open Sans Regular"],
            "text-size": ["get", "fontSize", ["at", ["get", "level"], ["literal", nodes]]],
            "text-variable-anchor": ["top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right", "left", "right", "center"],
            "text-radial-offset": 0.25,
            "text-justify": "auto",
            "text-allow-overlap": false
        },
        "filter": [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", nodes]]]]
    }
    const nodesLayer: mapboxgl.Layer = {
        "id": "nodes",
        "type": "circle",
        "source": "nodes_source",
        "layout": {},
        "paint": {
            "circle-color": ["case",
            ['boolean', ['feature-state', 'hover'], false], "red",
            "black"
        ],
            "circle-radius": 3
        },
        "filter": [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", edges]]]]
    };
    map.addLayer(nodeLabelsLayer);
    map.addLayer(nodesLayer);
}

function addEdgeHover(map){
    map.on('mousemove', 'edges', function(e) {
        if (e.features.length > 0) {
            if (hoverEdgeID) {
                map.setFeatureState({
                    source: 'edges_source', id: hoverEdgeID },
                    { hover: false }
                );
            }
            hoverEdgeID = e.features[0].id;
            map.setFeatureState(
                    { source: 'edges_source', id: hoverEdgeID },
                    { hover: true }
                );
            }
    });
     
    map.on('mouseleave', 'edges', function() {
        if (hoverEdgeID) {
            map.setFeatureState(
                { source: 'edges_source', id: hoverEdgeID },
                { hover: false }
            );
        }
        hoverEdgeID = null;
    });
}

function addNodeHover(map:mapboxgl.Map){
    map.on('mousemove', 'nodes', function(e) {
        if (e.features.length > 0) {
            if (hoverNodeID) {
                map.setFeatureState({
                    source: 'nodes_source', id: hoverNodeID },
                    { hover: false }
                );
            }
            hoverNodeID = e.features[0].id;
            map.setFeatureState(
                    { source: 'nodes_source', id: hoverNodeID },
                    { hover: true }
                );
            }
    });

    map.on('mouseleave', 'nodes', function() {
        if (hoverNodeID) {
            map.setFeatureState(
                { source: 'nodes_source', id: hoverNodeID },
                { hover: false }
            );
        }
        hoverNodeID = null;
    });
}

function addPopups(map:mapboxgl.Map, popups:Popup[]){
    popups.forEach(popup => {
        addPopupOnClick(map, popup.layer, popup.content)
    })
}

function addPopupOnClick(map:mapboxgl.Map, layer:string, content:PopupContent) {
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

function createPopulHTML(description:object, content:PopupContent){
    let html: string = '';
    content.forEach((element, index) => {
        if(!element) return;
        if(index % 2 == 0) html += element;
        else if(typeof(element) === 'string') html += description[element];
        else html += element[1](description[element[0]]);
    });

    return html;
}

function updateMapFilters(map:mapboxgl.Map){
    const currentZoom: number = map.getZoom();
    if(zoomLevelChange(currentZoom, 'nodes')){
        map.setFilter('node_labels', [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", nodes]]]]);

        if(!textOverlapEnabled && currentZoom > 3){
            map.setLayoutProperty('node_labels', 'text-allow-overlap', true);
            textOverlapEnabled = true;
        }else if(textOverlapEnabled && currentZoom < 3){
            map.setLayoutProperty('node_labels', 'text-allow-overlap', false);
            textOverlapEnabled = false;
        }
    }
    if(zoomLevelChange(currentZoom, 'edges')){
        map.setFilter('nodes',          [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", edges]]]]);
        map.setFilter('edges_border',   [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", edges]]]]);
        map.setFilter('edges',          [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", edges]]]]);
    }
}

function zoomLevelChange(currentZoom:number, zoomType:string){
    let currentIndex: number;
    switch(zoomType){
        case('nodes'): {
            currentIndex = findZoomIndex(currentZoom, nodes);
            if(currentIndex === oldNodeZoomIndex) return false;
            oldNodeZoomIndex = currentIndex;
            break;
        }
        case('edges'): {
            currentIndex = findZoomIndex(currentZoom, edges);
            if(currentIndex === oldEdgeZoomIndex) return false;
            oldEdgeZoomIndex = currentIndex;
            break;
        }
        default: break;
    }
    return true;
}

function findZoomIndex(zoom:number, zoomLookup:object[]){
    for(let index = 0; index <= zoomLookup.length; index++){
        if(index == (zoomLookup.length-1)) return index;
        if(zoom >= zoomLookup[index]["zoom"] && zoom < zoomLookup[index + 1]["zoom"]) return index;
    }
}
