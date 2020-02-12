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
    style: mapboxgl.Style,
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
    minZoom: number,
    maxZoom: number,
    initialZoom: number,
    textOverlapEnabledZoom: number,
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
const defaultMinimapOptions: MiniMapOptions = {
    id: "mapboxgl-minimap",
    width: "320px",
    height: "180px",
    style: blankStyle,
    center: [0, 0],
    zoom: 0,

    containerStyles: `; 
        border: 1px solid lightgray; 
        border-radius: 5px; 
        -webkit-box-shadow: 3px 3px 5px 4px #00000021; 
        -moz-box-shadow: 3px 3px 5px 4px #00000021; 
        box-shadow: 3px 3px 5px 4px #00000021;
    `,

    // should be a function; will be bound to Minimap
    zoomAdjust: null,

    // [a, b, c]
    // if parent map zoom >= a, and minimap zoom >= b, set minimap zoom to c
    // must be defined from most zoomed in rule, to least zoomed in rule.
    zoomLevels: [
        [9, 3, 4],
        [8, 2, 3],
        [6, 0, 2]
    ],

    edgeColor: "#08F",
    edgeWidth: 1,
    edgeOpacity: 1,

    fillColor: "#F80",
    fillOpacity: 0.25,

    dragPan: false,
    scrollZoom: false,
    boxZoom: false,
    dragRotate: false,
    keyboard: false,
    doubleClickZoom: false,
    touchZoomRotate: false
};
const defaultNodes: Node[] = [
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
const defaultEdges: Edge[] = [
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
const defaultZoom: number = 2;
const defaulTtextOverlapEnabledZoom: number = 3;

class ZmltMap {
    container?: string;
    config: Configuration;
    sources: Sources;
    edges: Edge[];
    nodes: Node[];
    popups: Popup[];
    minimapOptions: MiniMapOptions;
    map: mapboxgl.Map;
    nodeZoomIndex: number;
    edgeZoomIndex: number;
    currentZoom: number;
    minZoom: number;
    maxZoom: number;
    initialZoom: number;
    textOverlapEnabledZoom: number;
    textOverlapEnabled: boolean;
    hoverEdgeID: number|string;
    hoverNodeID: number|string;

    constructor(config:Configuration){
        this.config = config;
        this.sources = config.sources;
        this.textOverlapEnabled = false;
        this.nodeZoomIndex = 0;
        this.edgeZoomIndex = 0;
        this.hoverEdgeID = null;
        this.hoverNodeID = null;
        this.edges = config.edges ? config.edges : defaultEdges;
        this.nodes = config.nodes ? config.nodes : defaultNodes;
        this.popups = config.popups ? config.popups : [];
        this.minimapOptions = config.minimapOptions ? config.minimapOptions : defaultMinimapOptions;
        this.currentZoom = config.initialZoom ? config.initialZoom : defaultZoom;
        this.minZoom = config.minZoom ? config.minZoom : 1;
        this.maxZoom = config.maxZoom ? config.maxZoom : 10;
        this.textOverlapEnabledZoom = config.textOverlapEnabledZoom ? config.textOverlapEnabledZoom : defaulTtextOverlapEnabledZoom;
        this.minimapOptions.style = blankStyle;
    }

    load(container:string):void{
        this.container = container;
        this.map = new mapboxgl.Map({
            container: this.container,
            style: blankStyle,
            center: [-0, 0],
            zoom: defaultZoom,
            maxZoom: this.maxZoom,
            minZoom: this.minZoom,
            renderWorldCopies: false,
            dragRotate: true
        });
        this.map.on('load', () => { 
            this.addSources();
            this.addClusters();
            this.addEdges();
            this.addNodes();
            this.addEdgeHover();
            this.addNodeHover();
            this.addUI();
        });
    }

    addUI():void {        
        // Add zoom controls (without rotation controls) to the map.
        this.map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-left');
    
        if(this.popups.length) addPopups(this.map, this.popups);
    
        const miniMap: mapboxgl.IControl = new MiniMap(this.sources, this.minimapOptions);
        this.map.addControl(miniMap, 'bottom-left');
        this.map.addControl(new mapboxgl.FullscreenControl());

        // When the user zooms the map, this method handles showing and hiding data based on zoom level
        this.map.on('zoom', () => this.updateFilters());
    
        // Output the current zoom level every time it changes for testing.
        this.map.on('moveend', function (e) { console.log('Zoom Level: ', this.getZoom()) });
    }

    // Get the full mapbox zoom number.
    getZoom():number{
        return this.map.getZoom();
    }

    updateFilters():void{
        const map: mapboxgl.Map = this.map;
        const nodes: Node[] = this.nodes;
        const edges: Edge[] = this.edges;
        const currentZoom: number = this.getZoom();

        // When the zoom level changes, check if we need to display a different set of nodes. If we do, update the node filter.
        if(this.nodeLevelChange()){
            map.setFilter('node_labels', [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", nodes]]]]);
    
            //  Determing if text overlap should be enabled or disabled based on the break point set in the config object.
            if(!this.textOverlapEnabled && currentZoom > this.textOverlapEnabledZoom){
                map.setLayoutProperty('node_labels', 'text-allow-overlap', true);
                this.textOverlapEnabled = true;
            }else if(this.textOverlapEnabled && currentZoom <  this.textOverlapEnabledZoom){
                map.setLayoutProperty('node_labels', 'text-allow-overlap', false);
                this.textOverlapEnabled = false;
            }
        }

        // When the zoom level changes, check if we need to display a different set of edges. If we do, update the node filter.
        // We decided showing the nodes (without labels) at the same time as the edges was preferable, instead of waiting for
        // when the labels will fit. 
        if(this.edgeLevelChange()){
            map.setFilter('nodes',          [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", edges]]]]);
            map.setFilter('edges_border',   [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", edges]]]]);
            map.setFilter('edges',          [">=", currentZoom, ["get", "zoom", ["at", ["get", "level"], ["literal", edges]]]]);
        }
    }

    // Returns whether or not the zoom level has changed enough to warrant a change in which nodes we are displaying.
    nodeLevelChange():boolean{
        let currentIndex: number =  this.getZoomIndex(this.nodes);
        if(currentIndex === this.nodeZoomIndex) return false;
        this.nodeZoomIndex = currentIndex;
        return true;
    }

    // Returns whether or not the zoom level has changed enough to warrant a change in which edges we are displaying.
    edgeLevelChange():boolean{
        let currentIndex: number =  this.getZoomIndex(this.edges);
        if(currentIndex === this.edgeZoomIndex) return false;
        this.edgeZoomIndex = currentIndex;
        return true;
    }

    // Converts the current zoom number, to the index number of the object with the same .zoom property in the lookup array passed in. 
    // Used because getZoom() will return very precise values, and the nodes / edges config objects will not match up exactly.
    getZoomIndex(zoomLookup:object[]):number{
        const zoom: number = this.getZoom();
        for(let index = 0; index <= zoomLookup.length; index++){
            if(index == (zoomLookup.length-1)) return index;
            if(zoom >= zoomLookup[index]["zoom"] && zoom < zoomLookup[index + 1]["zoom"]) return index;
        }
    }

    addSources():void{
        const map: mapboxgl.Map = this.map;
        const sources: Sources = this.sources;
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
    
    addClusters():void{
        const map: mapboxgl.Map = this.map;
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
    
    addEdges():void{
        const edges: Edge[] = this.edges;
        const map: mapboxgl.Map = this.map;
        const currentZoom: number = this.getZoom();
    
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
    
        if(this.config.sources.allEdges){
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
                "minzoom": this.maxZoom
            });
        }
    }
    
    addNodes():void{
        const map: mapboxgl.Map = this.map;
        const nodes: Node[] = this.nodes;
        const edges: Edge[] = this.edges;
        const currentZoom: number = this.getZoom();
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
    
    addEdgeHover():void{
        const map: mapboxgl.Map = this.map;
        map.on('mousemove', 'edges', function(e) {
            // When the mouse moves, check if the mouse is on top of a feature from the edges source.
            if (e.features.length > 0) {
                // If there was already an edge with the hover status, turn that hover status off first
                if (this.hoverEdgeID) {
                    map.setFeatureState({
                        source: 'edges_source', id: this.hoverEdgeID },
                        { hover: false }
                    );
                }
                // Set the hover status of the new edge to true, and save the ID to the object so we can compare
                // later, when the mouse moves again.
                this.hoverEdgeID = e.features[0].id;
                map.setFeatureState(
                        { source: 'edges_source', id: this.hoverEdgeID },
                        { hover: true }
                    );
                }
        });
         
        map.on('mouseleave', 'edges', function() {
            // When the mouse leaves the edge source features, turn the hover status off
            if (this.hoverEdgeID) {
                map.setFeatureState(
                    { source: 'edges_source', id: this.hoverEdgeID },
                    { hover: false }
                );
            }
            this.hoverEdgeID = null;
        });
    }
    
    addNodeHover():void{
        const map: mapboxgl.Map = this.map;
        map.on('mousemove', 'nodes', function(e) {
            // When the mouse moves, check if the mouse is on top of a feature from the nodes source.
            if (e.features.length > 0) {
                // If there was already an node with the hover status, turn that hover status off first
                if (this.hoverNodeID) {
                    map.setFeatureState({
                        source: 'nodes_source', id: this.hoverNodeID },
                        { hover: false }
                    );
                }
                // Set the hover status of the new node to true, and save the ID to the object so we can compare
                // later, when the mouse moves again.
                this.hoverNodeID = e.features[0].id;
                map.setFeatureState(
                        { source: 'nodes_source', id: this.hoverNodeID },
                        { hover: true }
                    );
                }
        });
    
        map.on('mouseleave', 'nodes', function() {
            // When the mouse leaves the edge source features, turn the hover status off
            if (this.hoverNodeID) {
                map.setFeatureState(
                    { source: 'nodes_source', id: this.hoverNodeID },
                    { hover: false }
                );
            }
            this.hoverNodeID = null;
        });
    }
}
// Bind the ZmltMap to the window so that it is accessible in the main index.html file.
globalThis.ZmltMap = ZmltMap;

function addPopups(map:mapboxgl.Map, popups:Popup[]):void{
    popups.forEach(popup => {
        addPopupOnClick(map, popup.layer, popup.content)
    })
}

function addPopupOnClick(map:mapboxgl.Map, layer:string, content:PopupContent):void {
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', layer, function (e) {
        let descriptionHTML = createPopupHTML(e.features[0].properties, content);
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

// Takes the description field of the element, and uses it with the popup content defined in the config object
// to return the concatenated html string.
function createPopupHTML(description:object, content:PopupContent):string{
    let html: string = '';
    content.forEach((element, index) => {
        if(!element) return;
        // The config object for popups is structued like ['<html>', 'propertyName', '</html>]
        // so on even indexes, we just concatenate the html string, on odd indexes we use the string to lookup the property value.
        if(index % 2 == 0) html += element;

        // Along with property values, you can pass along a formatting function in form of ['propertyName', function]
        // This checks if there is one, if there is it uses that function to format the value of the property before
        // concatenating it.
        else if(typeof(element) === 'string') html += description[element];
        else html += element[1](description[element[0]]);
    });

    return html;
}
