(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./local.config.json":
/*!***************************!*\
  !*** ./local.config.json ***!
  \***************************/
/*! exports provided: google_maps_api_key, default */
/***/ (function(module) {

module.exports = {"google_maps_api_key":"AIzaSyAso5XNjudmS9BdFZCKtjAU6yb29aKLVNo"};

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height: 40px; background-color: var(--base-color)\">\r\n    <i class=\"fa fa-tree fa-lg\" style=\"padding-top:13px\"></i>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map-area/map-area.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map-area/map-area.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mapcontainer style=\"width:100%;height:100%\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/park-list/park-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/park-list/park-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100%\">\r\n    <div class=\"header text-white\">Parks in the area ({{parkItems?.length}})</div>\r\n    <div id=\"parkList\" class=\"list-group list-group-flush\">\r\n        <a class=\"list-group-item rounded-0 border-0\" *ngFor=\"let parkItem of parkItems\"\r\n            [class.active]=\"parkItem.isActive\" (click)=\"parkItem.onClick()\">\r\n            <span >{{parkItem.name}} </span>\r\n            <div *ngIf=\"parkItem.isActive\" style=\"margin-top: 3px\">\r\n                <div class=\"row\" style=\"font-weight: normal;\">\r\n                    <div class=\"col col-lg-4\" style=\"text-align: center\">\r\n                        <img [src]=\"parkItem.pictureUrl\">\r\n                    </div>\r\n                    <div class=\"col col-lg-8\">\r\n                        <ul>\r\n                            <li>{{parkItem.address}}</li>\r\n                            <li>Rating: {{parkItem.rating}}/5</li>\r\n                            <li *ngIf=\"parkItem.isOpenNow\">\r\n                                <em>Open now!</em>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/parks/parks.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/parks/parks.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parks row no-gutters\">\r\n  <div class=\"col-md-9 order-md-2\">\r\n    <map-area></map-area>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <park-list></park-list>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _parks_parks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parks/parks.component */ "./src/app/parks/parks.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");





const routes = [
    { path: '', redirectTo: 'parks', pathMatch: 'full' },
    { path: 'parks', component: _parks_parks_component__WEBPACK_IMPORTED_MODULE_3__["ParksComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'parks-map';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _map_area_map_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-area/map-area.component */ "./src/app/map-area/map-area.component.ts");
/* harmony import */ var _park_list_park_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./park-list/park-list.component */ "./src/app/park-list/park-list.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _parks_parks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parks/parks.component */ "./src/app/parks/parks.component.ts");
/* harmony import */ var _core_map_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/map-provider */ "./src/app/core/map-provider.ts");
/* harmony import */ var _google_maps_google_maps_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./google-maps/google-maps.service */ "./src/app/google-maps/google-maps.service.ts");
/* harmony import */ var _core_park_list_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/park-list.service */ "./src/app/core/park-list.service.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _map_area_map_area_component__WEBPACK_IMPORTED_MODULE_6__["MapAreaComponent"],
            _park_list_park_list_component__WEBPACK_IMPORTED_MODULE_7__["ParkListComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
            _parks_parks_component__WEBPACK_IMPORTED_MODULE_9__["ParksComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ],
        providers: [
            _core_park_list_service__WEBPACK_IMPORTED_MODULE_12__["ParkListService"],
            { provide: _core_map_provider__WEBPACK_IMPORTED_MODULE_10__["MapProvider"], useClass: _google_maps_google_maps_service__WEBPACK_IMPORTED_MODULE_11__["GoogleMapsService"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/map-provider.ts":
/*!**************************************!*\
  !*** ./src/app/core/map-provider.ts ***!
  \**************************************/
/*! exports provided: MapProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapProvider", function() { return MapProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapProvider = class MapProvider {
};
MapProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MapProvider);



/***/ }),

/***/ "./src/app/core/park-list.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/park-list.service.ts ***!
  \*******************************************/
/*! exports provided: ParkListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkListService", function() { return ParkListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ParkListService = class ParkListService extends rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"] {
};
ParkListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ParkListService);



/***/ }),

/***/ "./src/app/google-maps/google-maps.service.ts":
/*!****************************************************!*\
  !*** ./src/app/google-maps/google-maps.service.ts ***!
  \****************************************************/
/*! exports provided: GoogleMapsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsService", function() { return GoogleMapsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _park_item_container_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./park-item-container.model */ "./src/app/google-maps/park-item-container.model.ts");
/* harmony import */ var _models_park_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/park-item */ "./src/app/models/park-item.ts");
/* harmony import */ var _local_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../local.config.json */ "./local.config.json");
var _local_config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../local.config.json */ "./local.config.json", 1);








const API_URL = 'maps.googleapis.com/maps/api/js';
const API_KEY = _local_config_json__WEBPACK_IMPORTED_MODULE_7__.google_maps_api_key;
let GoogleMapsService = class GoogleMapsService {
    constructor(document) {
        this.document = document;
        this.parkItemContainers = [];
        this.parkListUpdateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loader = this._loader().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
    }
    getProviderName() {
        return 'Google Maps';
    }
    initialize(element) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](subscriber => {
            this.load().subscribe(() => {
                const mapProp = {
                    center: new google.maps.LatLng(36.845784, -76.196460),
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.TERRAIN,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false
                };
                this.map = new google.maps.Map(element.nativeElement, mapProp);
                this.placesService = new google.maps.places.PlacesService(this.map);
                subscriber.next();
                subscriber.complete();
            });
        });
    }
    searchParks() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](subscriber => {
            const findParksTask = () => {
                this.findParks().subscribe(findResults => {
                    const containers = this.updateParkItemContainers(findResults);
                    subscriber.next(this.toParkItems(containers));
                });
            };
            // initial call
            findParksTask();
            // subscribing for map movements
            this.map.addListener('idle', findParksTask);
            // subscribing for park list updates
            this.parkListUpdateSubject.subscribe(() => {
                subscriber.next(this.toParkItems(this.parkItemContainers));
            });
        });
    }
    setActive(parkItem) {
        const parkItemContainer = this.findInParkItemContainers(parkItem);
        if (parkItemContainer) {
            this.map.setCenter({ lat: parkItemContainer.place.geometry.location.lat(), lng: parkItemContainer.place.geometry.location.lng() });
            this.updatePhotoUrl(parkItemContainer);
            this.setMarkerActive(parkItemContainer);
        }
        return this.toParkItems(this.parkItemContainers);
    }
    findParks() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](subscriber => {
            const request = { bounds: this.map.getBounds(), query: '', type: 'park', location: this.map.getCenter() };
            const callBack = (results, status, pagination) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    subscriber.next(results);
                    if (pagination.hasNextPage) {
                        pagination.nextPage();
                    }
                    else {
                        subscriber.complete();
                    }
                }
            };
            this.placesService.textSearch(request, callBack);
        });
    }
    updatePhotoUrl(parkItemContainer) {
        if (parkItemContainer.place.photos && parkItemContainer.place.photos.length > 0) {
            parkItemContainer.place.icon = parkItemContainer.place.photos[0].getUrl({ maxHeight: 200, maxWidth: 200 });
        }
    }
    load() {
        return this.loader;
    }
    setMarkerActive(parkItemContainer) {
        this.parkItemContainers.forEach(container => {
            if (container.place.place_id === parkItemContainer.place.place_id) {
                container.isActive = true;
                container.marker.setAnimation(google.maps.Animation.BOUNCE);
            }
            else {
                container.isActive = false;
                container.marker.setAnimation(null);
            }
        });
    }
    findInParkItemContainers(parkItem) {
        return this.parkItemContainers.filter(parkItemContainer => parkItemContainer.place.place_id === parkItem.id)[0];
    }
    updateParkItemContainers(placeResults) {
        this.addParkResults(placeResults);
        this.filterParkItemContainers();
        return this.parkItemContainers;
    }
    addParkResults(placeResults) {
        placeResults.forEach(placeResult => {
            if (!this.parkItemContainers.some(c => c.place.place_id === placeResult.place_id)) {
                const container = new _park_item_container_model__WEBPACK_IMPORTED_MODULE_5__["ParkItemContainer"]();
                container.isActive = false;
                container.marker = new google.maps.Marker({ map: this.map, position: placeResult.geometry.location });
                container.clickListener = google.maps.event.addListener(container.marker, 'click', () => {
                    this.updatePhotoUrl(container);
                    this.setMarkerActive(container);
                    this.parkListUpdateSubject.next();
                });
                container.place = placeResult;
                this.parkItemContainers.push(container);
            }
        });
    }
    filterParkItemContainers() {
        const currentBounds = this.map.getBounds();
        this.parkItemContainers.forEach((container, index) => {
            if (!currentBounds.contains(container.place.geometry.location)) {
                container.marker.setMap(null);
                google.maps.event.removeListener(container.clickListener);
                this.parkItemContainers.splice(index, 1);
            }
        });
    }
    toParkItems(parkItemContainers) {
        const parkItems = [];
        parkItemContainers.forEach(parkItemContainer => {
            const parkItem = new _models_park_item__WEBPACK_IMPORTED_MODULE_6__["ParkItem"]();
            parkItem.id = parkItemContainer.place.place_id;
            parkItem.isActive = parkItemContainer.isActive;
            parkItem.name = parkItemContainer.place.name;
            parkItem.address = parkItemContainer.place.formatted_address;
            parkItem.pictureUrl = parkItemContainer.place.icon;
            parkItem.rating = parkItemContainer.place.rating;
            parkItem.isOpenNow = parkItemContainer.place.opening_hours && parkItemContainer.place.opening_hours.open_now;
            parkItems.push(parkItem);
        });
        return parkItems;
    }
    _loader() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((subscriber) => {
            const params = `key=${API_KEY}&region=US&libraries=places`;
            const element = Object.assign(this.document.createElement('script'), {
                type: 'text/javascript',
                src: `https://${API_URL}?${params}`,
                onload: (res) => {
                    subscriber.next(res);
                    subscriber.complete();
                },
                onerror: (err) => {
                    subscriber.error(err);
                },
            });
            this.document.body.appendChild(element);
        });
    }
};
GoogleMapsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [HTMLDocument])
], GoogleMapsService);



