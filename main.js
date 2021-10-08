(self["webpackChunkmap4sci"] = self["webpackChunkmap4sci"] || []).push([["main"],{

/***/ 18:
/*!********************************************************!*\
  !*** ./projects/map4sci/src/app/app-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.module */ 3678);
/* harmony import */ var _pages_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/visualizer/visualizer.module */ 6390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', loadChildren: () => _pages_home_home_module__WEBPACK_IMPORTED_MODULE_0__.HomeModule },
    { path: 'visualizer', loadChildren: () => _pages_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_1__.VisualizerModule }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 9491:
/*!***************************************************!*\
  !*** ./projects/map4sci/src/app/app.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _core_components_analytics_consent_analytics_consent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/analytics-consent/analytics-consent.component */ 1894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_services_analytics_consent_analytics_consent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/analytics-consent/analytics-consent.service */ 1889);
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/header/header.component */ 4480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/footer/footer.component */ 1010);






class AppComponent {
    constructor(consentService) {
        this.consentService = consentService;
        this.clsName = 'm4s-root';
    }
    ngOnInit() {
        this.openTrackingPopup();
    }
    openTrackingPopup() {
        _core_components_analytics_consent_analytics_consent_component__WEBPACK_IMPORTED_MODULE_0__.AnalyticsConsentComponent.open(undefined, {
            duration: this.consentService.hasUserSetConsent ? 3000 : Infinity
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_analytics_consent_analytics_consent_service__WEBPACK_IMPORTED_MODULE_1__.AnalyticsConsentService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["m4s-root"]], hostVars: 2, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 6, vars: 0, consts: [[1, "content-container"], [1, "content"], [1, "outlet-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "m4s-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "m4s-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100vw;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-color: var(--background);\n}\n[_nghost-%COMP%]   m4s-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  justify-content: center;\n  width: 100vw;\n}\n[_nghost-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFBTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcblxuICBtNHMtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 640:
/*!************************************************!*\
  !*** ./projects/map4sci/src/app/app.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-markdown */ 6731);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 18);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 9491);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 5965);
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.module */ 60);
/* harmony import */ var _services_map_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/map-data.service */ 1322);
/* harmony import */ var _shared_components_markdown_modal_markdown_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/markdown-modal/markdown-modal.module */ 2205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_services_map_data_service__WEBPACK_IMPORTED_MODULE_4__.MapDataService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBarModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_11__.MarkdownModule.forRoot({
                loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
                markedOptions: {
                    provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_11__.MarkedOptions,
                    useValue: {
                        gfm: true
                    }
                }
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
            _map_map_module__WEBPACK_IMPORTED_MODULE_3__.MapModule,
            _shared_components_markdown_modal_markdown_modal_module__WEBPACK_IMPORTED_MODULE_5__.MarkdownModalModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBarModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_11__.MarkdownModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        _map_map_module__WEBPACK_IMPORTED_MODULE_3__.MapModule,
        _shared_components_markdown_modal_markdown_modal_module__WEBPACK_IMPORTED_MODULE_5__.MarkdownModalModule] }); })();


/***/ }),

/***/ 1894:
/*!***************************************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/components/analytics-consent/analytics-consent.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsConsentComponent": () => (/* binding */ AnalyticsConsentComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4283);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5428);
/* harmony import */ var _shared_components_base_popup_base_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/base-popup/base-popup.component */ 7121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_analytics_consent_analytics_consent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/analytics-consent/analytics-consent.service */ 1889);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 781);









function AnalyticsConsentComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AnalyticsConsentComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.setConsent(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "I understand");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AnalyticsConsentComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AnalyticsConsentComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.setConsent(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Opt out");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AnalyticsConsentComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AnalyticsConsentComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Dismiss");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AnalyticsConsentComponent extends _shared_components_base_popup_base_popup_component__WEBPACK_IMPORTED_MODULE_0__.BasePopupComponent {
    constructor(ref, consentService, data, cdr) {
        var _a;
        super();
        this.ref = ref;
        this.consentService = consentService;
        this.clsName = 'm4s-analytics-consent-popup';
        this.showGiveConsent = false;
        this.showRescindConsent = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.dismissable = (_a = data.dismissable) !== null && _a !== void 0 ? _a : false;
        this.updateShownButtons();
        this.subscriptions.add(consentService.consentChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(50)).subscribe(() => {
            this.updateShownButtons();
            cdr.markForCheck();
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    dismiss() {
        this.ref.dismiss();
    }
    setConsent(consentGiven) {
        this.consentService.setConsent(consentGiven);
        this.dismiss();
    }
    updateShownButtons() {
        const { consentService: { hasConsent, hasUserSetConsent } } = this;
        this.showGiveConsent = !hasUserSetConsent || !hasConsent;
        this.showRescindConsent = !hasUserSetConsent || hasConsent;
    }
}
AnalyticsConsentComponent.DEFAULT_DATA = { dismissable: false };
AnalyticsConsentComponent.ɵfac = function AnalyticsConsentComponent_Factory(t) { return new (t || AnalyticsConsentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_analytics_consent_analytics_consent_service__WEBPACK_IMPORTED_MODULE_1__.AnalyticsConsentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MAT_SNACK_BAR_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
AnalyticsConsentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AnalyticsConsentComponent, selectors: [["m4s-analytics-consent"]], hostVars: 2, hostBindings: function AnalyticsConsentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.clsName);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [["mat-button", "", "color", "basic", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "basic", 3, "click"]], template: function AnalyticsConsentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "We log usage to improve this service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AnalyticsConsentComponent_button_2_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AnalyticsConsentComponent_button_3_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AnalyticsConsentComponent_button_4_Template, 2, 0, "button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showGiveConsent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showRescindConsent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dismissable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  min-width: 400px;\n  align-items: center;\n  z-index: 9999;\n  color: var(--primary-text);\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 6rem;\n  margin: 1rem;\n  justify-content: center;\n  background-color: var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5dGljcy1jb25zZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBRUEsMEJBQUE7QUFBRjtBQUVFO0VBQ0UsY0FBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLGdDQUFBO0FBRkoiLCJmaWxlIjoiYW5hbHl0aWNzLWNvbnNlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTk7XG5cbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAxLjVyZW07XG4gIH1cblxuICBidXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiA2cmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 8240:
/*!************************************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/components/analytics-consent/analytics-consent.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsConsentModule": () => (/* binding */ AnalyticsConsentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _analytics_consent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics-consent.component */ 1894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class AnalyticsConsentModule {
}
AnalyticsConsentModule.ɵfac = function AnalyticsConsentModule_Factory(t) { return new (t || AnalyticsConsentModule)(); };
AnalyticsConsentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AnalyticsConsentModule });
AnalyticsConsentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnalyticsConsentModule, { declarations: [_analytics_consent_component__WEBPACK_IMPORTED_MODULE_0__.AnalyticsConsentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule], exports: [_analytics_consent_component__WEBPACK_IMPORTED_MODULE_0__.AnalyticsConsentComponent] }); })();


/***/ }),

/***/ 1010:
/*!*****************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/components/footer/footer.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _shared_components_markdown_modal_markdown_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/markdown-modal/markdown-modal.component */ 7124);
/* harmony import */ var _analytics_consent_analytics_consent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analytics-consent/analytics-consent.component */ 1894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_site_configuration_site_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/site-configuration/site-configuration.service */ 5928);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-google-analytics */ 4462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 781);








function FooterComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FooterComponent_ng_container_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.openTermsOfService(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Terms of Use");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function FooterComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FooterComponent_ng_container_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.openPrivacyPolicy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
/**
 * Page footer component.
 */
class FooterComponent {
    /**
     * Creates an instance of footer component.
     *
     * @param siteConfig The loaded site configuration.
     */
    constructor(siteConfig) {
        var _a;
        /** Component css selector. */
        this.clsName = 'm4s-footer';
        const { copyright = '', 'terms-of-service': termsOfService, 'privacy-policy': privacyPolicy } = (_a = siteConfig.get('footer')) !== null && _a !== void 0 ? _a : {};
        this.copyright = copyright;
        this.termsOfService = termsOfService;
        this.privacyPolicy = privacyPolicy;
    }
    /**
     * Cleans up after this component.
     */
    ngOnDestroy() {
        this.dismissAnalyticsConsentPopup();
    }
    /**
     * Opens the terms of service modal.
     */
    openTermsOfService() {
        _shared_components_markdown_modal_markdown_modal_component__WEBPACK_IMPORTED_MODULE_0__.MarkdownModalComponent.open({
            title: 'Terms & Conditions',
            src: this.termsOfService
        }, {
            width: '800px',
            height: '600px'
        });
    }
    /**
     * Opens the privacy policy modal.
     */
    openPrivacyPolicy() {
        _shared_components_markdown_modal_markdown_modal_component__WEBPACK_IMPORTED_MODULE_0__.MarkdownModalComponent.open({
            title: 'Privacy Policy',
            src: this.privacyPolicy
        }, {
            width: '800px',
            height: '600px'
        });
    }
    /**
     * Toggles the analytics opt in/out popup.
     */
    toggleAnalyticsConsent() {
        if (this.consentPopup) {
            this.dismissAnalyticsConsentPopup();
        }
        else {
            this.consentPopup = _analytics_consent_analytics_consent_component__WEBPACK_IMPORTED_MODULE_1__.AnalyticsConsentComponent.open({
                dismissable: true
            });
            this.consentPopup.afterDismissed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(() => {
                this.consentPopup = undefined;
            });
        }
    }
    /**
     * Closes the analytics consent popup if open.
     */
    dismissAnalyticsConsentPopup() {
        var _a, _b;
        (_b = (_a = this.consentPopup) === null || _a === void 0 ? void 0 : _a.dismiss) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.consentPopup = undefined;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_site_configuration_site_configuration_service__WEBPACK_IMPORTED_MODULE_2__.SiteConfigurationService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["m4s-footer"]], hostVars: 2, hostBindings: function FooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 8, vars: 3, consts: [["gaCategory", "footer_interactions", 1, "container"], [1, "copyright"], [1, "filler"], [4, "ngIf"], ["mat-button", "", "gaEvent", "analytics_consent_box_toggled", "disableRipple", "", 1, "analytics", 3, "click"], ["mat-button", "", "gaEvent", "terms_of_service_viewed", "disableRipple", "", 1, "tos", 3, "click"], [1, "divider"], ["mat-button", "", "gaEvent", "privacy_policy_viewed", "disableRipple", "", 1, "privacy", 3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FooterComponent_ng_container_4_Template, 4, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FooterComponent_ng_container_5_Template, 4, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_6_listener() { return ctx.toggleAnalyticsConsent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Opt In/Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.copyright);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.termsOfService);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.privacyPolicy);
    } }, directives: [ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__.GaEventCategoryDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__.GaEventDirective], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  color: var(--primary-text);\n  background-color: var(--primary);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 3rem;\n  max-width: 90rem;\n  padding: 0 1rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .tos[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .privacy[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  border-left: 1px solid var(--primary-text);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUVBLDBCQUFBO0VBQ0EsZ0NBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdNO0VBQ0UsMEJBQUE7QUFEUjtBQUtJO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0FBSE47QUFNSTtFQUNFLFlBQUE7QUFKTiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBtYXgtd2lkdGg6IDkwcmVtO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnRvcywgLnByaXZhY3kge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kaXZpZGVyIHtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIC5maWxsZXIge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 8663:
/*!**************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/components/footer/footer.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-analytics */ 4462);
/* harmony import */ var _shared_components_markdown_modal_markdown_modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/markdown-modal/markdown-modal.module */ 2205);
/* harmony import */ var _analytics_consent_analytics_consent_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analytics-consent/analytics-consent.module */ 8240);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ 1010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);







class FooterModule {
}
FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
FooterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__.NgxGoogleAnalyticsModule,
            _analytics_consent_analytics_consent_module__WEBPACK_IMPORTED_MODULE_1__.AnalyticsConsentModule,
            _shared_components_markdown_modal_markdown_modal_module__WEBPACK_IMPORTED_MODULE_0__.MarkdownModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__.NgxGoogleAnalyticsModule,
        _analytics_consent_analytics_consent_module__WEBPACK_IMPORTED_MODULE_1__.AnalyticsConsentModule,
        _shared_components_markdown_modal_markdown_modal_module__WEBPACK_IMPORTED_MODULE_0__.MarkdownModalModule], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent] }); })();


/***/ }),

/***/ 4480:
/*!*****************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/components/header/header.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_site_configuration_site_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/site-configuration/site-configuration.service */ 5928);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-analytics */ 4462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);





function HeaderComponent_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function HeaderComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_a_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.logoLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function HeaderComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function HeaderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function HeaderComponent_ng_template_5_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.logoIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeaderComponent_ng_template_5_img_0_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.logoIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.logoLabel);
} }
/**
 * Page header component.
 */
class HeaderComponent {
    /**
     * Creates an instance of header component.
     *
     * @param siteConfig The loaded site configuration.
     */
    constructor(siteConfig) {
        var _a, _b;
        /** Component css selector. */
        this.clsName = 'm4s-header';
        const { layout, icon, label = '', 'link-to': linkTo = '' } = (_a = siteConfig.get('header', 'logo')) !== null && _a !== void 0 ? _a : {};
        this.reverseLogoLayout = ((_b = layout === null || layout === void 0 ? void 0 : layout.toLowerCase) === null || _b === void 0 ? void 0 : _b.call(layout)) === 'label-first';
        this.logoIcon = icon;
        this.logoLabel = label;
        this.logoLink = linkTo;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_site_configuration_site_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SiteConfigurationService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["m4s-header"]], hostVars: 2, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 8, vars: 4, consts: [["gaCategory", "header_interactions", 1, "container"], [1, "logo"], ["gaEvent", "logo_link_visited", "target", "_blank", "rel", "noreferrer noopener", 3, "href", 4, "ngIf", "ngIfElse"], ["logoRouterLink", ""], ["logoContent", ""], [1, "filler"], ["gaEvent", "logo_link_visited", "target", "_blank", "rel", "noreferrer noopener", 3, "href"], [4, "ngTemplateOutlet"], ["routerLink", "/home"], ["class", "icon", "alt", "Application Logo", 3, "src", 4, "ngIf"], [1, "label"], ["alt", "Application Logo", 1, "icon", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderComponent_a_2_Template, 2, 2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_ng_template_3_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_ng_template_5_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("reverse-layout", ctx.reverseLogoLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logoLink)("ngIfElse", _r1);
    } }, directives: [ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__.GaEventCategoryDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__.GaEventDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background-color: var(--primary);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 3rem;\n  max-width: 90rem;\n  padding: 0 1rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--primary-text);\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .logo.reverse-layout[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGdDQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUFETjtBQUlJO0VBQ0UsMkJBQUE7QUFGTjtBQUtJO0VBQ0UsWUFBQTtBQUhOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgbWF4LXdpZHRoOiA5MHJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5sb2dvID4gYSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG5cbiAgICAubG9nby5yZXZlcnNlLWxheW91dCA+IGEge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIH1cblxuICAgIC5maWxsZXIge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 7338:
/*!**************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/components/header/header.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-google-analytics */ 4462);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ 4480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);





class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_4__.NgxGoogleAnalyticsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
        ngx_google_analytics__WEBPACK_IMPORTED_MODULE_4__.NgxGoogleAnalyticsModule], exports: [_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent] }); })();


/***/ }),

/***/ 430:
/*!*************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/components/menu/menu.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MenuComponent {
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["m4s-menu"]], decls: 2, vars: 0, template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 7669:
/*!**********************************************************************!*\
  !*** ./projects/map4sci/src/app/core/components/menu/menu.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModule": () => (/* binding */ MenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component */ 430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class MenuModule {
}
MenuModule.ɵfac = function MenuModule_Factory(t) { return new (t || MenuModule)(); };
MenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] }); })();


/***/ }),

/***/ 5965:
/*!******************************************************!*\
  !*** ./projects/map4sci/src/app/core/core.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-google-analytics */ 4462);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 4225);
/* harmony import */ var _shared_components_base_modal_base_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/base-modal/base-modal.module */ 2273);
/* harmony import */ var _shared_components_base_popup_base_popup_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/base-popup/base-popup.module */ 8343);
/* harmony import */ var _components_analytics_consent_analytics_consent_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/analytics-consent/analytics-consent.module */ 8240);
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.module */ 8663);
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.module */ 7338);
/* harmony import */ var _components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/menu.module */ 7669);
/* harmony import */ var _services_mouse_position_collector_mouse_position_collector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/mouse-position-collector/mouse-position-collector.module */ 3609);
/* harmony import */ var _services_site_configuration_site_configuration_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/site-configuration/site-configuration.module */ 1607);
/* harmony import */ var _services_theming_theming_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/theming/theming.module */ 7322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);


















