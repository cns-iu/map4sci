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
                                            'data-target="#components-links-module-AnalyticsConsentModule-a3a16a3272e23991666032224b869f340e01e56b412870197d50ef475c615b8c2b26c188e713b2fc60695e70ab09a3f3ae2ecbd8daac27a03c76e5da9a29cbe0"' : 'data-target="#xs-components-links-module-AnalyticsConsentModule-a3a16a3272e23991666032224b869f340e01e56b412870197d50ef475c615b8c2b26c188e713b2fc60695e70ab09a3f3ae2ecbd8daac27a03c76e5da9a29cbe0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AnalyticsConsentModule-a3a16a3272e23991666032224b869f340e01e56b412870197d50ef475c615b8c2b26c188e713b2fc60695e70ab09a3f3ae2ecbd8daac27a03c76e5da9a29cbe0"' :
                                            'id="xs-components-links-module-AnalyticsConsentModule-a3a16a3272e23991666032224b869f340e01e56b412870197d50ef475c615b8c2b26c188e713b2fc60695e70ab09a3f3ae2ecbd8daac27a03c76e5da9a29cbe0"' }>
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
                                            'data-target="#components-links-module-AppModule-861621344150d1a4cb3247d3631a057403233ad39e11673400f4893af178f579fc69e550915543b6e55213222924b2f32387d69296fb9625fa11a675d959ffa1"' : 'data-target="#xs-components-links-module-AppModule-861621344150d1a4cb3247d3631a057403233ad39e11673400f4893af178f579fc69e550915543b6e55213222924b2f32387d69296fb9625fa11a675d959ffa1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-861621344150d1a4cb3247d3631a057403233ad39e11673400f4893af178f579fc69e550915543b6e55213222924b2f32387d69296fb9625fa11a675d959ffa1"' :
                                            'id="xs-components-links-module-AppModule-861621344150d1a4cb3247d3631a057403233ad39e11673400f4893af178f579fc69e550915543b6e55213222924b2f32387d69296fb9625fa11a675d959ffa1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-861621344150d1a4cb3247d3631a057403233ad39e11673400f4893af178f579fc69e550915543b6e55213222924b2f32387d69296fb9625fa11a675d959ffa1"' : 'data-target="#xs-injectables-links-module-AppModule-861621344150d1a4cb3247d3631a057403233ad39e11673400f4893af178f579fc69e550915543b6e55213222924b2f32387d69296fb9625fa11a675d959ffa1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-861621344150d1a4cb3247d3631a057403233ad39e11673400f4893af178f579fc69e550915543b6e55213222924b2f32387d69296fb9625fa11a675d959ffa1"' :
                                        'id="xs-injectables-links-module-AppModule-861621344150d1a4cb3247d3631a057403233ad39e11673400f4893af178f579fc69e550915543b6e55213222924b2f32387d69296fb9625fa11a675d959ffa1"' }>
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
                                            'data-target="#components-links-module-FooterModule-8e623eae67d05cc9c84e36a62e48b1c92f6de4836b26a6a654427bd03c0ab46997c6b6965ea35f4253b1a48bfe63cba7861905ad5088626abd324dd52bcc6272"' : 'data-target="#xs-components-links-module-FooterModule-8e623eae67d05cc9c84e36a62e48b1c92f6de4836b26a6a654427bd03c0ab46997c6b6965ea35f4253b1a48bfe63cba7861905ad5088626abd324dd52bcc6272"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-8e623eae67d05cc9c84e36a62e48b1c92f6de4836b26a6a654427bd03c0ab46997c6b6965ea35f4253b1a48bfe63cba7861905ad5088626abd324dd52bcc6272"' :
                                            'id="xs-components-links-module-FooterModule-8e623eae67d05cc9c84e36a62e48b1c92f6de4836b26a6a654427bd03c0ab46997c6b6965ea35f4253b1a48bfe63cba7861905ad5088626abd324dd52bcc6272"' }>
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
                                            'data-target="#components-links-module-HeaderModule-7c388d60585320151cc1c41b05bc9af2ba5137774731bd7a0133bfba0d36f1970fa746f8921b2d34b568e01ee65e51dd422f953fb97d0dc7e41fa7ab231799fe"' : 'data-target="#xs-components-links-module-HeaderModule-7c388d60585320151cc1c41b05bc9af2ba5137774731bd7a0133bfba0d36f1970fa746f8921b2d34b568e01ee65e51dd422f953fb97d0dc7e41fa7ab231799fe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-7c388d60585320151cc1c41b05bc9af2ba5137774731bd7a0133bfba0d36f1970fa746f8921b2d34b568e01ee65e51dd422f953fb97d0dc7e41fa7ab231799fe"' :
                                            'id="xs-components-links-module-HeaderModule-7c388d60585320151cc1c41b05bc9af2ba5137774731bd7a0133bfba0d36f1970fa746f8921b2d34b568e01ee65e51dd422f953fb97d0dc7e41fa7ab231799fe"' }>
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
                                            'data-target="#components-links-module-HomeModule-3f5923eb29205838215add192b9ea0511fc6e7d05ac360b8062d385ab9ba3dfd34dc55eb6f6277f24e76c6b5d8da248519b4a497d7db93d4d4068d8413e2fa4f"' : 'data-target="#xs-components-links-module-HomeModule-3f5923eb29205838215add192b9ea0511fc6e7d05ac360b8062d385ab9ba3dfd34dc55eb6f6277f24e76c6b5d8da248519b4a497d7db93d4d4068d8413e2fa4f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-3f5923eb29205838215add192b9ea0511fc6e7d05ac360b8062d385ab9ba3dfd34dc55eb6f6277f24e76c6b5d8da248519b4a497d7db93d4d4068d8413e2fa4f"' :
                                            'id="xs-components-links-module-HomeModule-3f5923eb29205838215add192b9ea0511fc6e7d05ac360b8062d385ab9ba3dfd34dc55eb6f6277f24e76c6b5d8da248519b4a497d7db93d4d4068d8413e2fa4f"' }>
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
                                            'data-target="#components-links-module-MapModule-62834176762b9de0e4eaf2c13f251892cddb9c9865684737c7a3002d5ae97c70730750ba5c58c7fb267bdd57eb165a90df066c7c50bbaca412eba04d3b4ff342"' : 'data-target="#xs-components-links-module-MapModule-62834176762b9de0e4eaf2c13f251892cddb9c9865684737c7a3002d5ae97c70730750ba5c58c7fb267bdd57eb165a90df066c7c50bbaca412eba04d3b4ff342"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MapModule-62834176762b9de0e4eaf2c13f251892cddb9c9865684737c7a3002d5ae97c70730750ba5c58c7fb267bdd57eb165a90df066c7c50bbaca412eba04d3b4ff342"' :
                                            'id="xs-components-links-module-MapModule-62834176762b9de0e4eaf2c13f251892cddb9c9865684737c7a3002d5ae97c70730750ba5c58c7fb267bdd57eb165a90df066c7c50bbaca412eba04d3b4ff342"' }>
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
                                            'data-target="#components-links-module-MarkdownModalModule-812e4357f88babc34cc20e75e4a36cffa27d712feedf37c0ba7c54f972f72910cbbdd8e22dcecb9a15e4590a20b9b256313dc04e5d49e0fb2177b2a696762c9f"' : 'data-target="#xs-components-links-module-MarkdownModalModule-812e4357f88babc34cc20e75e4a36cffa27d712feedf37c0ba7c54f972f72910cbbdd8e22dcecb9a15e4590a20b9b256313dc04e5d49e0fb2177b2a696762c9f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MarkdownModalModule-812e4357f88babc34cc20e75e4a36cffa27d712feedf37c0ba7c54f972f72910cbbdd8e22dcecb9a15e4590a20b9b256313dc04e5d49e0fb2177b2a696762c9f"' :
                                            'id="xs-components-links-module-MarkdownModalModule-812e4357f88babc34cc20e75e4a36cffa27d712feedf37c0ba7c54f972f72910cbbdd8e22dcecb9a15e4590a20b9b256313dc04e5d49e0fb2177b2a696762c9f"' }>
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
                                            'data-target="#components-links-module-MenuModule-4e7d50832ce4dbf9286385612c4b9a1717bf1796b762d0cbfb9ca7029980f5b10027e0712e46380cd26cb13eb7d09026a770b09e309e593ea2405d42439163be"' : 'data-target="#xs-components-links-module-MenuModule-4e7d50832ce4dbf9286385612c4b9a1717bf1796b762d0cbfb9ca7029980f5b10027e0712e46380cd26cb13eb7d09026a770b09e309e593ea2405d42439163be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-4e7d50832ce4dbf9286385612c4b9a1717bf1796b762d0cbfb9ca7029980f5b10027e0712e46380cd26cb13eb7d09026a770b09e309e593ea2405d42439163be"' :
                                            'id="xs-components-links-module-MenuModule-4e7d50832ce4dbf9286385612c4b9a1717bf1796b762d0cbfb9ca7029980f5b10027e0712e46380cd26cb13eb7d09026a770b09e309e593ea2405d42439163be"' }>
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
                                <a href="modules/NetworkModule.html" data-type="entity-link" >NetworkModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NetworkModule-24df7db6db6e9f6212c7ac6ff53ba7742c93f9b01fe6de648068182ecd3a537527d8c1c6998fa47e4c7a1d9031971ae58af7ead9659d188d17f18c8f3d392505"' : 'data-target="#xs-components-links-module-NetworkModule-24df7db6db6e9f6212c7ac6ff53ba7742c93f9b01fe6de648068182ecd3a537527d8c1c6998fa47e4c7a1d9031971ae58af7ead9659d188d17f18c8f3d392505"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NetworkModule-24df7db6db6e9f6212c7ac6ff53ba7742c93f9b01fe6de648068182ecd3a537527d8c1c6998fa47e4c7a1d9031971ae58af7ead9659d188d17f18c8f3d392505"' :
                                            'id="xs-components-links-module-NetworkModule-24df7db6db6e9f6212c7ac6ff53ba7742c93f9b01fe6de648068182ecd3a537527d8c1c6998fa47e4c7a1d9031971ae58af7ead9659d188d17f18c8f3d392505"' }>
                                            <li class="link">
                                                <a href="components/NetworkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NetworkComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                            'data-target="#components-links-module-VisualizerModule-40f77541b0c84f8c08b0085b7f69843504f418bb51ef8904e0c29866f29feab456205f1b33a588625c8ca4c9da5129f7bd4f878980c8d87716cce1fda0ef4a51"' : 'data-target="#xs-components-links-module-VisualizerModule-40f77541b0c84f8c08b0085b7f69843504f418bb51ef8904e0c29866f29feab456205f1b33a588625c8ca4c9da5129f7bd4f878980c8d87716cce1fda0ef4a51"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VisualizerModule-40f77541b0c84f8c08b0085b7f69843504f418bb51ef8904e0c29866f29feab456205f1b33a588625c8ca4c9da5129f7bd4f878980c8d87716cce1fda0ef4a51"' :
                                            'id="xs-components-links-module-VisualizerModule-40f77541b0c84f8c08b0085b7f69843504f418bb51ef8904e0c29866f29feab456205f1b33a588625c8ca4c9da5129f7bd4f878980c8d87716cce1fda0ef4a51"' }>
                                            <li class="link">
                                                <a href="components/VisualizerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VisualizerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VisualizerModule-40f77541b0c84f8c08b0085b7f69843504f418bb51ef8904e0c29866f29feab456205f1b33a588625c8ca4c9da5129f7bd4f878980c8d87716cce1fda0ef4a51"' : 'data-target="#xs-injectables-links-module-VisualizerModule-40f77541b0c84f8c08b0085b7f69843504f418bb51ef8904e0c29866f29feab456205f1b33a588625c8ca4c9da5129f7bd4f878980c8d87716cce1fda0ef4a51"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VisualizerModule-40f77541b0c84f8c08b0085b7f69843504f418bb51ef8904e0c29866f29feab456205f1b33a588625c8ca4c9da5129f7bd4f878980c8d87716cce1fda0ef4a51"' :
                                        'id="xs-injectables-links-module-VisualizerModule-40f77541b0c84f8c08b0085b7f69843504f418bb51ef8904e0c29866f29feab456205f1b33a588625c8ca4c9da5129f7bd4f878980c8d87716cce1fda0ef4a51"' }>
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
                                    <a href="injectables/NetworkDatasetProcessor.html" data-type="entity-link" >NetworkDatasetProcessor</a>
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
                                <a href="interfaces/EdgeProperties.html" data-type="entity-link" >EdgeProperties</a>
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
                                <a href="interfaces/NetworkDataset.html" data-type="entity-link" >NetworkDataset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Node.html" data-type="entity-link" >Node</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NodeProperties.html" data-type="entity-link" >NodeProperties</a>
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