/***/ }),

/***/ "./src/app/google-maps/park-item-container.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/google-maps/park-item-container.model.ts ***!
  \**********************************************************/
/*! exports provided: ParkItemContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkItemContainer", function() { return ParkItemContainer; });
class ParkItemContainer {
}


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html")
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/map-area/map-area.component.ts":
/*!************************************************!*\
  !*** ./src/app/map-area/map-area.component.ts ***!
  \************************************************/
/*! exports provided: MapAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapAreaComponent", function() { return MapAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_map_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/map-provider */ "./src/app/core/map-provider.ts");
/* harmony import */ var _core_park_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/park-list.service */ "./src/app/core/park-list.service.ts");





let MapAreaComponent = class MapAreaComponent {
    constructor(mapProviderService, parkListService) {
        this.mapProviderService = mapProviderService;
        this.parkListService = parkListService;
    }
    ngAfterViewInit() {
        this.mapProviderService.initialize(this.gmapElement).subscribe(nothing => {
            this.mapProviderService.searchParks().subscribe((parkItems) => {
                this.updateService(parkItems);
            });
        });
    }
    updateService(parkItems) {
        parkItems.forEach(parkItem => {
            if (!parkItem.onClick) {
                parkItem.onClick = () => {
                    const resultParkItems = this.mapProviderService.setActive(parkItem);
                    this.updateService(resultParkItems);
                };
            }
        });
        this.parkListService.next(parkItems);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapcontainer', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MapAreaComponent.prototype, "gmapElement", void 0);
MapAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'map-area',
        template: __webpack_require__(/*! raw-loader!./map-area.component.html */ "./node_modules/raw-loader/index.js!./src/app/map-area/map-area.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_map_provider__WEBPACK_IMPORTED_MODULE_2__["MapProvider"], _core_park_list_service__WEBPACK_IMPORTED_MODULE_3__["ParkListService"]])
], MapAreaComponent);



/***/ }),