class CoreModule {
    constructor(other) {
        if (other) {
            throw new Error('CoreModule should only be imported once in the AppModule!');
        }
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            // Non-core imports
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_11__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.googleAnalyticsToken, [
                { command: 'set', values: [{ app: 'm4s' }] }
            ]),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_11__.NgxGoogleAnalyticsRouterModule.forRoot(),
            _shared_components_base_modal_base_modal_module__WEBPACK_IMPORTED_MODULE_1__.BaseModalModule.forRoot(),
            _shared_components_base_popup_base_popup_module__WEBPACK_IMPORTED_MODULE_2__.BasePopupModule.forRoot(),
            // Services
            _services_site_configuration_site_configuration_module__WEBPACK_IMPORTED_MODULE_8__.SiteConfigurationModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.siteConfigurationUrl),
            _services_theming_theming_module__WEBPACK_IMPORTED_MODULE_9__.ThemingModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultTheme),
            _services_mouse_position_collector_mouse_position_collector_module__WEBPACK_IMPORTED_MODULE_7__.MousePositionCollectorModule.forRoot(),
            // Components
            _components_analytics_consent_analytics_consent_module__WEBPACK_IMPORTED_MODULE_3__.AnalyticsConsentModule,
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__.HeaderModule,
            _components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule
        ], 
        // Module forwarding
        _components_analytics_consent_analytics_consent_module__WEBPACK_IMPORTED_MODULE_3__.AnalyticsConsentModule,
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__.HeaderModule,
        _components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CoreModule, { imports: [ngx_google_analytics__WEBPACK_IMPORTED_MODULE_11__.NgxGoogleAnalyticsModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_11__.NgxGoogleAnalyticsRouterModule, _shared_components_base_modal_base_modal_module__WEBPACK_IMPORTED_MODULE_1__.BaseModalModule, _shared_components_base_popup_base_popup_module__WEBPACK_IMPORTED_MODULE_2__.BasePopupModule, _services_site_configuration_site_configuration_module__WEBPACK_IMPORTED_MODULE_8__.SiteConfigurationModule, _services_theming_theming_module__WEBPACK_IMPORTED_MODULE_9__.ThemingModule, _services_mouse_position_collector_mouse_position_collector_module__WEBPACK_IMPORTED_MODULE_7__.MousePositionCollectorModule, 
        // Components
        _components_analytics_consent_analytics_consent_module__WEBPACK_IMPORTED_MODULE_3__.AnalyticsConsentModule,
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__.HeaderModule,
        _components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule], exports: [
        // Module forwarding
        _components_analytics_consent_analytics_consent_module__WEBPACK_IMPORTED_MODULE_3__.AnalyticsConsentModule,
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__.HeaderModule,
        _components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule] }); })();


/***/ }),

/***/ 1889:
/*!***********************************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/services/analytics-consent/analytics-consent.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsConsentService": () => (/* binding */ AnalyticsConsentService)
/* harmony export */ });
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-analytics */ 4462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class AnalyticsConsentService {
    constructor(window, { trackingCode }) {
        this.window = window;
        this.consentChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
        this.consentGiven = this.loadConsentFromLocalStorage();
        this.gaTrackingCode = trackingCode;
        this.disableGoogleTracking(!this.hasConsent);
        this.consentChanged.next(this.hasConsent);
    }
    get hasConsent() {
        return this.consentGiven !== false;
    }
    get hasUserSetConsent() {
        return this.consentGiven !== undefined;
    }
    setConsent(consentGiven) {
        this.consentGiven = consentGiven;
        this.saveConsentInLocalStorage(consentGiven);
        this.disableGoogleTracking(!consentGiven);
        this.consentChanged.next(consentGiven);
    }
    loadConsentFromLocalStorage() {
        const storageValue = localStorage.getItem(AnalyticsConsentService.LOCAL_STORAGE_CONSENT_KEY);
        return storageValue == null ? undefined : storageValue.toLowerCase() === 'true';
    }
    saveConsentInLocalStorage(consentGiven) {
        localStorage.setItem(AnalyticsConsentService.LOCAL_STORAGE_CONSENT_KEY, `${consentGiven}`);
    }
    disableGoogleTracking(disabled = true) {
        if (this.window) {
            this.window[`ga-disable-${this.gaTrackingCode}`] = disabled;
        }
    }
}
AnalyticsConsentService.LOCAL_STORAGE_CONSENT_KEY = 'ALLOW_TELEMETRY';
AnalyticsConsentService.ɵfac = function AnalyticsConsentService_Factory(t) { return new (t || AnalyticsConsentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__.NGX_WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__.NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN)); };
AnalyticsConsentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnalyticsConsentService, factory: AnalyticsConsentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3609:
/*!************************************************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/services/mouse-position-collector/mouse-position-collector.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MousePositionCollectorModule": () => (/* binding */ MousePositionCollectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-google-analytics */ 4462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2516);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);






function collectMousePosition(el, ga) {
    const formatData = (event) => {
        const { clientWidth, clientHeight } = el;
        const { clientX, clientY } = event;
        const points = [clientX, clientY, clientWidth, clientHeight];
        return points.join('_');
    };
    const events = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(el, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.throttleTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(formatData));
    return events.subscribe(data => ga.event('webpage', 'mousemove', data));
}
function mousePositionCollectorInitializationFactory(document, ga) {
    return () => {
        if (document) {
            collectMousePosition(document.body, ga);
        }
    };
}
class MousePositionCollectorModule {
    static forRoot() {
        return {
            ngModule: MousePositionCollectorModule,
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__.APP_INITIALIZER,
                    useFactory: mousePositionCollectorInitializationFactory,
                    deps: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__.GoogleAnalyticsService],
                    multi: true
                }
            ]
        };
    }
}
MousePositionCollectorModule.ɵfac = function MousePositionCollectorModule_Factory(t) { return new (t || MousePositionCollectorModule)(); };
MousePositionCollectorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MousePositionCollectorModule });
MousePositionCollectorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});


/***/ }),

/***/ 1607:
/*!************************************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/services/site-configuration/site-configuration.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteConfigurationModule": () => (/* binding */ SiteConfigurationModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _site_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-configuration.service */ 5928);



/**
 * Factory function for initializing site configuration.
 *
 * @param config Configuration service.
 * @param url Url to load configuration from.
 * @returns An initialization function.
 */
function initializeSiteConfigurationFactory(config, url) {
    return () => config.loadYaml(url);
}
class SiteConfigurationModule {
    /**
     * Configures the site configuration loading.
     *
     * @param url Url of site configuration.
     * @returns This module with the necessary providers.
     */
    static forRoot(url) {
        return {
            ngModule: SiteConfigurationModule,
            providers: [
                {
                    provide: _site_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SITE_CONFIGURATION_URL,
                    useValue: url
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
                    useFactory: initializeSiteConfigurationFactory,
                    deps: [_site_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SiteConfigurationService, _site_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SITE_CONFIGURATION_URL],
                    multi: true
                }
            ]
        };
    }
}
SiteConfigurationModule.ɵfac = function SiteConfigurationModule_Factory(t) { return new (t || SiteConfigurationModule)(); };
SiteConfigurationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SiteConfigurationModule });
SiteConfigurationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});


/***/ }),

/***/ 5928:
/*!*************************************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/services/site-configuration/site-configuration.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SITE_CONFIGURATION_URL": () => (/* binding */ SITE_CONFIGURATION_URL),
/* harmony export */   "SiteConfigurationService": () => (/* binding */ SiteConfigurationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3413);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);






/**
 * Injection token for the url of the site configuration file.
 */
const SITE_CONFIGURATION_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('URL for site configuration');
/**
 * Provides access to site configuration loaded during app initialization.
 *
 * @template T Optional type useful for specifiying the entire or parts of the configuration's shape.
 */
