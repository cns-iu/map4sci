(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!********************************************!*\
  !*** multi ./projects/map4sci/src/main.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bherr/workspaces/tripods/map4sci/website/projects/map4sci/src/main.ts */"C94l");


/***/ }),

/***/ "C94l":
/*!**************************************!*\
  !*** ./projects/map4sci/src/main.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "LbQV");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "QbMT");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "HliR":
/*!***************************************************!*\
  !*** ./projects/map4sci/src/app/app.component.ts ***!
  \***************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/map */ "WaP0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_map_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/map-data.service */ "LR1c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "yptW");






function AppComponent_select_0_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataset_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", dataset_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dataset_r3.name, " ");
} }
function AppComponent_select_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_select_0_Template_select_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.mapDataSwitcherChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_select_0_option_1_Template, 2, 2, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.mapData.datasetDirectory$));
} }
function AppComponent_m4s_map_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "m4s-map", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("edgeFeatures", ctx_r1.dataset.edges)("nodeFeatures", ctx_r1.dataset.nodes)("clusterFeatures", ctx_r1.dataset.cluster)("boundaryFeatures", ctx_r1.dataset.boundary)("edgesConfig", ctx_r1.dataset.config == null ? null : ctx_r1.dataset.config.edgeConfig)("nodesConfig", ctx_r1.dataset.config == null ? null : ctx_r1.dataset.config.nodeConfig)("initialZoomConfig", ctx_r1.dataset.config == null ? null : ctx_r1.dataset.config.initialZoom)("mapCenterConfig", ctx_r1.dataset.config == null ? null : ctx_r1.dataset.config.mapCenter)("textOverlapEnabledZoomConfig", ctx_r1.dataset.config == null ? null : ctx_r1.dataset.config.textOverlapEnabledZoom)("minimapConfig", ctx_r1.dataset.config == null ? null : ctx_r1.dataset.config.minimapConfig);
} }
class AppComponent {
    constructor(mapData) {
        this.mapData = mapData;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.dataset = _map_map__WEBPACK_IMPORTED_MODULE_1__["EMPTY_DATASET"];
    }
    get displayMap() {
        const { dataset } = this;
        if (!dataset.nodes) {
            return false;
        }
        if (!dataset.nodes.features) {
            return false;
        }
        if (dataset.nodes.features.length < 1) {
            return false;
        }
        return true;
    }
    ngOnInit() {
        this.subscriptions.add(this.mapData.dataset$.subscribe(ds => this.dataset = ds));
    }
    mapDataSwitcherChange(event) {
        const mapId = event.target.value;
        this.mapData.setDataset(mapId);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_map_data_service__WEBPACK_IMPORTED_MODULE_3__["MapDataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["m4s-root"]], decls: 4, vars: 4, consts: [["class", "dataset-selector", 3, "input", 4, "ngIf"], [1, "map-wrapper"], [3, "edgeFeatures", "nodeFeatures", "clusterFeatures", "boundaryFeatures", "edgesConfig", "nodesConfig", "initialZoomConfig", "mapCenterConfig", "textOverlapEnabledZoomConfig", "minimapConfig", 4, "ngIf"], [1, "dataset-selector", 3, "input"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "edgeFeatures", "nodeFeatures", "clusterFeatures", "boundaryFeatures", "edgesConfig", "nodesConfig", "initialZoomConfig", "mapCenterConfig", "textOverlapEnabledZoomConfig", "minimapConfig"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_select_0_Template, 3, 3, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_m4s_map_3_Template, 1, 10, "m4s-map", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.mapData.datasetDirectory$).length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayMap);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".dataset-selector[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0.5rem;\n  z-index: 1000;\n}\n\n.map-wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGFzZXQtc2VsZWN0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMC41cmVtO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "IhHY":
/*!****************************************************!*\
  !*** ./projects/map4sci/src/app/map/map.module.ts ***!
  \****************************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-mapbox-gl */ "Q2BN");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.component */ "yptW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class MapModule {
}
MapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MapModule });
MapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MapModule_Factory(t) { return new (t || MapModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["NgxMapboxGLModule"].withConfig({
                accessToken: 'pk.eyJ1IjoiZWRsdTc3NyIsImEiOiJja2wycDV2dzAwazg1MnFxamd2dDFmdmlyIn0.UxjI5qHgJIN5NZFJRi37DA',
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MapModule, { declarations: [_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["NgxMapboxGLModule"]], exports: [_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"]] }); })();


/***/ }),

/***/ "LR1c":
/*!***************************************************************!*\
  !*** ./projects/map4sci/src/app/services/map-data.service.ts ***!
  \***************************************************************/
/*! exports provided: MapDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDataService", function() { return MapDataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map/map */ "WaP0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class MapDataService {
    constructor(http) {
        this.http = http;
        this.files = ['boundary', 'cluster', 'edges', 'nodes'];
        this.emptyDataset = _map_map__WEBPACK_IMPORTED_MODULE_2__["EMPTY_DATASET"];
        this.datasetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.emptyDataset);
        this.datasetDirectorySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.dataset$ = this.datasetSubject.asObservable();
        this.datasetDirectory$ = this.datasetDirectorySubject.asObservable();
        // Grab the dataset directory index
        this.http.get('assets/datasets/index.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((dir) => this.datasetDirectorySubject.next(dir)))
            .subscribe();
        // Set current dataset to the 'first' dataset whenever a directory is loaded
        this.subscriptions.add(this.datasetDirectory$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((dir) => {
            if (dir.length > 0) {
                this.setDataset(dir[0].id);
            }
        })).subscribe());
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    setDataset(id) {
        // Send an empty dataset to clear the map
        this.datasetSubject.next(this.emptyDataset);
        this.getDataset(id)
            .subscribe((dataset) => this.datasetSubject.next(dataset));
    }
    getDataset(id) {
        const dataDirectory = this.datasetDirectorySubject.getValue();
        if (!dataDirectory || !dataDirectory.find(d => d.id === id)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_map_map__WEBPACK_IMPORTED_MODULE_2__["EMPTY_DATASET"]);
        }
        const selectedDirectory = dataDirectory.find(d => d.id === id);
        const baseUrl = selectedDirectory === null || selectedDirectory === void 0 ? void 0 : selectedDirectory.dir;
        const dataReqs = {};
        for (const file of this.files) {
            dataReqs[file] = this.http.get(`${baseUrl}/${file}.geojson`);
        }
        if (selectedDirectory === null || selectedDirectory === void 0 ? void 0 : selectedDirectory.config) {
            dataReqs.config = this.http.get(`${baseUrl}/${selectedDirectory.config}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(dataReqs)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(m => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.emptyDataset)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
}
MapDataService.ɵfac = function MapDataService_Factory(t) { return new (t || MapDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MapDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MapDataService, factory: MapDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LbQV":
/*!************************************************!*\
  !*** ./projects/map4sci/src/app/app.module.ts ***!
  \************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_map_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/map-data.service */ "LR1c");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "HliR");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.module */ "IhHY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_map_data_service__WEBPACK_IMPORTED_MODULE_0__["MapDataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _map_map_module__WEBPACK_IMPORTED_MODULE_3__["MapModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _map_map_module__WEBPACK_IMPORTED_MODULE_3__["MapModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();


/***/ }),

/***/ "QbMT":
/*!**********************************************************!*\
  !*** ./projects/map4sci/src/environments/environment.ts ***!
  \**********************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "TQs3":
/*!******************************************************!*\
  !*** ./projects/map4sci/src/app/map/map-defaults.ts ***!
  \******************************************************/
/*! exports provided: defaultInitialZoom, blankStyle, defaultMinimapOptions, defaultNodes, defaultEdges, defaultTextOverlapEnabledZoom, defaultMapCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultInitialZoom", function() { return defaultInitialZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blankStyle", function() { return blankStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMinimapOptions", function() { return defaultMinimapOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultNodes", function() { return defaultNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultEdges", function() { return defaultEdges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTextOverlapEnabledZoom", function() { return defaultTextOverlapEnabledZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMapCenter", function() { return defaultMapCenter; });
const defaultInitialZoom = 2;
const blankStyle = {
    version: 8,
    name: 'Blank',
    center: [0, 0],
    zoom: defaultInitialZoom,
    sources: {},
    sprite: 'https://cdn.jsdelivr.net/gh/lukasmartinelli/osm-liberty@gh-pages/sprites/osm-liberty',
    glyphs: 'https://cdn.jsdelivr.net/gh/orangemug/font-glyphs@gh-pages/glyphs/{fontstack}/{range}.pbf',
    layers: [
        {
            id: 'background',
            type: 'background',
            paint: {
                'background-color': 'white'
            }
        }
    ]
};
const defaultMinimapOptions = {
    id: 'mapboxgl-minimap',
    width: '320px',
    height: '180px',
    style: blankStyle,
    center: [0, 0],
    zoom: 0,
    containerStyles: `
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
    edgeColor: '#08F',
    edgeWidth: 1,
    edgeOpacity: 1,
    fillColor: '#F80',
    fillOpacity: 0.25,
    dragPan: false,
    scrollZoom: false,
    boxZoom: false,
    dragRotate: false,
    keyboard: false,
    doubleClickZoom: false,
    touchZoomRotate: false
};
const defaultNodes = [
    { level: 0, zoom: 0.0, fontSize: 0 },
    { level: 1, zoom: 0.0, fontSize: 20 },
    { level: 2, zoom: 4.0, fontSize: 18 },
    { level: 3, zoom: 5.0, fontSize: 18 },
    { level: 4, zoom: 5.5, fontSize: 16 },
    { level: 5, zoom: 6.0, fontSize: 16 },
    { level: 6, zoom: 6.2, fontSize: 14 },
    { level: 7, zoom: 6.5, fontSize: 14 },
    { level: 8, zoom: 6.7, fontSize: 12 },
    { level: 9, zoom: 7.5, fontSize: 12 }
];
const defaultEdges = [
    { level: 0, zoom: 0, color: '', width: 0, opacity: 0.0, borderOpacity: 0.0, borderColor: '', borderWidth: 0 },
    { level: 1, zoom: 1.5, color: '#FFEBA1', width: 3.2, opacity: 1.0, borderOpacity: 1.0, borderColor: 'yellow', borderWidth: 1.2 },
    { level: 2, zoom: 3.5, color: '#FFEBA1', width: 3, opacity: 1.0, borderOpacity: 1.0, borderColor: '#F9D776', borderWidth: 1 },
    { level: 3, zoom: 4.5, color: '#F9D776', width: 2.7, opacity: 0.9, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
    { level: 4, zoom: 5.0, color: '#c1b276', width: 2.7, opacity: 0.9, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
    { level: 5, zoom: 5.4, color: '#94895f', width: 2.2, opacity: 0.8, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
    { level: 6, zoom: 5.7, color: '#615b43', width: 2.2, opacity: 0.8, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
    { level: 7, zoom: 6.0, color: 'gray', width: 2, opacity: 0.7, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
    { level: 8, zoom: 6.2, color: 'gray', width: 2, opacity: 0.6, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
    { level: 9, zoom: 7.0, color: 'gray', width: 1, opacity: 0.5, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 }
];
const defaultTextOverlapEnabledZoom = 3;
const defaultMapCenter = [0, 0];


/***/ }),

/***/ "WaP0":
/*!*********************************************!*\
  !*** ./projects/map4sci/src/app/map/map.ts ***!
  \*********************************************/
/*! exports provided: EMPTY_FEATURES, EMPTY_DATASET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_FEATURES", function() { return EMPTY_FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_DATASET", function() { return EMPTY_DATASET; });
const EMPTY_FEATURES = {
    type: 'FeatureCollection',
    features: []
};
const EMPTY_DATASET = {
    boundary: EMPTY_FEATURES,
    cluster: EMPTY_FEATURES,
    edges: EMPTY_FEATURES,
    nodes: EMPTY_FEATURES
};


/***/ }),

/***/ "kXzE":
/*!************************************************************!*\
  !*** ./projects/map4sci/src/app/map/zoom-level.control.ts ***!
  \************************************************************/
/*! exports provided: ZoomLevelControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomLevelControl", function() { return ZoomLevelControl; });
class ZoomLevelControl {
    onAdd(map) {
        this.map = map;
        this.container = document.createElement('div');
        this.container.className = 'mapboxgl-zoom-level-display';
        this.updateText();
        this.zoomCallback = () => this.updateText();
        map.on('zoom', this.zoomCallback);
        return this.container;
    }
    updateText() {
        if (this.map && this.container) {
            this.container.textContent = this.map.getZoom().toFixed(2) + 'x';
        }
    }
    onRemove(map) {
        var _a, _b;
        // tslint:disable-next-line: no-non-null-assertion
        map.off('zoom', this.zoomCallback);
        (_b = (_a = this.container) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.container);
    }
}


/***/ }),

/***/ "mTfT":
/*!*************************************************!*\
  !*** ./projects/map4sci/src/app/map/minimap.ts ***!
  \*************************************************/
/*! exports provided: MiniMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniMap", function() { return MiniMap; });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);

/*
  This is a modified and updated version of Brendan Matkin's Mapboxgl-Minimap:
  https://github.com/brendanmatkin/mapboxgl-minimap
*/
const blankStyle = {
    version: 8,
    name: 'Blank',
    center: [0, 0],
    zoom: 0,
    sources: {},
    sprite: 'https://cdn.jsdelivr.net/gh/lukasmartinelli/osm-liberty@gh-pages/sprites/osm-liberty',
    glyphs: 'https://cdn.jsdelivr.net/gh/orangemug/font-glyphs@gh-pages/glyphs/{fontstack}/{range}.pbf',
    layers: [
        {
            id: 'background',
            type: 'background',
            paint: {
                'background-color': 'rgba(255,255,255,1)'
            }
        }
    ]
};
class MiniMap {
    constructor(sources, options) {
        this.sources = sources;
        this.options = options;
        Object.assign(this.options, options);
        this.ticking = false;
        this.lastMouseMoveEvent = null;
        this.isDragging = false;
        this.isCursorOverFeature = false;
        this.previousPoint = [0, 0];
        this.currentPoint = [0, 0];
        this.trackingRectCoordinates = [[[], [], [], [], []]];
    }
    onAdd(parentMap) {
        this.parentMap = parentMap;
        const opts = this.options;
        const container = this.container = this.createContainer(parentMap);
        const miniMap = this.miniMap = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["Map"]({
            attributionControl: false,
            container,
            style: blankStyle,
            zoom: opts.zoom,
            center: opts.center
        });
        if (opts.maxBounds) {
            miniMap.setMaxBounds(opts.maxBounds);
        }
        miniMap.on('load', this.load.bind(this));
        return this.container;
    }
    onRemove(parentMap) {
        return;
    }
    load() {
        const opts = this.options;
        const parentMap = this.parentMap;
        const miniMap = this.miniMap;
        const interactions = [
            'dragPan', 'scrollZoom', 'boxZoom', 'dragRotate',
            'keyboard', 'doubleClickZoom', 'touchZoomRotate'
        ];
        interactions.forEach((i) => {
            const key = i;
            const map = this.miniMap;
            if (opts[key] !== true) {
                map[i].disable();
            }
        });
        if (typeof opts.zoomAdjust === 'function') {
            this.options.zoomAdjust = opts.zoomAdjust.bind(this);
        }
        else if (opts.zoomAdjust === null) {
            this.options.zoomAdjust = this.zoomAdjust.bind(this);
        }
        const bounds = miniMap.getBounds();
        this.convertBoundsToPoints(bounds);
        this.trackingRectData = {
            type: 'Feature',
            properties: {
                name: 'trackingRect'
            },
            geometry: {
                type: 'Polygon',
                coordinates: this.trackingRectCoordinates
            }
        };
        miniMap.addSource('trackingRect', { type: 'geojson', data: this.trackingRectData });
        // Add the geojson layers of our data so the minimap matches the parent map
        miniMap.addLayer({
            id: 'cluster',
            type: 'fill',
            source: { type: 'geojson', data: this.sources.clusters },
            layout: {},
            paint: {
                'fill-color': ['get', 'fill'],
                'fill-opacity': 0.7,
                'fill-outline-color': ['get', 'stroke']
            },
        });
        miniMap.addLayer({
            id: 'cluster_boundary',
            type: 'line',
            minzoom: 2,
            source: { type: 'geojson', data: this.sources.clusters },
            layout: {},
            paint: {
                'line-color': ['get', 'stroke'],
                'line-width': 0.5,
                'line-opacity': 0.8
            },
        });
        miniMap.addLayer({
            id: 'node_labels',
            type: 'symbol',
            minzoom: 2,
            source: { type: 'geojson', data: this.sources.nodes },
            layout: {
                'text-field': '{label}',
                'text-font': ['Open Sans Regular'],
                'text-size': 14,
                'text-anchor': 'center',
                'text-justify': 'center',
                'text-allow-overlap': false
            },
            filter: ['==', 'level', 1]
        });
        miniMap.addLayer({
            id: 'node_labels_2',
            type: 'symbol',
            minzoom: 3,
            source: { type: 'geojson', data: this.sources.nodes },
            layout: {
                'text-field': '{label}',
                'text-font': ['Open Sans Regular'],
                'text-size': 9,
                'text-anchor': 'center',
                'text-justify': 'center'
            },
            filter: ['all',
                ['<=', 'level', 3],
                ['>', 'level', 1]
            ]
        });
        miniMap.addLayer({
            id: 'trackingRectOutline',
            type: 'line',
            source: 'trackingRect',
            layout: {},
            paint: {
                'line-color': opts.edgeColor,
                'line-width': opts.edgeWidth,
                'line-opacity': opts.edgeOpacity
            }
        });
        // needed for dragging
        miniMap.addLayer({
            id: 'trackingRectFill',
            type: 'fill',
            source: 'trackingRect',
            layout: {},
            paint: {
                'fill-color': opts.fillColor,
                'fill-opacity': opts.fillOpacity
            }
        });
        this.trackingRect = this.miniMap.getSource('trackingRect');
        this.update();
        parentMap.on('move', this.update.bind(this));
        miniMap.on('mousemove', this.mouseMove.bind(this));
        miniMap.on('mousedown', this.mouseDown.bind(this));
        miniMap.on('mouseup', this.mouseUp.bind(this));
        miniMap.on('touchmove', this.mouseMove.bind(this));
        miniMap.on('touchstart', this.mouseDown.bind(this));
        miniMap.on('touchend', this.mouseUp.bind(this));
        this.miniMapCanvas = miniMap.getCanvasContainer();
        this.miniMapCanvas.addEventListener('wheel', this.preventDefault);
        this.miniMapCanvas.addEventListener('mousewheel', this.preventDefault);
    }
    mouseDown(e) {
        if (this.isCursorOverFeature) {
            this.isDragging = true;
            this.previousPoint = this.currentPoint;
            this.currentPoint = [e.lngLat.lng, e.lngLat.lat];
        }
    }
    mouseMove(e) {
        this.ticking = false;
        const miniMap = this.miniMap;
        const features = miniMap.queryRenderedFeatures(e.point, {
            layers: ['trackingRectFill']
        });
        // don't update if we're still hovering the area
        if (!(this.isCursorOverFeature && features.length > 0)) {
            this.isCursorOverFeature = features.length > 0;
            this.miniMapCanvas.style.cursor = this.isCursorOverFeature ? 'move' : '';
        }
        if (this.isDragging) {
            this.previousPoint = this.currentPoint;
            this.currentPoint = [e.lngLat.lng, e.lngLat.lat];
            const offset = [
                this.previousPoint[0] - this.currentPoint[0],
                this.previousPoint[1] - this.currentPoint[1]
            ];
            const newBounds = this.moveTrackingRect(offset);
            this.parentMap.fitBounds(newBounds, { duration: 80, linear: true });
        }
    }
    mouseUp() {
        this.isDragging = false;
        this.ticking = false;
    }
    moveTrackingRect(offset) {
        const rectPoints = this.trackingRectCoordinates[0];
        const bounds = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["LngLatBounds"]();
        rectPoints.forEach(coord => bounds.extend(coord));
        const ne = bounds.getNorthEast();
        const sw = bounds.getSouthWest();
        ne.lat -= offset[1];
        ne.lng -= offset[0];
        sw.lat -= offset[1];
        sw.lng -= offset[0];
        this.convertBoundsToPoints(bounds);
        this.trackingRect.setData(this.trackingRectData);
        return bounds;
    }
    setTrackingRectBounds(bounds) {
        this.convertBoundsToPoints(bounds);
        this.trackingRect.setData(this.trackingRectData);
    }
    convertBoundsToPoints(bounds) {
        const ne = bounds.getNorthEast();
        const sw = bounds.getSouthWest();
        const trc = this.trackingRectCoordinates;
        trc[0][0][0] = ne.lng;
        trc[0][0][1] = ne.lat;
        trc[0][1][0] = sw.lng;
        trc[0][1][1] = ne.lat;
        trc[0][2][0] = sw.lng;
        trc[0][2][1] = sw.lat;
        trc[0][3][0] = ne.lng;
        trc[0][3][1] = sw.lat;
        trc[0][4][0] = ne.lng;
        trc[0][4][1] = ne.lat;
    }
    update() {
        if (this.isDragging) {
            return;
        }
        const parentBounds = this.parentMap.getBounds();
        this.setTrackingRectBounds(parentBounds);
        if (typeof this.options.zoomAdjust === 'function') {
            this.options.zoomAdjust();
        }
    }
    zoomAdjust() {
        const miniMap = this.miniMap;
        const parentMap = this.parentMap;
        const miniZoom = miniMap.getZoom();
        const parentZoom = parentMap.getZoom();
        const levels = this.options.zoomLevels;
        let found = false;
        levels.forEach((zoom) => {
            if (!found && parentZoom >= zoom[0]) {
                if (miniZoom >= zoom[1]) {
                    miniMap.setZoom(zoom[2]);
                }
                miniMap.setCenter(parentMap.getCenter());
                found = true;
            }
        });
        if (!found && miniZoom !== this.options.zoom) {
            if (typeof this.options.bounds === 'object') {
                miniMap.fitBounds(this.options.bounds, { duration: 50 });
            }
            miniMap.setZoom(this.options.zoom);
        }
    }
    createContainer(parentMap) {
        const opts = this.options;
        const container = document.createElement('div');
        container.className = 'mapboxgl-ctrl-minimap mapboxgl-ctrl';
        container.setAttribute('style', 'width: ' + opts.width + '; height: ' + opts.height + '; ' + opts.containerStyles);
        container.addEventListener('contextmenu', this.preventDefault);
        parentMap.getContainer().appendChild(container);
        if (opts.id !== '') {
            container.id = opts.id.toString();
        }
        return container;
    }
    preventDefault(e) {
        e.preventDefault();
    }
}


/***/ }),

/***/ "yptW":
/*!*******************************************************!*\
  !*** ./projects/map4sci/src/app/map/map.component.ts ***!
  \*******************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-defaults */ "TQs3");
/* harmony import */ var _minimap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minimap */ "mTfT");
/* harmony import */ var _zoom_level_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoom-level.control */ "kXzE");
/* harmony import */ var ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mapbox-gl */ "Q2BN");







