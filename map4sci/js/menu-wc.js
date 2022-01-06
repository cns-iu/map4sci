'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Application map4sci code documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AnalyticsConsentModule.html" data-type="entity-link" >AnalyticsConsentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AnalyticsConsentModule-35f6d9f619a150637a3240033a5c94c9"' : 'data-target="#xs-components-links-module-AnalyticsConsentModule-35f6d9f619a150637a3240033a5c94c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AnalyticsConsentModule-35f6d9f619a150637a3240033a5c94c9"' :
                                            'id="xs-components-links-module-AnalyticsConsentModule-35f6d9f619a150637a3240033a5c94c9"' }>
                                            <li class="link">
                                                <a href="components/AnalyticsConsentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalyticsConsentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0cbcfd0708d6ab3c276610c6144c18c1"' : 'data-target="#xs-components-links-module-AppModule-0cbcfd0708d6ab3c276610c6144c18c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0cbcfd0708d6ab3c276610c6144c18c1"' :
                                            'id="xs-components-links-module-AppModule-0cbcfd0708d6ab3c276610c6144c18c1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-0cbcfd0708d6ab3c276610c6144c18c1"' : 'data-target="#xs-injectables-links-module-AppModule-0cbcfd0708d6ab3c276610c6144c18c1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0cbcfd0708d6ab3c276610c6144c18c1"' :
                                        'id="xs-injectables-links-module-AppModule-0cbcfd0708d6ab3c276610c6144c18c1"' }>
                                        <li class="link">
                                            <a href="injectables/MapDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BaseModalModule.html" data-type="entity-link" >BaseModalModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BasePopupModule.html" data-type="entity-link" >BasePopupModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link" >FooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FooterModule-9a60ecf076852307973fb6d3b70b10f8"' : 'data-target="#xs-components-links-module-FooterModule-9a60ecf076852307973fb6d3b70b10f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-9a60ecf076852307973fb6d3b70b10f8"' :
                                            'id="xs-components-links-module-FooterModule-9a60ecf076852307973fb6d3b70b10f8"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link" >HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderModule-ac89489d199327c5f77cc3853c71d1b2"' : 'data-target="#xs-components-links-module-HeaderModule-ac89489d199327c5f77cc3853c71d1b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-ac89489d199327c5f77cc3853c71d1b2"' :
                                            'id="xs-components-links-module-HeaderModule-ac89489d199327c5f77cc3853c71d1b2"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-ed179c3b2418f9aa4ce119617a13bfab"' : 'data-target="#xs-components-links-module-HomeModule-ed179c3b2418f9aa4ce119617a13bfab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-ed179c3b2418f9aa4ce119617a13bfab"' :
                                            'id="xs-components-links-module-HomeModule-ed179c3b2418f9aa4ce119617a13bfab"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MapModule.html" data-type="entity-link" >MapModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MapModule-3ae37415643e0a11ccd9d2f38d2ff316"' : 'data-target="#xs-components-links-module-MapModule-3ae37415643e0a11ccd9d2f38d2ff316"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MapModule-3ae37415643e0a11ccd9d2f38d2ff316"' :
                                            'id="xs-components-links-module-MapModule-3ae37415643e0a11ccd9d2f38d2ff316"' }>
                                            <li class="link">
                                                <a href="components/MapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarkdownModalModule.html" data-type="entity-link" >MarkdownModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MarkdownModalModule-76246667e3a914537fc4c5fa83a6dea9"' : 'data-target="#xs-components-links-module-MarkdownModalModule-76246667e3a914537fc4c5fa83a6dea9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MarkdownModalModule-76246667e3a914537fc4c5fa83a6dea9"' :
                                            'id="xs-components-links-module-MarkdownModalModule-76246667e3a914537fc4c5fa83a6dea9"' }>
                                            <li class="link">
                                                <a href="components/MarkdownModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarkdownModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link" >MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuModule-31e734359c76e4fb98c1b692323b4c43"' : 'data-target="#xs-components-links-module-MenuModule-31e734359c76e4fb98c1b692323b4c43"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-31e734359c76e4fb98c1b692323b4c43"' :
                                            'id="xs-components-links-module-MenuModule-31e734359c76e4fb98c1b692323b4c43"' }>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MousePositionCollectorModule.html" data-type="entity-link" >MousePositionCollectorModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SiteConfigurationModule.html" data-type="entity-link" >SiteConfigurationModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ThemingModule.html" data-type="entity-link" >ThemingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VisualizerModule.html" data-type="entity-link" >VisualizerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VisualizerModule-c16ba7ee5798137c12d151c404f5f9db"' : 'data-target="#xs-components-links-module-VisualizerModule-c16ba7ee5798137c12d151c404f5f9db"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VisualizerModule-c16ba7ee5798137c12d151c404f5f9db"' :
                                            'id="xs-components-links-module-VisualizerModule-c16ba7ee5798137c12d151c404f5f9db"' }>
                                            <li class="link">
                                                <a href="components/VisualizerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VisualizerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VisualizerModule-c16ba7ee5798137c12d151c404f5f9db"' : 'data-target="#xs-injectables-links-module-VisualizerModule-c16ba7ee5798137c12d151c404f5f9db"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VisualizerModule-c16ba7ee5798137c12d151c404f5f9db"' :
                                        'id="xs-injectables-links-module-VisualizerModule-c16ba7ee5798137c12d151c404f5f9db"' }>
                                        <li class="link">
                                            <a href="injectables/MapDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VisualizerRoutingModule.html" data-type="entity-link" >VisualizerRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/BaseModalComponent.html" data-type="entity-link" >BaseModalComponent</a>
                                </li>
                                <li class="link">
                                    <a href="directives/BasePopupComponent.html" data-type="entity-link" >BasePopupComponent</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Cartesian2dBounds.html" data-type="entity-link" >Cartesian2dBounds</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cartesian2dProjection.html" data-type="entity-link" >Cartesian2dProjection</a>
                            </li>
                            <li class="link">
                                <a href="classes/EdgesGeojson.html" data-type="entity-link" >EdgesGeojson</a>
                            </li>
                            <li class="link">
                                <a href="classes/MiniMap.html" data-type="entity-link" >MiniMap</a>
                            </li>
                            <li class="link">
                                <a href="classes/ZoomLevelControl.html" data-type="entity-link" >ZoomLevelControl</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnalyticsConsentService.html" data-type="entity-link" >AnalyticsConsentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SiteConfigurationService.html" data-type="entity-link" >SiteConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemingService.html" data-type="entity-link" >ThemingService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AnalyticsConsentComponentData.html" data-type="entity-link" >AnalyticsConsentComponentData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cluster.html" data-type="entity-link" >Cluster</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Edge.html" data-type="entity-link" >Edge</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FooterConfig.html" data-type="entity-link" >FooterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeaderConfig.html" data-type="entity-link" >HeaderConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogoConfig.html" data-type="entity-link" >LogoConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapDataset.html" data-type="entity-link" >MapDataset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapDatasetCache.html" data-type="entity-link" >MapDatasetCache</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapDatasetConfig.html" data-type="entity-link" >MapDatasetConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapDatasetDirectory.html" data-type="entity-link" >MapDatasetDirectory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapMarker.html" data-type="entity-link" >MapMarker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapMarkerConfig.html" data-type="entity-link" >MapMarkerConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapSources.html" data-type="entity-link" >MapSources</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarkdownModalData.html" data-type="entity-link" >MarkdownModalData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MiniMapOptions.html" data-type="entity-link" >MiniMapOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModalComponentConstructor.html" data-type="entity-link" >ModalComponentConstructor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Node.html" data-type="entity-link" >Node</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PopupComponentConstructor.html" data-type="entity-link" >PopupComponentConstructor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PopupLayer.html" data-type="entity-link" >PopupLayer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SiteConfigurationWithFooterConfig.html" data-type="entity-link" >SiteConfigurationWithFooterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SiteConfigurationWithHeaderConfig.html" data-type="entity-link" >SiteConfigurationWithHeaderConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SiteConfigurationWithThemingConfig.html" data-type="entity-link" >SiteConfigurationWithThemingConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ThemingConfig.html" data-type="entity-link" >ThemingConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ZoomLookupItem.html" data-type="entity-link" >ZoomLookupItem</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});