class SiteConfigurationService {
    /**
     * Creates an instance of site configuration service.
     *
     * @param http Service used to load configuration yaml files.
     */
    constructor(http) {
        this.http = http;
        /** Emits whenever a new configuration is loaded. */
        this.configurationLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        /** Loaded site configuration. */
        this.configuration = {};
    }
    get(...keys) {
        return keys.reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], this.configuration);
    }
    /**
     * Fetches the entire site configuration object.
     *
     * @returns The site configuration.
     */
    getConfigObject() {
        return this.configuration;
    }
    /**
     * Loads and sets the site configuration from a yaml file loaded from an url.
     *
     * @param url Url of the yaml file.
     * @returns Observable of the loaded and parsed yaml.
     */
    loadYaml(url) {
        return this.http.get(url, { responseType: 'text' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(rawYaml => this.parseAndSetConfig(rawYaml, url)));
    }
    /**
     * Parses the yaml and sets it as the new configuration.
     *
     * @param rawYaml Raw yaml text.
     * @param url Url from which the yaml was loaded.
     * @returns The parsed yaml.
     */
    parseAndSetConfig(rawYaml, url) {
        var _a;
        const yaml = (_a = (0,js_yaml__WEBPACK_IMPORTED_MODULE_0__.load)(rawYaml, { filename: url })) !== null && _a !== void 0 ? _a : {};
        if (typeof yaml !== 'object') {
            const message = `Expected site configuration to be an object, got: ${yaml}`;
            throw new Error(message);
        }
        this.configuration = yaml;
        this.configurationLoaded.next(this.configuration);
        return yaml;
    }
}
SiteConfigurationService.ɵfac = function SiteConfigurationService_Factory(t) { return new (t || SiteConfigurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
SiteConfigurationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SiteConfigurationService, factory: SiteConfigurationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7322:
/*!**************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/services/theming/theming.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemingModule": () => (/* binding */ ThemingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _site_configuration_site_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../site-configuration/site-configuration.service */ 5928);
/* harmony import */ var _theming_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theming.service */ 3740);





function themingInitializationFactory(siteConfig, themingService) {
    return () => siteConfig.configurationLoaded.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => themingService.initialize()));
}
class ThemingModule {
    static forRoot(defaultTheme) {
        return {
            ngModule: ThemingModule,
            providers: [
                {
                    provide: _theming_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_THEME,
                    useValue: defaultTheme
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.APP_INITIALIZER,
                    useFactory: themingInitializationFactory,
                    deps: [_site_configuration_site_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SiteConfigurationService, _theming_service__WEBPACK_IMPORTED_MODULE_1__.ThemingService],
                    multi: true
                }
            ]
        };
    }
}
ThemingModule.ɵfac = function ThemingModule_Factory(t) { return new (t || ThemingModule)(); };
ThemingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ThemingModule });
ThemingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});


/***/ }),

/***/ 3740:
/*!***************************************************************************!*\
  !*** ./projects/map4sci/src/app/core/services/theming/theming.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_THEME": () => (/* binding */ DEFAULT_THEME),
/* harmony export */   "ThemingService": () => (/* binding */ ThemingService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _site_configuration_site_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../site-configuration/site-configuration.service */ 5928);





const DEFAULT_THEME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Default theme');
class ThemingService {
    constructor(defaultTheme, document, sanitizer, siteConfig) {
        this.defaultTheme = defaultTheme;
        this.document = document;
        this.sanitizer = sanitizer;
        this.siteConfig = siteConfig;
    }
    initialize() {
        const { document, sanitizer } = this;
        if (!this.styleEl && document) {
            const styleEl = this.styleEl = document.createElement('style');
            const rule = sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.STYLE, this.getThemingStyleRule());
            styleEl.appendChild(document.createTextNode(''));
            document.head.appendChild(styleEl);
            if (rule && styleEl.sheet) {
                styleEl.sheet.insertRule(rule);
            }
        }
    }
    getThemingStyleRule() {
        var _a;
        const { defaultTheme, siteConfig } = this;
        const { primary, 'primary-text': primaryText, background, header, body, 'link-text': linkText } = (_a = siteConfig.get('theming')) !== null && _a !== void 0 ? _a : {};
        return `:root {
      --primary: ${primary !== null && primary !== void 0 ? primary : defaultTheme.primary};
      --primary-text: ${primaryText !== null && primaryText !== void 0 ? primaryText : defaultTheme['primary-text']};
      --background: ${background !== null && background !== void 0 ? background : defaultTheme.background};
      --header: ${header !== null && header !== void 0 ? header : defaultTheme.header};
      --body: ${body !== null && body !== void 0 ? body : defaultTheme.body};
      --link-text: ${linkText !== null && linkText !== void 0 ? linkText : defaultTheme['link-text']};
    }`;
    }
}
ThemingService.ɵfac = function ThemingService_Factory(t) { return new (t || ThemingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DEFAULT_THEME), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_site_configuration_site_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SiteConfigurationService)); };
ThemingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemingService, factory: ThemingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5906:
/*!******************************************************!*\
  !*** ./projects/map4sci/src/app/map/map-defaults.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultInitialZoom": () => (/* binding */ defaultInitialZoom),
/* harmony export */   "blankStyle": () => (/* binding */ blankStyle),
/* harmony export */   "defaultMinimapOptions": () => (/* binding */ defaultMinimapOptions),
/* harmony export */   "defaultNodes": () => (/* binding */ defaultNodes),
/* harmony export */   "defaultEdges": () => (/* binding */ defaultEdges),
/* harmony export */   "defaultTextOverlapEnabledZoom": () => (/* binding */ defaultTextOverlapEnabledZoom),
/* harmony export */   "defaultMapCenter": () => (/* binding */ defaultMapCenter)
/* harmony export */ });
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
    id: 'maplibregl-minimap',
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

/***/ 4626:
/*!*******************************************************!*\
  !*** ./projects/map4sci/src/app/map/map.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maplibre-gl */ 6895);