/***/ "./src/app/models/park-item.ts":
/*!*************************************!*\
  !*** ./src/app/models/park-item.ts ***!
  \*************************************/
/*! exports provided: ParkItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkItem", function() { return ParkItem; });
class ParkItem {
}


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `<h1>Page not found</h1>`
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/park-list/park-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/park-list/park-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover{\r\n    background-color: rgba(0,0,0,0.3);\r\n    cursor: default;\r\n}\r\n\r\n.active {\r\n    font-weight: bold;\r\n    background-color: white;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    padding-left: 0;\r\n    padding-right: 0\r\n}\r\n\r\nem {\r\n    color:darkolivegreen;\r\n    font-weight: bold;\r\n}\r\n\r\nh5, span {\r\n    padding-left:3px;\r\n}\r\n\r\n.list-group {\r\n    overflow-y: auto;\r\n    position: absolute;\r\n    top: 40px;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.card-header {\r\n    height: 50px;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n}\r\n\r\n.header {\r\n    background-color: var(--second-color);\r\n    padding: 0 15px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 1.25rem;\r\n    font-weight: 500;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyay1saXN0L3BhcmstbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFyay1saXN0L3BhcmstbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwXHJcbn1cclxuXHJcbmVtIHtcclxuICAgIGNvbG9yOmRhcmtvbGl2ZWdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmg1LCBzcGFuIHtcclxuICAgIHBhZGRpbmctbGVmdDozcHg7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/park-list/park-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/park-list/park-list.component.ts ***!
  \**************************************************/