const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return ["get", "fill"]; };
const _c2 = function () { return ["get", "stroke"]; };
const _c3 = function (a0, a2) { return { "fill-color": a0, "fill-opacity": 0.7, "fill-outline-color": a2 }; };
const _c4 = function (a0) { return { "line-color": a0, "line-width": 0.5, "line-opacity": 0.8 }; };
const _c5 = function () { return ["feature-state", "hover"]; };
const _c6 = function (a1) { return ["boolean", a1, false]; };
const _c7 = function (a2) { return ["get", "color", a2]; };
const _c8 = function (a1, a3) { return ["case", a1, "red", a3]; };
const _c9 = function (a2) { return ["get", "width", a2]; };
const _c10 = function (a2) { return ["get", "opacity", a2]; };
const _c11 = function (a0, a1, a2) { return { "line-color": a0, "line-width": a1, "line-opacity": a2 }; };
const _c12 = function (a2) { return ["get", "zoom", a2]; };
const _c13 = function (a1, a2) { return [">=", a1, a2]; };
const _c14 = function (a2) { return ["get", "borderColor", a2]; };
const _c15 = function (a2) { return ["get", "borderWidth", a2]; };
const _c16 = function (a2) { return ["get", "borderOpacity", a2]; };
const _c17 = function (a0, a1, a2, a3) { return { "line-color": a0, "line-width": a1, "line-opacity": a2, "line-gap-width": a3 }; };
const _c18 = function (a1) { return ["case", a1, "red", "black"]; };
const _c19 = function (a0) { return { "circle-color": a0, "circle-radius": 3 }; };
class MapComponent {
    constructor() {
        // Inputs
        this.mapStyle = _map_defaults__WEBPACK_IMPORTED_MODULE_2__["blankStyle"];
        this.currentZoom = _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultInitialZoom"];
        this.mapMarkers = [];
        this.initialZoomConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultInitialZoom"];
        this.minimapConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultMinimapOptions"];
        this.edgesConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultEdges"];
        this.nodesConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultNodes"];
        this.textOverlapEnabledZoomConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultTextOverlapEnabledZoom"];
        this.mapCenterConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultMapCenter"];
        // Outputs
        this.nodeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edgeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.panChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nodeZoomIndex = 0;
        this.edgeZoomIndex = 0;
        this.textOverlapEnabled = false;
        // These allow the layer tags to be much more readable.
        this.currentNodeFormula = ['at', ['get', 'level'], ['literal', this.nodesConfig]];
        this.currentEdgeFormula = ['get', 'zoom', ['at', ['get', 'level'], ['literal', this.edgesConfig]]];
        this.edgeFormula = ['at', ['get', 'level'], ['literal', this.edgesConfig]];
        // tslint:disable-next-line: no-non-null-assertion
        this.lastEdgeFormula = ['at', this.edgesConfig.length - 1, ['literal', this.edgesConfig]];
        this.nodeLabelsLayout = {
            'text-field': '{label}',
            'text-font': ['Open Sans Regular'],
            'text-size': ['get', 'fontSize', this.currentNodeFormula],
            'text-variable-anchor': ['top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left', 'right', 'center'],
            'text-radial-offset': 0.25,
            'text-allow-overlap': false
        };
        /*
          Popup content needs to follow specific pattern to function properly.
          Property names will be used to look up data from the geoJson sources.
          Pass in format ['<anyHTML>and text</anyHTML><p>', 'propertyName', '</p>more html or text']
      
          You can pass in as many as you like but they need to alternate between raw html, and property names.
          You can also pass in a formatter with the property name in format ['propertyName', formatterMethod]
        */
        this.popups = [
            {
                layer: 'edges',
                content: [
                    '<p class="popup-label">Edge</p><p>',
                    ['label', this.capitalizeFirstLetter],
                    '</p>'
                ]
            },
            {
                layer: 'nodes',
                content: [
                    '<p class="popup-label">Node</p><p>',
                    'label',
                    '</p>'
                ]
            }
        ];
        this.containerStyles = `
      border: 1px solid lightgray;
      border-radius: 5px;
      -webkit-box-shadow: 3px 3px 5px 4px #00000021;
      -moz-box-shadow: 3px 3px 5px 4px #00000021;
      box-shadow: 3px 3px 5px 4px #00000021;
  `;
    }
    set InitialZoomConfig(initialZoom) {
        this.initialZoomConfig = initialZoom || _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultInitialZoom"];
    }
    set MinimapConfig(options) {
        this.minimapConfig = options || _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultMinimapOptions"];
    }
    set EdgesConfig(edges) {
        this.edgesConfig = edges || _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultEdges"];
    }
    set NodesConfig(nodes) {
        this.nodesConfig = nodes || _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultNodes"];
    }
    set TextOverlapEnabledZoomConfig(zoom) {
        this.textOverlapEnabledZoomConfig = zoom || _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultTextOverlapEnabledZoom"];
    }
    set MapCenterConfig(mapCenter) {
        this.mapCenterConfig = mapCenter || _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultMapCenter"];
    }
    capitalizeFirstLetter(input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
    nodeClicked(event) {
        this.nodeClick.emit(event);
    }
    edgeClicked(event) {
        this.edgeClick.emit(event);
    }
    onMapLoad(map) {
        this.map = map;
        if (this.initialZoomConfig !== _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultInitialZoom"]) {
            map.setZoom(this.initialZoomConfig);
        }
        this.currentZoom = map.getZoom();
        // Use the same map center for the minimap unless the minimapOptions have been customized.
        if (this.minimapConfig === _map_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultMinimapOptions"]) {
            this.minimapConfig.center = this.mapCenterConfig;
        }
        // ShowCompass off to disable rotation.
        map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["NavigationControl"]({ showCompass: false }), 'top-right');
        map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["FullscreenControl"]({}), 'top-right');
        if (this.nodeFeatures.features.length === 0) {
            console.warn('0 node features.');
        }
        else if (this.clusterFeatures.features.length === 0) {
            console.warn('0 cluster features');
        }
        else {
            map.addControl(new _minimap__WEBPACK_IMPORTED_MODULE_3__["MiniMap"]({ nodes: this.nodeFeatures, clusters: this.clusterFeatures }, this.minimapConfig), 'bottom-right');
        }
        map.addControl(new _zoom_level_control__WEBPACK_IMPORTED_MODULE_4__["ZoomLevelControl"](), 'bottom-right');
        this.map.resize();
        this.addMapMarkers(this.mapMarkers);
        this.addEdgeHover(map);
        this.addNodeHover(map);
        this.addPopups();
        // When the user zooms the map, this method handles showing and hiding data based on zoom level
        map.on('zoom', () => this.updateFilters());
        map.on('zoomend', () => this.zoomChange.emit(this.map.getZoom()));
        map.on('moveend', () => this.panChange.emit(this.map.getCenter().toArray()));
    }
    addMapMarkers(markers) {
        if (!markers.length) {
            return;
        }
        markers.forEach(marker => {
            const popup = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Popup"]({
                closeOnClick: true,
                closeOnMove: true,
                closeButton: false,
                className: 'map-marker-popup'
            }).setHTML(`<h3>${marker.title}</h3>`);
            new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Marker"](marker.config || {})
                .setLngLat(marker.coordinates)
                .setPopup(popup)
                .addTo(this.map);
        });
    }
    // In order to show more or less data based on the zoom level we have to update the layer filters when the map zooms.
    updateFilters() {
        const { map, edgesConfig, nodesConfig, textOverlapEnabledZoomConfig, textOverlapEnabled } = this;
        const currentZoom = map.getZoom();
        // When the zoom level changes, check if we need to display a different set of nodes. If we do, update the node filter.
        if (this.nodeLevelChange()) {
            const currentNode = ['get', 'zoom', ['at', ['get', 'level'], ['literal', nodesConfig]]];
            map.setFilter('node_labels', ['>=', currentZoom, currentNode]);
        }
        // When the zoom level changes, check if we need to display a different set of edges. If we do, update the edges filter.
        // We decided showing the nodes (without labels) at the same time as the edges was preferable, instead of waiting for
        // when the labels will fit.
        if (this.edgeLevelChange()) {
            const currentEdge = ['get', 'zoom', ['at', ['get', 'level'], ['literal', edgesConfig]]];
            map.setFilter('nodes', ['>=', currentZoom, currentEdge]);
            map.setFilter('edges_border', ['>=', currentZoom, currentEdge]);
            map.setFilter('edges', ['>=', currentZoom, currentEdge]);
        }
        //  Determing if text overlap should be enabled or disabled based on the break point set in the config object.
        if (!textOverlapEnabled && currentZoom > textOverlapEnabledZoomConfig) {
            map.setLayoutProperty('node_labels', 'text-allow-overlap', true);
            this.textOverlapEnabled = true;
        }
        else if (textOverlapEnabled && currentZoom < textOverlapEnabledZoomConfig) {
            map.setLayoutProperty('node_labels', 'text-allow-overlap', false);
            this.textOverlapEnabled = false;
        }
    }
    // Returns whether or not the zoom level has changed enough to warrant a change in which nodes we are displaying.
    nodeLevelChange() {
        const currentIndex = this.getZoomIndex(this.nodesConfig);
        if (currentIndex === this.nodeZoomIndex) {
            return false;
        }
        this.nodeZoomIndex = currentIndex;
        return true;
    }
    // Returns whether or not the zoom level has changed enough to warrant a change in which edges we are displaying.
    edgeLevelChange() {
        const currentIndex = this.getZoomIndex(this.edgesConfig);
        if (currentIndex === this.edgeZoomIndex) {
            return false;
        }
        this.edgeZoomIndex = currentIndex;
        return true;
    }
    addEdgeHover(map) {
        map.on('mousemove', 'edges', (e) => {
            // When the mouse moves, check if the mouse is on top of a feature from the edges source.
            if (!e.features) {
                return;
            }
            if (e.features.length > 0) {
                // If there was already an edge with the hover status, turn that hover status off first
                if (this.hoverEdgeID) {
                    map.setFeatureState({ source: 'edges', id: this.hoverEdgeID }, { hover: false });
                }
                // Set the hover status of the new edge to true, and save the ID to the object so we can compare
                // later, when the mouse moves again.
                this.hoverEdgeID = e.features[0].id;
                map.setFeatureState({ source: 'edges', id: this.hoverEdgeID }, { hover: true });
            }
        });
        map.on('mouseleave', 'edges', () => {
            // When the mouse leaves the edge source features, turn the hover status off
            if (this.hoverEdgeID) {
                map.setFeatureState({ source: 'edges', id: this.hoverEdgeID }, { hover: false });
            }
            this.hoverEdgeID = undefined;
        });
    }
    addNodeHover(map) {
        map.on('mousemove', 'nodes', (e) => {
            if (!e.features) {
                return;
            }
            // When the mouse moves, check if the mouse is on top of a feature from the nodes source.
            if (e.features.length > 0) {
                // If there was already an node with the hover status, turn that hover status off first
                if (this.hoverNodeID) {
                    map.setFeatureState({ source: 'nodes', id: this.hoverNodeID }, { hover: false });
                }
                // Set the hover status of the new node to true, and save the ID to the object so we can compare
                // later, when the mouse moves again.
                this.hoverNodeID = e.features[0].id;
                map.setFeatureState({ source: 'nodes', id: this.hoverNodeID }, { hover: true });
            }
        });
        map.on('mouseleave', 'nodes', () => {
            // When the mouse leaves the edge source features, turn the hover status off
            if (this.hoverNodeID) {
                map.setFeatureState({ source: 'nodes', id: this.hoverNodeID }, { hover: false });
            }
            this.hoverNodeID = undefined;
        });
    }
    addPopups() {
        this.popups.forEach(popup => {
            this.addPopupOnClick(popup.layer, popup.content);
        });
    }
    addPopupOnClick(layer, content) {
        const { map } = this;
        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
        map.on('click', layer, (e) => {
            if (!e.features) {
                return;
            }
            const descriptionHTML = this.createPopupHTML(e.features[0].properties, content);
            new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Popup"]({
                closeOnClick: true,
                closeOnMove: true,
                closeButton: false,
                className: 'map-marker-popup'
            })
                .setLngLat(e.lngLat)
                .setHTML(descriptionHTML)
                .addTo(map);
        });
        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', layer, () => {
            map.getCanvas().style.cursor = 'pointer';
        });
        // Change it back to a pointer when it leaves.
        map.on('mouseleave', layer, () => {
            map.getCanvas().style.cursor = '';
        });
    }
    // Takes the description field of the element, and uses it with the popup content defined in the config object
    // to return the concatenated html string.
    createPopupHTML(description, content) {
        let html = '';
        content.forEach((element, index) => {
            if (!element) {
                return;
            }
            // The config object for popups is structued like ['<html>', 'propertyName', '</html>]
            // so on even indexes, we just concatenate the html string, on odd indexes we use the string to lookup the property value.
            if (this.isEven(index)) {
                html += element;
            }
            // Along with property values, you can pass along a formatting function in form of ['propertyName', function]
            // This checks if there is one, if there is it uses that function to format the value of the property before
            // concatenating it.
            else if (typeof (element) === 'string') {
                html += description[element];
            }
            else {
                html += element[1](description[element[0]]);
            }
        });
        return html;
    }
    // Converts the current zoom number, to the index number of the object with the same .zoom property in the lookup array passed in.
    // Used because getZoom() will return very precise values, and the nodes / edges config objects will not match up exactly.
    getZoomIndex(zoomLookup) {
        const zoom = this.map.getZoom();
        for (let index = 0; index <= zoomLookup.length; index++) {
            if (index === (zoomLookup.length - 1)) {
                return index;
            }
            if (zoom >= zoomLookup[index].zoom && zoom < zoomLookup[index + 1].zoom) {
                return index;
            }
        }
        console.error('No Zoom index found.  Zoom lookup: ', zoomLookup);
        return 0;
    }
    isEven(index) {
        return index % 2 === 0;
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["m4s-map"]], inputs: { mapStyle: "mapStyle", edgeFeatures: "edgeFeatures", nodeFeatures: "nodeFeatures", clusterFeatures: "clusterFeatures", boundaryFeatures: "boundaryFeatures", currentZoom: "currentZoom", mapMarkers: "mapMarkers", InitialZoomConfig: ["initialZoomConfig", "InitialZoomConfig"], MinimapConfig: ["minimapConfig", "MinimapConfig"], EdgesConfig: ["edgesConfig", "EdgesConfig"], NodesConfig: ["nodesConfig", "NodesConfig"], TextOverlapEnabledZoomConfig: ["textOverlapEnabledZoomConfig", "TextOverlapEnabledZoomConfig"], MapCenterConfig: ["mapCenterConfig", "MapCenterConfig"] }, outputs: { nodeClick: "nodeClick", edgeClick: "edgeClick", zoomChange: "zoomChange", panChange: "panChange" }, decls: 11, vars: 83, consts: [[3, "zoom", "center", "renderWorldCopies", "mapLoad"], ["id", "edges", 3, "data"], ["id", "nodes", 3, "data"], ["id", "clusters", 3, "data"], ["id", "boundaries", 3, "data"], ["id", "clusters", "source", "clusters", "type", "fill", 3, "paint"], ["id", "boundaries", "source", "boundaries", "type", "line", "minZoom", "2", 3, "paint"], ["id", "edges", "source", "edges", "type", "line", 3, "paint", "filter", "layerClick"], ["id", "edges_border", "source", "edges", "type", "line", 3, "paint", "filter"], ["id", "nodes", "source", "nodes", "type", "circle", 3, "paint", "filter", "layerClick"], ["id", "node_labels", "source", "nodes", "type", "symbol", 3, "layout", "filter"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mgl-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapLoad", function MapComponent_Template_mgl_map_mapLoad_0_listener($event) { return ctx.onMapLoad($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mgl-geojson-source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mgl-geojson-source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mgl-geojson-source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mgl-geojson-source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mgl-layer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mgl-layer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mgl-layer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("layerClick", function MapComponent_Template_mgl_layer_layerClick_7_listener($event) { return ctx.edgeClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mgl-layer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mgl-layer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("layerClick", function MapComponent_Template_mgl_layer_layerClick_9_listener($event) { return ctx.nodeClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mgl-layer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.mapStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.currentZoom))("center", ctx.mapCenterConfig)("renderWorldCopies", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.edgeFeatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.nodeFeatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.clusterFeatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.boundaryFeatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](41, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](34, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c7, ctx.edgeFormula)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c9, ctx.edgeFormula), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c10, ctx.edgeFormula)))("filter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](47, _c13, ctx.currentZoom, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c12, ctx.edgeFormula)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](58, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c14, ctx.edgeFormula), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c15, ctx.edgeFormula), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c16, ctx.edgeFormula), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c9, ctx.edgeFormula)))("filter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](65, _c13, ctx.currentZoom, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c12, ctx.edgeFormula)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](73, _c19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](68, _c5)))))("filter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](75, _c13, ctx.currentZoom, ctx.currentEdgeFormula));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("layout", ctx.nodeLabelsLayout)("filter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](80, _c13, ctx.currentZoom, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](78, _c12, ctx.currentNodeFormula)));
    } }, directives: [ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_5__["GeoJSONSourceComponent"], ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%]     .mapboxgl-zoom-level-display {\n  margin-right: 0.875rem;\n  font-size: 0.875rem;\n  border-radius: 50%;\n  width: 3rem;\n  height: 3rem;\n  background-color: white;\n  align-items: center;\n  text-align: center;\n  float: right;\n  padding-top: 0.9rem;\n  box-shadow: 1px 1px 3px grey;\n  margin-bottom: 0.5rem;\n  font-family: \u2018Roboto\u2019, sans-serif;\n}\n[_nghost-%COMP%]     .mapboxgl-popup-content {\n  padding-bottom: 0rem;\n}\n[_nghost-%COMP%]   mgl-map[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDZDtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FBQ0o7QUFFRTtFQUNFLG9CQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBREoiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICA6Om5nLWRlZXAgLm1hcGJveGdsLXpvb20tbGV2ZWwtZGlzcGxheSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjg3NXJlbTtcbiAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IC45cmVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGdyZXk7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgZm9udC1mYW1pbHk6IOKAmFJvYm90b+KAmSwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWFwYm94Z2wtcG9wdXAtY29udGVudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDByZW07XG4gIH1cblxuICBtZ2wtbWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map