/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maplibre_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-defaults */ 5906);
/* harmony import */ var _minimap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minimap */ 8242);
/* harmony import */ var _zoom_level_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zoom-level.control */ 9033);
/* harmony import */ var ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-maplibre-gl */ 5298);







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
        this.mapStyle = _map_defaults__WEBPACK_IMPORTED_MODULE_1__.blankStyle;
        this.currentZoom = _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultInitialZoom;
        this.mapMarkers = [];
        this.initialZoomConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultInitialZoom;
        this.minimapConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultMinimapOptions;
        this.edgesConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultEdges;
        this.nodesConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultNodes;
        this.textOverlapEnabledZoomConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultTextOverlapEnabledZoom;
        this.mapCenterConfig = _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultMapCenter;
        // Outputs
        this.nodeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.edgeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.panChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.nodeZoomIndex = 0;
        this.edgeZoomIndex = 0;
        this.textOverlapEnabled = false;
        // These allow the layer tags to be much more readable.
        this.currentNodeFormula = ['at', ['get', 'level'], ['literal', this.nodesConfig]];
        this.currentEdgeFormula = ['get', 'zoom', ['at', ['get', 'level'], ['literal', this.edgesConfig]]];
        this.edgeFormula = ['at', ['get', 'level'], ['literal', this.edgesConfig]];
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
        this.initialZoomConfig = initialZoom !== null && initialZoom !== void 0 ? initialZoom : _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultInitialZoom;
    }
    set MinimapConfig(options) {
        this.minimapConfig = options !== null && options !== void 0 ? options : _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultMinimapOptions;
    }
    set EdgesConfig(edges) {
        this.edgesConfig = edges !== null && edges !== void 0 ? edges : _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultEdges;
    }
    set NodesConfig(nodes) {
        this.nodesConfig = nodes !== null && nodes !== void 0 ? nodes : _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultNodes;
    }
    set TextOverlapEnabledZoomConfig(zoom) {
        this.textOverlapEnabledZoomConfig = zoom !== null && zoom !== void 0 ? zoom : _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultTextOverlapEnabledZoom;
    }
    set MapCenterConfig(mapCenter) {
        this.mapCenterConfig = mapCenter !== null && mapCenter !== void 0 ? mapCenter : _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultMapCenter;
    }
    ngOnChanges() {
        this.addMapMarkers(this.mapMarkers);
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
        if (this.initialZoomConfig !== _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultInitialZoom) {
            map.setZoom(this.initialZoomConfig);
        }
        this.currentZoom = map.getZoom();
        // Use the same map center for the minimap unless the minimapOptions have been customized.
        if (this.minimapConfig === _map_defaults__WEBPACK_IMPORTED_MODULE_1__.defaultMinimapOptions) {
            this.minimapConfig.center = this.mapCenterConfig;
        }
        // ShowCompass off to disable rotation.
        map.addControl(new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__.NavigationControl({ showCompass: false }), 'top-right');
        map.addControl(new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__.FullscreenControl({}), 'top-right');
        if (this.nodeFeatures.features.length === 0) {
            console.warn('0 node features.');
        }
        else if (this.clusterFeatures.features.length === 0) {
            console.warn('0 cluster features');
        }
        else {
            map.addControl(new _minimap__WEBPACK_IMPORTED_MODULE_2__.MiniMap({ nodes: this.nodeFeatures, clusters: this.clusterFeatures }, this.minimapConfig), 'bottom-right');
        }
        map.addControl(new _zoom_level_control__WEBPACK_IMPORTED_MODULE_3__.ZoomLevelControl(), 'bottom-right');
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
            var _a;
            if (this.map) {
                const popup = new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__.Popup({
                    closeOnClick: true,
                    closeOnMove: true,
                    closeButton: false,
                    className: 'map-marker-popup'
                }).setHTML(`<h3>${marker.title}</h3>`);
                new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__.Marker((_a = marker.config) !== null && _a !== void 0 ? _a : {})
                    .setLngLat(marker.coordinates)
                    .setPopup(popup)
                    .addTo(this.map);
            }
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
            new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__.Popup({
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
                // Along with property values, you can pass along a formatting function in form of ['propertyName', function]
                // This checks if there is one, if there is it uses that function to format the value of the property before
                // concatenating it.
            }
            else if (typeof (element) === 'string') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                html += description[element];
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
MapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["m4s-map"]], inputs: { mapStyle: "mapStyle", edgeFeatures: "edgeFeatures", nodeFeatures: "nodeFeatures", clusterFeatures: "clusterFeatures", boundaryFeatures: "boundaryFeatures", currentZoom: "currentZoom", mapMarkers: "mapMarkers", InitialZoomConfig: ["initialZoomConfig", "InitialZoomConfig"], MinimapConfig: ["minimapConfig", "MinimapConfig"], EdgesConfig: ["edgesConfig", "EdgesConfig"], NodesConfig: ["nodesConfig", "NodesConfig"], TextOverlapEnabledZoomConfig: ["textOverlapEnabledZoomConfig", "TextOverlapEnabledZoomConfig"], MapCenterConfig: ["mapCenterConfig", "MapCenterConfig"] }, outputs: { nodeClick: "nodeClick", edgeClick: "edgeClick", zoomChange: "zoomChange", panChange: "panChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 83, consts: [[3, "zoom", "center", "renderWorldCopies", "mapLoad"], ["id", "edges", 3, "data"], ["id", "nodes", 3, "data"], ["id", "clusters", 3, "data"], ["id", "boundaries", 3, "data"], ["id", "clusters", "source", "clusters", "type", "fill", 3, "paint"], ["id", "boundaries", "source", "boundaries", "type", "line", "minZoom", "2", 3, "paint"], ["id", "edges", "source", "edges", "type", "line", 3, "paint", "filter", "layerClick"], ["id", "edges_border", "source", "edges", "type", "line", 3, "paint", "filter"], ["id", "nodes", "source", "nodes", "type", "circle", 3, "paint", "filter", "layerClick"], ["id", "node_labels", "source", "nodes", "type", "symbol", 3, "layout", "filter"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mgl-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mapLoad", function MapComponent_Template_mgl_map_mapLoad_0_listener($event) { return ctx.onMapLoad($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mgl-geojson-source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mgl-geojson-source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "mgl-geojson-source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "mgl-geojson-source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mgl-layer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "mgl-layer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mgl-layer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("layerClick", function MapComponent_Template_mgl_layer_layerClick_7_listener($event) { return ctx.edgeClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mgl-layer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mgl-layer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("layerClick", function MapComponent_Template_mgl_layer_layerClick_9_listener($event) { return ctx.nodeClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "mgl-layer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx.mapStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("zoom", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c0, ctx.currentZoom))("center", ctx.mapCenterConfig)("renderWorldCopies", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.edgeFeatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.nodeFeatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.clusterFeatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.boundaryFeatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](23, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](21, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](22, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](41, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](34, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c5)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](32, _c7, ctx.edgeFormula)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](37, _c9, ctx.edgeFormula), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](39, _c10, ctx.edgeFormula)))("filter", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](47, _c13, ctx.currentZoom, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](45, _c12, ctx.edgeFormula)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](58, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](50, _c14, ctx.edgeFormula), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](52, _c15, ctx.edgeFormula), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](54, _c16, ctx.edgeFormula), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](56, _c9, ctx.edgeFormula)))("filter", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](65, _c13, ctx.currentZoom, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](63, _c12, ctx.edgeFormula)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("paint", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](73, _c19, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](71, _c18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](69, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](68, _c5)))))("filter", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](75, _c13, ctx.currentZoom, ctx.currentEdgeFormula));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("layout", ctx.nodeLabelsLayout)("filter", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](80, _c13, ctx.currentZoom, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](78, _c12, ctx.currentNodeFormula)));
    } }, directives: [ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_5__.MapComponent, ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_5__.GeoJSONSourceComponent, ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_5__.LayerComponent], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%]     .maplibregl-zoom-level-display {\n  margin-right: 0.875rem;\n  font-size: 0.875rem;\n  border-radius: 50%;\n  width: 3rem;\n  height: 3rem;\n  background-color: white;\n  align-items: center;\n  text-align: center;\n  float: right;\n  padding-top: 0.9rem;\n  box-shadow: 1px 1px 3px grey;\n  margin-bottom: 0.5rem;\n  font-family: \u2018Roboto\u2019, sans-serif;\n}\n[_nghost-%COMP%]     .maplibregl-popup-content {\n  padding-bottom: 0rem;\n}\n[_nghost-%COMP%]   mgl-map[_ngcontent-%COMP%] {\n  height: calc(100% - 6rem);\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDZDtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FBQ0o7QUFFRTtFQUNFLG9CQUFBO0FBQUo7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQURKIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgOjpuZy1kZWVwIC5tYXBsaWJyZWdsLXpvb20tbGV2ZWwtZGlzcGxheSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjg3NXJlbTtcbiAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IC45cmVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGdyZXk7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgZm9udC1mYW1pbHk6IOKAmFJvYm90b+KAmSwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWFwbGlicmVnbC1wb3B1cC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcbiAgfVxuXG4gIG1nbC1tYXAge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNnJlbSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAzcmVtO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 60:
/*!****************************************************!*\
  !*** ./projects/map4sci/src/app/map/map.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapModule": () => (/* binding */ MapModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-maplibre-gl */ 5298);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component */ 4626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class MapModule {
}
MapModule.ɵfac = function MapModule_Factory(t) { return new (t || MapModule)(); };
MapModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MapModule });
MapModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_3__.NgxMapLibreGLModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MapModule, { declarations: [_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        ngx_maplibre_gl__WEBPACK_IMPORTED_MODULE_3__.NgxMapLibreGLModule], exports: [_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent] }); })();


/***/ }),

/***/ 2143:
/*!*********************************************!*\
  !*** ./projects/map4sci/src/app/map/map.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_FEATURES": () => (/* binding */ EMPTY_FEATURES),
/* harmony export */   "EMPTY_DATASET": () => (/* binding */ EMPTY_DATASET)
/* harmony export */ });
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

/***/ 8242:
/*!*************************************************!*\
  !*** ./projects/map4sci/src/app/map/minimap.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiniMap": () => (/* binding */ MiniMap)
/* harmony export */ });
/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maplibre-gl */ 6895);
/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maplibre_gl__WEBPACK_IMPORTED_MODULE_0__);

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
        const miniMap = this.miniMap = new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__.Map({
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
    onRemove(_parentMap) {
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
        const bounds = new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__.LngLatBounds();
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
        levels.forEach(zoom => {
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
        container.className = 'maplibregl-ctrl-minimap maplibregl-ctrl';
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

/***/ 9033:
/*!************************************************************!*\
  !*** ./projects/map4sci/src/app/map/zoom-level.control.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoomLevelControl": () => (/* binding */ ZoomLevelControl)
/* harmony export */ });
class ZoomLevelControl {
    onAdd(map) {
        this.map = map;
        this.container = document.createElement('div');
        this.container.className = 'maplibregl-zoom-level-display';
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
        map.off('zoom', this.zoomCallback);
        (_b = (_a = this.container) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.container);
    }
}


/***/ }),

