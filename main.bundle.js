webpackJsonp([1,4],{

/***/ 1274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(418)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1277:
/***/ (function(module, exports) {

module.exports = "<div>\r\n                <header>\r\n                  <div id=\"titleHeader\">\r\n                  <h1 style=\"margin:5px 0px 5px 0px !important;padding:5px\">Portfolio monitor</h1>\r\n                  </div>\r\n                      <div id=\"menu\">\r\n                        <div style=\"width:15%;border-right:1px solid #3498db;float:left\">\r\n                        <label for=\"showblock\"><span class=\"glyphicon glyphicon-menu-hamburger\">Menu</span></label>\r\n                        </div>\r\n\r\n                        <div style=\"float:left;width:25%;padding-left:5px\">\r\n                        <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> User\r\n                        </div>\r\n                        <div style=\"float:left;width:60%;text-align:right;cursor:pointer\" data-toggle=\"modal\" data-target=\"#myModal1\">\r\n                        <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\r\n                        </div>\r\n                      </div>\r\n                </header>\r\n\r\n\r\n             <input type=\"checkbox\" id=\"showblock\" />\r\n\r\n                    <nav>\r\n\r\n                        <a  routerLink=\"/portfolio\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span>Portfolio</a>\r\n                        <a  routerLink=\"/grafikon\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span>Grafikon</a>\r\n                    </nav>\r\n                <main id=\"content\">\r\n                <router-outlet></router-outlet>\r\n                </main>\r\n            </div>\r\n\r\n            <!-- Modal -->\r\n<div class=\"modal fade\" id=\"myModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        ...\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 1278:
/***/ (function(module, exports) {

module.exports = " <div class=\"panel panel-default\">\r\n    <!-- Default panel contents -->\r\n    <div class='panel-heading'>Portfolio Graph</div>\r\n    <div class='panel-body'>\r\n<div class=\"graphPanel\"> \r\n     <kendo-chart [categoryAxis]=\"{ categories: categories }\">\r\n            <kendo-chart-title text=\"Gross domestic product growth /GDP annual %/\"></kendo-chart-title>\r\n            <kendo-chart-legend position=\"bottom\" orientation=\"horizontal\"></kendo-chart-legend>\r\n            <kendo-chart-tooltip format=\"{0}%\"></kendo-chart-tooltip>\r\n            <kendo-chart-series>\r\n                <kendo-chart-series-item *ngFor=\"let item of series\"\r\n                    type=\"line\" style=\"smooth\" [data]=\"item.data\" [name]=\"item.name\">\r\n                </kendo-chart-series-item>\r\n            </kendo-chart-series>\r\n        </kendo-chart>\r\n</div>\r\n    <div style=\"width:100%;clear:both\">\r\n    <kendo-tabstrip>\r\n        <kendo-tabstrip-tab [title]=\"'Tab 1 Title'\" [selected]=\"true\">\r\n          <template kendoTabContent>\r\n       <p>Tab 1 Contents</p>\r\n          </template>\r\n        </kendo-tabstrip-tab>\r\n        <kendo-tabstrip-tab [title]=\"'Tab 2 Title'\">\r\n          <template kendoTabContent>\r\n            <p>Tab 2 Content</p>\r\n          </template>\r\n        </kendo-tabstrip-tab>\r\n        <kendo-tabstrip-tab [title]=\"'Tab 3 Title'\">\r\n          <template kendoTabContent>\r\n            <p>Tab 3 Content</p>\r\n          </template>\r\n        </kendo-tabstrip-tab>\r\n      </kendo-tabstrip>\r\n      </div>\r\n    </div>\r\n </div>"

/***/ }),

/***/ 1279:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n         <label><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></label>\r\n         <input placeholder=\"Search Security\"  type=\"text\" (keyup)=\"FilterBySecurity()\"  id=\"inputName\" [(ngModel)]=\"inputName\"/>\r\n\r\n   </div>\r\n    <div class=\"panel panel-default\">\r\n    <!-- Default panel contents -->\r\n    <div class='panel-heading'>Portfolio List</div>\r\n    <div class='panel-body'>\r\n        <table class=\"table table-bordered table-condensed \">\r\n            <thead>\r\n               <th>Security</th>\r\n               <th>ISIN</th>\r\n               <th>Position</th>\r\n               <th>Close price</th>\r\n               <th>Live price</th>\r\n               <th>Value</th>\r\n               <th>PnL</th>\r\n            </thead>\r\n            <tbody>\r\n               <tr *ngFor=\"let item of items; let i=index\" (click)=\"setClickedRow(i,item)\" [class.active]=\"i == selectedRow\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n                  <td>{{item.security}}</td>\r\n                  <td>{{item.ISIN}}</td>\r\n                  <td>{{item.position}}</td>\r\n                  <td>{{item.closePrice}}</td>\r\n                  <td>{{item.livePrice}}</td>\r\n                  <td>{{computeValue(item.position,item.livePrice)}}</td>\r\n                  <td>{{computePnl(item.position,item.livePrice,item.closePrice)}}</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n         </div>\r\n         </div>\r\n            <!-- Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class =\"modal-title\" id=\"myModalLabel\">{{security}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\" >\r\n<div class=\"classModalRow\">\r\n      <div class=\"classModalLabel\">\r\n      <label>Instrument ID</label>\r\n      </div>\r\n      <div class=\"classModalInput\">\r\n        <input type=\"text\" class=\"form-control\" id=\"security\" required [ngModel]=\"security\" name=\"security\">\r\n        </div>\r\n</div>\r\n<div class=\"classModalRow\">\r\n        <div class=\"classModalLabel\">\r\n        <label>ISIN</label>\r\n        </div>\r\n        <div class=\"classModalInput\">\r\n        <div style=\"width:80%;float:left\">\r\n        <input type=\"text\" class=\"form-control\" id=\"isin\" required [ngModel]=\"isin\" name=\"isin\"></div>\r\n        <div style=\"width:15%;float:left;padding-left:10px\">\r\n        <button type=\"button\" id=\"myButton\" data-loading-text=\"Loading...\" class=\"btn btn-info\" autocomplete=\"off\">L</button>\r\n        </div>\r\n        </div>\r\n</div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 1309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(777);


/***/ }),

/***/ 776:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 776;


/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(901);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hello!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(1277),
            styles: [__webpack_require__(1274)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__portfolio_component__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grafikon_component__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_buttons__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_layout__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_charts__ = __webpack_require__(992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__(1275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_6__portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'grafikon', component: __WEBPACK_IMPORTED_MODULE_7__grafikon_component__["a" /* GrafikonComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__portfolio_component__["a" /* PortfolioComponent */], __WEBPACK_IMPORTED_MODULE_7__grafikon_component__["a" /* GrafikonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_buttons__["a" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_layout__["a" /* TabStripModule */],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_charts__["ChartsModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrafikonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GrafikonComponent = (function () {
    function GrafikonComponent() {
        this.title = 'Hello World!';
        this.series = [{
                name: 'India',
                data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
            }, {
                name: 'Russian Federation',
                data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 7.832, 4.3, 4.3]
            }, {
                name: 'Germany',
                data: [0.010, 0.375, 1.161, 0.684, 3.7, 3.269, 1.083, 5.127, 3.690, 2.995]
            }, {
                name: 'World',
                data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, 2.245, 4.339, 2.727]
            }];
        this.categories = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
    }
    GrafikonComponent.prototype.onButtonClick = function () {
        this.title = 'Hello from Kendo UI!';
    };
    GrafikonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            template: __webpack_require__(1278),
        }), 
        __metadata('design:paramtypes', [])
    ], GrafikonComponent);
    return GrafikonComponent;
}());
//# sourceMappingURL=grafikon.component.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__(900);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = (function () {
    function PortfolioComponent() {
        this.inputName = '';
        this.setClickedRow = function (index, red) {
            this.selectedRow = index;
            this.isin = red.ISIN;
            this.security = red.security;
        };
        this.items = __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* productList */];
    }
    ;
    PortfolioComponent.prototype.computeValue = function (x, y) {
        var z = x * y;
        return z.toFixed(3);
    };
    PortfolioComponent.prototype.computePnl = function (x, y, z) {
        var t = x * (y - z);
        return t.toFixed(3);
    };
    ;
    PortfolioComponent.prototype.FilterBySecurity = function () {
        var _this = this;
        this.items = [];
        if (this.inputName != '') {
            __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* productList */].forEach(function (element) {
                if (element.security.toUpperCase().indexOf(_this.inputName.toUpperCase()) >= 0) {
                    _this.items.push(element);
                }
            });
        }
        else {
            this.items = __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* productList */];
        }
    };
    PortfolioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            template: __webpack_require__(1279),
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productList; });
var productList = [
    { "security": "EQ-INTERNATIONAL", "ISIN": "GB00065658", "position": 5958, "closePrice": 9.66, "livePrice": 9.783 },
    { "security": "EQ-DEUTSCHE TELEKOM", "ISIN": "DE000578315", "position": 2206, "closePrice": 0.949, "livePrice": 0.64 },
    { "security": "EQ-NEXANAS", "ISIN": "FR0034303", "position": -2245, "closePrice": 8.53, "livePrice": 0.94 },
    { "security": "CB-PARPUBLICA", "ISIN": "PTPE000578315", "position": 2206, "closePrice": 0.949, "livePrice": 0.64 },
    { "security": "EQ-GALP ENERGIA", "ISIN": "DE000578315", "position": 2206, "closePrice": 2.3, "livePrice": 3.5 },
    { "security": "EQ-PARGESA HOLDING", "ISIN": "DE000578315", "position": 2206, "closePrice": 0.949, "livePrice": 0.84 }
];
//# sourceMappingURL=portfolio.service.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[1309]);
//# sourceMappingURL=main.bundle.js.map