/*! exports provided: ParkListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkListComponent", function() { return ParkListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_park_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/park-list.service */ "./src/app/core/park-list.service.ts");



let ParkListComponent = class ParkListComponent {
    constructor(parkListService) {
        this.parkListService = parkListService;
    }
    ngOnInit() {
        this.element = document.getElementById('parkList');
        this.parkListService.subscribe((parks) => {
            this.parkItems = parks;
            this.updateScroll();
        });
    }
    updateScroll() {
        if (this.parkItems.some(park => park.isActive)) {
            const visibleHeight = this.element.clientHeight;
            const totalHeight = this.element.scrollHeight;
            const difference = totalHeight - visibleHeight;
            if (difference > 0 && this.parkItems.length > 0) {
                const activePark = this.parkItems.filter(park => park.isActive)[0];
                const activeParkIndex = this.parkItems.indexOf(activePark);
                const requiredScroll = (difference / this.parkItems.length) * activeParkIndex;
                this.element.scrollTop = requiredScroll;
            }
        }
    }
};
ParkListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'park-list',
        template: __webpack_require__(/*! raw-loader!./park-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/park-list/park-list.component.html"),
        styles: [__webpack_require__(/*! ./park-list.component.css */ "./src/app/park-list/park-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_park_list_service__WEBPACK_IMPORTED_MODULE_2__["ParkListService"]])
], ParkListComponent);



/***/ }),

/***/ "./src/app/parks/parks.component.css":
/*!*******************************************!*\
  !*** ./src/app/parks/parks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parks {\r\n  position: absolute;\r\n  top: 40px;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.parks > * {\r\n  height: 50%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .parks > * {\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFya3MvcGFya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFya3MvcGFya3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJrcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnBhcmtzID4gKiB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5wYXJrcyA+ICoge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/parks/parks.component.ts":
/*!******************************************!*\
  !*** ./src/app/parks/parks.component.ts ***!
  \******************************************/
/*! exports provided: ParksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParksComponent", function() { return ParksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ParksComponent = class ParksComponent {
};
ParksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'parks',
        template: __webpack_require__(/*! raw-loader!./parks.component.html */ "./node_modules/raw-loader/index.js!./src/app/parks/parks.component.html"),
        styles: [__webpack_require__(/*! ./parks.component.css */ "./src/app/parks/parks.component.css")]
    })
], ParksComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\projects\parks-map\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map