/***/ 881:
/*!********************************************************************!*\
  !*** ./projects/map4sci/src/app/pages/home/home-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 8614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8614:
/*!***************************************************************!*\
  !*** ./projects/map4sci/src/app/pages/home/home.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ 6731);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);





const _c0 = ["markdown"];
const _c1 = ["visualizer"];
class HomeComponent {
    constructor() {
        this.clsName = 'm4s-home';
    }
    attachVisualizer() {
        const { visualizer: { nativeElement: visualizer }, markdown: { nativeElement: markdown } } = this;
        const anchor = markdown.querySelector('.visualizer-anchor');
        markdown.insertBefore(visualizer, anchor);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["m4s-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.markdown = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.visualizer = _t.first);
    } }, hostVars: 2, hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 9, vars: 0, consts: [["src", "assets/bg-hero.png", 1, "banner"], [1, "content"], ["src", "assets/pages/about.md", 1, "index", 3, "ready"], ["markdown", ""], [1, "visualizer-image"], ["visualizer", ""], ["src", "assets/img-map.png"], ["mat-button", "", "routerLink", "/visualizer", 1, "visualizer-open"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "markdown", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function HomeComponent_Template_markdown_ready_2_listener() { return ctx.attachVisualizer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Open Visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n}\n[_nghost-%COMP%]   markdown[_ngcontent-%COMP%] {\n  display: block;\n  padding-left: 7rem;\n  padding-right: 7rem;\n  padding-top: 1rem;\n}\n[_nghost-%COMP%]   .banner[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 90rem;\n  height: 30rem;\n  margin: auto;\n  padding-top: 3rem;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: white;\n  max-width: 1328px;\n  width: 66rem;\n  position: relative;\n  margin-top: 10rem;\n  margin-bottom: 3rem;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .visualizer-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  float: right;\n  padding-left: 1rem;\n  width: 50%;\n}\n[_nghost-%COMP%]   .visualizer-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: 1px solid gray;\n}\n[_nghost-%COMP%]   .visualizer-image[_ngcontent-%COMP%]   .visualizer-open[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  transition: color 0.3s;\n  color: var(--primary-text);\n  background-color: var(--primary);\n}\n[_nghost-%COMP%]   .visualizer-image[_ngcontent-%COMP%]   .visualizer-open[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZKO0FBSUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBRk47QUFLSTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FBSE47QUFJTTtFQUNFLDBCQUFBO0FBRlIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIG1hcmtkb3duIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDdyZW07XG4gICAgcGFkZGluZy1yaWdodDogN3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgfVxuXG4gIC5iYW5uZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogOTByZW07XG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWF4LXdpZHRoOiAxMzI4cHg7XG4gICAgd2lkdGg6IDY2cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAudmlzdWFsaXplci1pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgd2lkdGg6IDUwJTtcblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgfVxuXG4gICAgLnZpc3VhbGl6ZXItb3BlbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 3678:
/*!************************************************************!*\
  !*** ./projects/map4sci/src/app/pages/home/home.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 6731);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 881);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 8614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule] }); })();


/***/ }),

/***/ 4747:
/*!********************************************************************************!*\
  !*** ./projects/map4sci/src/app/pages/visualizer/visualizer-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualizerRoutingModule": () => (/* binding */ VisualizerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _visualizer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizer.component */ 2848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{
        path: '',
        component: _visualizer_component__WEBPACK_IMPORTED_MODULE_0__.VisualizerComponent
    }];
class VisualizerRoutingModule {
}
VisualizerRoutingModule.ɵfac = function VisualizerRoutingModule_Factory(t) { return new (t || VisualizerRoutingModule)(); };
VisualizerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VisualizerRoutingModule });
VisualizerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VisualizerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2848:
/*!***************************************************************************!*\
  !*** ./projects/map4sci/src/app/pages/visualizer/visualizer.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualizerComponent": () => (/* binding */ VisualizerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4283);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../map/map */ 2143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_map_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/map-data.service */ 1322);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-google-analytics */ 4462);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../map/map.component */ 4626);


















function VisualizerComponent_mat_form_field_5_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataset_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("gaLabel", dataset_r6.name)("value", dataset_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", dataset_r6.name, " ");
} }
function VisualizerComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Select data set ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function VisualizerComponent_mat_form_field_5_Template_mat_select_selectionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.mapDataSwitcherChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VisualizerComponent_mat_form_field_5_mat_option_4_Template, 2, 3, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r1.mapData.datasetDirectory$));
} }
function VisualizerComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("gaLabel", option_r9)("value", option_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r9, " ");
} }
function VisualizerComponent_m4s_map_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "m4s-map", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nodeClick", function VisualizerComponent_m4s_map_25_Template_m4s_map_nodeClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.logMouseEvent("node", $event); })("edgeClick", function VisualizerComponent_m4s_map_25_Template_m4s_map_edgeClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.logMouseEvent("edge", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("edgeFeatures", ctx_r4.dataset.edges)("nodeFeatures", ctx_r4.dataset.nodes)("clusterFeatures", ctx_r4.dataset.cluster)("boundaryFeatures", ctx_r4.dataset.boundary)("edgesConfig", ctx_r4.dataset.config == null ? null : ctx_r4.dataset.config.edgeConfig)("nodesConfig", ctx_r4.dataset.config == null ? null : ctx_r4.dataset.config.nodeConfig)("initialZoomConfig", ctx_r4.dataset.config == null ? null : ctx_r4.dataset.config.initialZoom)("mapCenterConfig", ctx_r4.dataset.config == null ? null : ctx_r4.dataset.config.mapCenter)("textOverlapEnabledZoomConfig", ctx_r4.dataset.config == null ? null : ctx_r4.dataset.config.textOverlapEnabledZoom)("minimapConfig", ctx_r4.dataset.config == null ? null : ctx_r4.dataset.config.minimapConfig)("mapMarkers", ctx_r4.mapPins);
} }
class VisualizerComponent {
    constructor(mapData, ga, cdr) {
        this.mapData = mapData;
        this.ga = ga;
        this.events = [];
        this.opened = true;
        this.iconOpened = true;
        this.dataset = _map_map__WEBPACK_IMPORTED_MODULE_0__.EMPTY_DATASET;
        this.filteredNodes = _map_map__WEBPACK_IMPORTED_MODULE_0__.EMPTY_DATASET.nodes;
        this.filter = '';
        this.options = [];
        this.mapPins = [];
        this.datasetControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        const sub = mapData.dataset$.subscribe(ds => {
            this.dataset = ds;
            this.filteredNodes = ds.nodes;
            this.options = ds.nodes.features.map(n => { var _a; return (_a = n.properties) === null || _a === void 0 ? void 0 : _a.label; });
            cdr.markForCheck();
            if (this.searchTerm) {
                this.search(this.searchTerm);
            }
        });
        this.subscriptions.add(sub);
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
    get buttonTitle() {
        const { searchTerm, filter } = this;
        if (!searchTerm && filter === '') {
            return 'Search';
        }
        if (searchTerm !== '' && filter === searchTerm) {
            return 'Clear';
        }
        return 'Search';
    }
    get buttonDisabled() {
        if (!this.searchTerm && this.filter !== this.searchTerm) {
            return true;
        }
        return false;
    }
    ngOnInit() {
        this.filteredOptions = this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => this._filter(value)));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    mapDataSwitcherChange(dataset) {
        this.mapData.setDataset(dataset);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    searchButtonClick() {
        const { searchTerm } = this;
        // Remove all markers before searching
        const markers = document.querySelectorAll('.maplibregl-marker');
        for (const marker of markers) {
            marker.remove();
        }
        if (this.buttonTitle === 'Clear' && searchTerm) {
            this.mapPins = [];
            this.filter = '';
            this.searchTerm = '';
            return;
        }
        if (!searchTerm) {
            return;
        }
        this.search(searchTerm);
    }
    search(searchTerm) {
        const { nodes } = this.dataset;
        const filteredNodes = nodes.features.filter(n => { var _a; return (_a = n.properties) === null || _a === void 0 ? void 0 : _a.label.toLowerCase().includes(searchTerm.toLowerCase()); });
        this.filter = searchTerm;
        const mapPins = filteredNodes.map((n) => {
            var _a;
            const x = {
                coordinates: n.geometry.coordinates,
                title: (_a = n.properties) === null || _a === void 0 ? void 0 : _a.label
            };
            return x;
        });
        this.mapPins = [...mapPins];
    }
    toggle() {
        const { opened } = this;
        if (opened) {
            this.opened = false;
        }
        else {
            this.opened = true;
        }
    }
    logMouseEvent(name, event) {
        this.ga.event(`${name}_${event.type}`, 'map_interaction', event.lngLat.toString());
    }
}
VisualizerComponent.ɵfac = function VisualizerComponent_Factory(t) { return new (t || VisualizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_map_data_service__WEBPACK_IMPORTED_MODULE_1__.MapDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_8__.GoogleAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
VisualizerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VisualizerComponent, selectors: [["m4s-visualizer"]], decls: 26, vars: 18, consts: [[1, "map-wrapper"], [1, "sidenav-container"], ["mode", "side", "gaCategory", "sidebar_interactions", 3, "opened", "openedChange"], ["sidenav", ""], ["appearance", "fill", "gaEvent", "data_set_selection_started", "gaBind", "focus", "class", "form-field", 4, "ngIf"], ["appearance", "fill", 1, "w-100"], ["type", "text", "placeholder", "Search term", "aria-label", "Search field", "matInput", "", "gaEvent", "search_started", "gaBind", "focus", 3, "ngModel", "formControl", "matAutocomplete", "ngModelChange"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], ["gaEvent", "search_autocomplete_value_selected", 3, "gaLabel", "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "gaEvent", "search_button_clicked", 1, "search-button", 3, "gaLabel", "disabled", "click"], ["gaCategory", "sidebar_toggle_interactions"], ["mat-button", "", "gaEvent", "opened", 1, "drawer-toggle", 3, "click"], ["aria-hidden", "false", "aria-label", "Open side drawer", 1, "expand-collapse-icon"], ["mat-button", "", "gaEvent", "closed", 1, "drawer-toggle", 3, "click"], ["aria-hidden", "false", "aria-label", "Close side drawer", 1, "expand-collapse-icon"], [3, "edgeFeatures", "nodeFeatures", "clusterFeatures", "boundaryFeatures", "edgesConfig", "nodesConfig", "initialZoomConfig", "mapCenterConfig", "textOverlapEnabledZoomConfig", "minimapConfig", "mapMarkers", "nodeClick", "edgeClick", 4, "ngIf"], ["appearance", "fill", "gaEvent", "data_set_selection_started", "gaBind", "focus", 1, "form-field"], ["value", "test", 1, "dataset-selector", 3, "selectionChange"], ["gaEvent", "data_set_selected", 3, "gaLabel", "value", 4, "ngFor", "ngForOf"], ["gaEvent", "data_set_selected", 3, "gaLabel", "value"], ["gaEvent", "search_autocomplete_value_selected", 3, "gaLabel", "value"], [3, "edgeFeatures", "nodeFeatures", "clusterFeatures", "boundaryFeatures", "edgesConfig", "nodesConfig", "initialZoomConfig", "mapCenterConfig", "textOverlapEnabledZoomConfig", "minimapConfig", "mapMarkers", "nodeClick", "edgeClick"]], template: function VisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("openedChange", function VisualizerComponent_Template_mat_sidenav_openedChange_2_listener($event) { return ctx.opened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, VisualizerComponent_mat_form_field_5_Template, 6, 3, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Search...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function VisualizerComponent_Template_input_ngModelChange_10_listener($event) { return ctx.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-autocomplete", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, VisualizerComponent_mat_option_13_Template, 2, 3, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisualizerComponent_Template_button_click_15_listener() { return ctx.searchButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisualizerComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); _r0.toggle(); return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " arrow_right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisualizerComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); _r0.toggle(); return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " arrow_left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, VisualizerComponent_m4s_map_25_Template, 1, 11, "m4s-map", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 14, ctx.mapData.datasetDirectory$).length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchTerm)("formControl", ctx.searchControl)("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 16, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("gaLabel", ctx.buttonTitle)("disabled", ctx.buttonDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.buttonTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("hidden", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("hidden", !ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.displayMap);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenav, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_8__.GaEventCategoryDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_8__.GaEventFormInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_8__.GaEventDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _map_map_component__WEBPACK_IMPORTED_MODULE_2__.MapComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".mat-form-field-flex {\n  background: none !important;\n}\n    .mat-form-field-flex {\n  background-color: var(--background);\n}\n  .mat-drawer-inner-container {\n  padding: 0.5rem;\n}\n.dataset-selector[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  width: 100%;\n}\n.form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.map-wrapper[_ngcontent-%COMP%], .sidenav-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 6rem);\n}\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  background-color: var(--background);\n  border: none;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\nmat-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\nmat-sidenav-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: relative;\n  top: 3rem;\n}\nmat-sidenav-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 1.5rem;\n  padding: 0.25rem;\n  height: 3rem;\n  border: none;\n  background-color: var(--background);\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n  outline: none;\n  cursor: pointer;\n}\nmat-sidenav-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   button.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.search-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #286f94;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwyQkFBQTtBQUFKO0FBR0U7RUFDRSxtQ0FBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0FBRko7QUFNQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQUhGO0FBTUE7RUFDRSxXQUFBO0FBSEY7QUFNQTs7RUFFRSxXQUFBO0VBQ0EsMEJBQUE7QUFIRjtBQU1BO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSwySEFBQTtBQUhGO0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUpGO0FBTUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBSko7QUFNSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsMkhBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBTE47QUFPTTtFQUNFLGFBQUE7QUFMUjtBQVdBO0VBQ0UsV0FBQTtBQVJGO0FBV0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBUkYiLCJmaWxlIjoidmlzdWFsaXplci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICB9XG5cbiAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbn1cblxuLmRhdGFzZXQtc2VsZWN0b3Ige1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hcC13cmFwcGVyLFxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDZyZW0pO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICBwIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDNyZW07XG5cbiAgICBidXR0b24ge1xuICAgICAgbWluLXdpZHRoOiAxLjVyZW07XG4gICAgICBwYWRkaW5nOiAuMjVyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICYuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnctMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWFyY2gtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODZmOTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 6390:
/*!************************************************************************!*\
  !*** ./projects/map4sci/src/app/pages/visualizer/visualizer.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualizerModule": () => (/* binding */ VisualizerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-google-analytics */ 4462);
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../map/map.module */ 60);
/* harmony import */ var _services_map_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/map-data.service */ 1322);
/* harmony import */ var _visualizer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualizer-routing.module */ 4747);
/* harmony import */ var _visualizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visualizer.component */ 2848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
















class VisualizerModule {
}
VisualizerModule.ɵfac = function VisualizerModule_Factory(t) { return new (t || VisualizerModule)(); };
VisualizerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: VisualizerModule });
VisualizerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_services_map_data_service__WEBPACK_IMPORTED_MODULE_1__.MapDataService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOptionModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule,
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_15__.NgxGoogleAnalyticsModule,
            _visualizer_routing_module__WEBPACK_IMPORTED_MODULE_2__.VisualizerRoutingModule,
            _map_map_module__WEBPACK_IMPORTED_MODULE_0__.MapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VisualizerModule, { declarations: [_visualizer_component__WEBPACK_IMPORTED_MODULE_3__.VisualizerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOptionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule,
        ngx_google_analytics__WEBPACK_IMPORTED_MODULE_15__.NgxGoogleAnalyticsModule,
        _visualizer_routing_module__WEBPACK_IMPORTED_MODULE_2__.VisualizerRoutingModule,
        _map_map_module__WEBPACK_IMPORTED_MODULE_0__.MapModule] }); })();


/***/ }),

/***/ 1322:
/*!***************************************************************!*\
  !*** ./projects/map4sci/src/app/services/map-data.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapDataService": () => (/* binding */ MapDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4283);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map/map */ 2143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3882);





class MapDataService {
    constructor(http) {
        this.http = http;
        this.files = ['boundary', 'cluster', 'edges', 'nodes'];
        this.emptyDataset = _map_map__WEBPACK_IMPORTED_MODULE_0__.EMPTY_DATASET;
        this.datasetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.emptyDataset);
        this.datasetDirectorySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
        this.dataset$ = this.datasetSubject.asObservable();
        this.datasetDirectory$ = this.datasetDirectorySubject.asObservable();
        // Grab the dataset directory index
        this.http.get('assets/datasets/index.json')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((dir) => this.datasetDirectorySubject.next(dir)))
            .subscribe();
        // Set current dataset to the 'first' dataset whenever a directory is loaded
        this.subscriptions.add(this.datasetDirectory$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((dir) => {
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
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(_map_map__WEBPACK_IMPORTED_MODULE_0__.EMPTY_DATASET);
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(dataReqs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.emptyDataset)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
    }
}
MapDataService.ɵfac = function MapDataService_Factory(t) { return new (t || MapDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient)); };
MapDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: MapDataService, factory: MapDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6203:
/*!***************************************************************************************!*\
  !*** ./projects/map4sci/src/app/shared/components/base-modal/base-modal.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseModalComponent": () => (/* binding */ BaseModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


/**
 * Base class for modals.
 */
class BaseModalComponent {
    /**
     * Does nothing. Purely for type inference purposes.
     *
     * @param _args Unused
     */
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(..._args) {
        // Intentionally empty to get correct inference for `open`
    }
    /**
     * Opens a new subclass modal.
     *
     * @template T Modal instance type.
     * @template D Modal data type.
     * @template R Value returned when the modal is closed.
     *
     * @param this Reference to the subclass (properly typed).
     * @param [data] Additional user data to pass to the modal.
     * @param [config] Additional configuration.
     * @returns A reference to the modal.
     * @throws {Error} If open is called on a non subclass.
     * @throws {Error} If the material dialog service has not been initialized properly.
     */
    static open(data, config) {
        var _a;
        if (this === BaseModalComponent) {
            throw new Error('BaseModalComponent must be subclassed to open new modals');
        }
        if (!this.dialogService) {
            throw new Error('MatDialog service not found');
        }
        return this.dialogService.open(this, Object.assign(Object.assign(Object.assign({}, this.DEFAULT_CONFIG), config), { data: Object.assign(Object.assign(Object.assign(Object.assign({}, (_a = this.DEFAULT_CONFIG) === null || _a === void 0 ? void 0 : _a.data), this.DEFAULT_DATA), config === null || config === void 0 ? void 0 : config.data), data) }));
    }
}
BaseModalComponent.ɵfac = function BaseModalComponent_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
BaseModalComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseModalComponent });


/***/ }),

/***/ 2273:
/*!************************************************************************************!*\
  !*** ./projects/map4sci/src/app/shared/components/base-modal/base-modal.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseModalModule": () => (/* binding */ BaseModalModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _base_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-modal.component */ 6203);




/**
 * Factory function for initializing modals.
 *
 * @param dialogService The material dialog service used to open modals.
 * @returns An initialization function.
 */
function dialogServiceInitializationFactory(dialogService) {
    return () => {
        _base_modal_component__WEBPACK_IMPORTED_MODULE_0__.BaseModalComponent.dialogService = dialogService;
    };
}
/**
 * Module providing functionality to make working with modals easier.
 */
class BaseModalModule {
    /**
     * Configures the modal base component.
     *
     * @returns This module with the necessary providers.
     */
    static forRoot() {
        return {
            ngModule: BaseModalModule,
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
                    useFactory: dialogServiceInitializationFactory,
                    deps: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog],
                    multi: true
                }
            ]
        };
    }
}
BaseModalModule.ɵfac = function BaseModalModule_Factory(t) { return new (t || BaseModalModule)(); };
BaseModalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BaseModalModule });
BaseModalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});


/***/ }),

/***/ 7121:
/*!***************************************************************************************!*\
  !*** ./projects/map4sci/src/app/shared/components/base-popup/base-popup.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePopupComponent": () => (/* binding */ BasePopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


/**
 * Base class for popups.
 */
class BasePopupComponent {
    /**
     * Does nothing. Purely for type inference purposes.
     *
     * @param _args Unused
     */
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(..._args) {
        // Intentionally empty to get correct inference for `open`
    }
    /**
     * Opens a new subclass popup.
     *
     * @template T Popup instance type.
     * @template D Popup data type.
     *
     * @param this Reference to the subclass (properly typed).
     * @param [data] Additional user data to pass to the popup.
     * @param [config] Additional configuration.
     * @returns A reference to the popup.
     * @throws {Error} If open is called on a non subclass.
     * @throws {Error} If the material snack bar service has not been initialized properly.
     */
    static open(data, config) {
        var _a;
        if (this === BasePopupComponent) {
            throw new Error('BasePopupComponent must be subclassed to open new popups');
        }
        if (!this.snackBarService) {
            throw new Error('MatSnackBar service not found');
        }
        return this.snackBarService.openFromComponent(this, Object.assign(Object.assign(Object.assign({}, this.DEFAULT_CONFIG), config), { data: Object.assign(Object.assign(Object.assign(Object.assign({}, (_a = this.DEFAULT_CONFIG) === null || _a === void 0 ? void 0 : _a.data), this.DEFAULT_DATA), config === null || config === void 0 ? void 0 : config.data), data) }));
    }
}
BasePopupComponent.ɵfac = function BasePopupComponent_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
BasePopupComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BasePopupComponent });


/***/ }),

/***/ 8343:
/*!************************************************************************************!*\
  !*** ./projects/map4sci/src/app/shared/components/base-popup/base-popup.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePopupModule": () => (/* binding */ BasePopupModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _base_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-popup.component */ 7121);




/**
 * Factory function for initializing popups.
 *
 * @param snackBarService The material dialog service used to open popups.
 * @returns An initialization function.
 */
function snackBarServiceInitializationFactory(snackBarService) {
    return () => {
        _base_popup_component__WEBPACK_IMPORTED_MODULE_0__.BasePopupComponent.snackBarService = snackBarService;
    };
}
/**
 * Module providing functionality to make working with popups easier.
 */
class BasePopupModule {
    /**
     * Configures the popup base component.
     *
     * @returns This module with the necessary providers.
     */
    static forRoot() {
        return {
            ngModule: BasePopupModule,
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
                    useFactory: snackBarServiceInitializationFactory,
                    deps: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar],
                    multi: true
                }
            ]
        };
    }
}
BasePopupModule.ɵfac = function BasePopupModule_Factory(t) { return new (t || BasePopupModule)(); };
BasePopupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BasePopupModule });
BasePopupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});


/***/ }),

/***/ 7124:
/*!***********************************************************************************************!*\
  !*** ./projects/map4sci/src/app/shared/components/markdown-modal/markdown-modal.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkdownModalComponent": () => (/* binding */ MarkdownModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _base_modal_base_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-modal/base-modal.component */ 6203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 6731);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);








class MarkdownModalComponent extends _base_modal_base_modal_component__WEBPACK_IMPORTED_MODULE_0__.BaseModalComponent {
    constructor(data) {
        super();
        this.data = data;
    }
}
MarkdownModalComponent.ɵfac = function MarkdownModalComponent_Factory(t) { return new (t || MarkdownModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
MarkdownModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MarkdownModalComponent, selectors: [["m4s-markdown-modal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 4, consts: [["mat-dialog-title", "", 1, "header"], [1, "title"], [1, "filler"], ["mat-icon-button", "", "mat-dialog-close", "", "tabindex", "-1", 1, "close"], [3, "src"]], template: function MarkdownModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "markdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.data.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.data.src);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.UpperCasePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtkb3duLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtBQUNOIiwiZmlsZSI6Im1hcmtkb3duLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZmlsbGVyIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG4gIH1cbn0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 2205:
/*!********************************************************************************************!*\
  !*** ./projects/map4sci/src/app/shared/components/markdown-modal/markdown-modal.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkdownModalModule": () => (/* binding */ MarkdownModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ 6731);
/* harmony import */ var _markdown_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown-modal.component */ 7124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);







class MarkdownModalModule {
}
MarkdownModalModule.ɵfac = function MarkdownModalModule_Factory(t) { return new (t || MarkdownModalModule)(); };
MarkdownModalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MarkdownModalModule });
MarkdownModalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MarkdownModalModule, { declarations: [_markdown_modal_component__WEBPACK_IMPORTED_MODULE_0__.MarkdownModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownModule], exports: [_markdown_modal_component__WEBPACK_IMPORTED_MODULE_0__.MarkdownModalComponent] }); })();


/***/ }),

/***/ 5142:
/*!*****************************************************************!*\
  !*** ./projects/map4sci/src/environments/environment.shared.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sharedEnvironment": () => (/* binding */ sharedEnvironment)
/* harmony export */ });
const sharedEnvironment = {
    siteConfigurationUrl: 'assets/configuration/site.yml',
    googleAnalyticsToken: 'G-B3DT7XPMRT',
    defaultTheme: {
        primary: '#286F94',
        'primary-text': '#FFFFFF',
        background: '#F2F4F6',
        header: '#616161',
        body: '#424242',
        'link-text': '#1E88E5'
    }
};


/***/ }),

/***/ 4225:
/*!**********************************************************!*\
  !*** ./projects/map4sci/src/environments/environment.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/plugins/zone-error */ 9815);
/* harmony import */ var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment.shared */ 5142);


const environment = Object.assign(Object.assign({}, _environment_shared__WEBPACK_IMPORTED_MODULE_1__.sharedEnvironment), { production: false });


/***/ }),

/***/ 9123:
/*!**************************************!*\
  !*** ./projects/map4sci/src/main.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 640);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4225);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 8718:
/*!************************************************************************!*\
  !*** ./projects/map4sci/$_lazy_route_resources/ lazy namespace object ***!
  \************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8718;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9123)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map