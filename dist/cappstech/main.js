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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");







function AppComponent_ng_template_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Haraj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We build Well-knowned Haraj Application & Website based on Kingdom of Saudi Arabia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Haraj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We build Well-knowned Haraj Application & Website based on Kingdom of Saudi Arabia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Haraj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We build Well-knowned Haraj Application & Website based on Kingdom of Saudi Arabia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Haraj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We build Well-knowned Haraj Application & Website based on Kingdom of Saudi Arabia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Haraj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We build Well-knowned Haraj Application & Website based on Kingdom of Saudi Arabia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_230_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_231_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_232_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_233_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_234_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_235_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "hide": a0 }; };
class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'cappstech';
        this.drawer = false;
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            navText: ['<img src="assets/images/left-circle.svg" alt="left-circle">', '<img src="assets/images/right-circle.svg" alt="right-circle">'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
            nav: true,
            autoplay: true
        };
        this.happyClient = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            navSpeed: 200,
            autoplay: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 15
                },
                400: {
                    items: 3,
                    margin: 15
                },
                740: {
                    items: 4,
                    margin: 15
                },
                940: {
                    items: 6,
                    margin: 15
                }
            },
        };
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            requirements: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    toggleDrawer() {
        this.drawer = this.drawer ? false : true;
    }
    submit(form) {
        const alert = document.getElementById('myalert');
        alert.className += 'show';
        this.contactForm.disable();
        this.http.post(`http://localhost:8888/contactForm`, form).subscribe(() => {
            this.contactForm.enable();
        });
    }
    scrollTo(container) {
        this.drawer = false;
        document.getElementById(container).scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 339, vars: 7, consts: [[1, "header", "pt-5"], [1, "header-inner"], [1, "container"], [1, "row", "align-items-center"], [1, "col-6"], [1, "logo-text"], ["src", "assets/images/logo_full.svg", "alt", "Cappstech", 1, "img-fluid"], [1, "col-6", "text-end"], [1, "btn", "btn-header-drawer", 3, "click"], ["type", "image/webp", "srcset", "assets/images/drawer.webp"], ["type", "image/png", "srcset", "assets/images/drawer.png"], ["src", "assets/images/drawer.png", "alt", "drawer"], [1, "drawer", 3, "ngClass"], [1, "col-12", "text-end"], [1, "btn", "btn-drawer-close", 3, "click"], [1, "col-12", "p-5", "text-center", "text-md-start"], [1, "main-menu", "list-unstyled"], [1, "menu-item", 3, "click"], ["id", "#home", 1, "banner-section", "py-1", "py-md-5"], [1, "banner-inner", "py-1", "py-md-5"], [1, "col-12", "col-lg-5", "py-5", "text-center", "text-lg-start"], [1, "pb-2", "pb-md-5"], [1, "pb-3"], [1, "d-none", "d-md-block"], ["href", "#contact", 1, "btn", "custom-btn", "me-3"], ["href", "#featured-projects", 1, "btn", "btn-explore-project", "my-3", "my-md-0"], [1, "ms-3"], ["src", "assets/images/feather-arrow-right-circle.svg", "alt", "feather arrow right circle"], [1, "col-12", "col-lg-7"], ["type", "image/webp", "srcset", "assets/images/banner-img.webp"], ["type", "image/png", "srcset", "assets/images/banner-img.png"], ["src", "assets/images/banner-img.png", "alt", "banner-img", 1, "img-fluid"], [1, "col-12", "text-center", "mt-5", "py-5"], ["href", "#services-provide-section"], ["id", "services-provide", 1, "services-provide-section"], [1, "services-provide-inner"], [1, "row"], [1, "col-12", "col-md-2"], [1, "col-12", "col-md-8", "text-center"], ["type", "image/webp", "srcset", "assets/images/services-img.webp"], ["type", "image/png", "srcset", "assets/images/services-img.png"], ["src", "assets/images/services-img.png", "alt", "services-img", 1, "img-fluid", "service-img"], [1, "row", "py-5", "services-details", "g-1", "g-md-5"], [1, "col-12", "col-md-6", "col-lg-4", "text-center", "text-md-start"], ["src", "assets/images/component-2.svg", "alt", "component-2", 1, "pb-3", "pb-md-5"], [1, "pb-4"], ["src", "assets/images/component-3.svg", "alt", "component-3", 1, "pb-3", "pb-md-5"], ["src", "assets/images/component-4.svg", "alt", "component-4", 1, "pb-3", "pb-md-5"], ["src", "assets/images/component-7.svg", "alt", "component-7", 1, "pb-3", "pb-md-5"], ["src", "assets/images/component-6.svg", "alt", "component-6", 1, "pb-3", "pb-md-5"], ["src", "assets/images/component-5.svg", "alt", "component-5", 1, "pb-3", "pb-md-5"], [1, "col-12", "text-center"], [1, "btn", "custom-btn", "me-3"], ["id", "featured-projects", 1, "featured-projects-section", "py-5"], [1, "featured-projects-inner"], [1, "row", "py-5"], ["id", "feature-slider", 1, "feature-slider", "py-5"], [3, "options"], ["featslider", ""], ["carouselSlide", ""], ["id", "about", 1, "about-section", "py-5", "overflow-hidden"], [1, "about-inner", "py-5"], [1, "container", "mb-4", "p-lg-5", "pe-lg-0"], [1, "btn", "custom-btn"], ["type", "image/webp", "srcset", "assets/images/Finance.webp"], ["type", "image/png", "srcset", "assets/images/Finance.png"], ["src", "assets/images/Finance.png", "alt", "Finance-img", 1, "img-fluid"], ["id", "professional", 1, "professional-section"], [1, "professional-inner"], [1, "col-12", "col-md-4"], [1, "icon-box", "mb-5"], ["type", "image/webp", "srcset", "assets/icons/Image3.webp"], ["type", "image/png", "srcset", "assets/icons/Image3.png"], ["src", "assets/icons/Image3.png", "alt", ""], ["type", "image/webp", "srcset", "assets/icons/Image8.webp"], ["type", "image/png", "srcset", "assets/icons/Image8.png"], ["src", "assets/icons/Image8.png", "alt", ""], ["type", "image/webp", "srcset", "assets/icons/Image4.webp"], ["type", "image/png", "srcset", "assets/icons/Image4.png"], ["src", "assets/icons/Image4.png", "alt", ""], ["type", "image/webp", "srcset", "assets/icons/Image6.webp"], ["type", "image/png", "srcset", "assets/icons/Image6.png"], ["src", "assets/icons/Image6.png", "alt", ""], ["type", "image/webp", "srcset", "assets/icons/Image7.webp"], ["type", "image/png", "srcset", "assets/icons/Image7.png"], ["src", "assets/icons/Image6.png", "alt", "Google"], ["type", "image/webp", "srcset", "assets/icons/Image5.webp"], ["type", "image/png", "srcset", "assets/icons/Image5.png"], ["src", "assets/icons/Image5.png", "alt", ""], ["type", "image/webp", "srcset", "assets/icons/apple.webp"], ["type", "image/png", "srcset", "assets/icons/apple.png"], ["src", "assets/icons/apple.png", "alt", "Apple"], [1, "happy-client-section", "py-5"], [1, "happy-client-inner"], ["id", "happy-client", 1, "container"], [1, "mb-4"], [1, "w-100"], [1, "conversation-section", "py-5"], [1, "conversation-inner"], ["type", "image/webp", "srcset", "assets/images/conversation-image.webp"], ["type", "image/png", "srcset", "assets/images/conversation-image.png"], ["src", "assets/images/conversation-image.png", "alt", "conversation-img", 1, "img-fluid", "conversation-img"], ["id", "contact", 1, "form-section", "py-5"], [1, "form-inner"], [1, "col-12", "col-lg-2", "col-xl-3"], [1, "col-12", "col-lg-8", "col-xl-6"], [3, "formGroup", "ngSubmit"], [1, "col-12", "col-md-6", "mb-4"], ["for", "name", 1, "required", "form-label"], ["type", "text", "formControlName", "name", 1, "form-control"], ["for", "CompanyName", 1, "form-label"], ["type", "text", "formControlName", "companyName", 1, "form-control"], ["for", "Email", 1, "required", "form-label"], ["type", "email", "formControlName", "email", 1, "form-control"], ["for", "where_are_you_based", 1, "form-label"], ["type", "text", "formControlName", "location", 1, "form-control"], [1, "col-12", "mb-4"], ["for", "about_project_requirement", 1, "required", "form-label"], ["formControlName", "requirements", "id", "about_project_requirement", 1, "form-control", 2, "height", "200px"], ["type", "submit", 1, "btn", "custom-btn", "w-100", 3, "disabled"], [1, "row", "pt-5"], ["id", "footer", 1, "py-5"], [1, "footer-inner"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "logo-text", "mb-3"], [1, "col-12", "col-md-6", "col-lg-4", "footer-quick-links"], [1, "list-unstyled"], ["href", "#home"], ["href", "#featured-projects"], ["href", "#"], ["href", "#services-provide"], ["href", "#about"], ["href", "#contact"], [1, "col-12", "col-md-6", "col-lg-4", "mt-4", "mt-lg-0"], ["href", "mailto:hello@cappstech.com"], [1, "social-list", "list-inline", "mt-4"], [1, "list-inline-item", "me-4"], ["href", "https://www.facebook.com/CappstechOnFB"], ["src", "assets/images/facebook.svg", "alt", "facebook"], ["href", "https://twitter.com/cappstech"], ["src", "assets/images/twitter.svg", "alt", "twitter"], ["href", "https://www.linkedin.com/company/cappstech"], ["src", "assets/images/linkedin.svg", "alt", "linkedin"], ["role", "alert", "id", "myalert", 1, "alert", "alert-success", "w-100", "alert-dismissible", "fade"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], [1, "row", "align-items-center", "w-100", "ps-4"], [1, "btn", "custom-btn", "me-lg-3"], [1, "col-12", "col-lg-7", "text-center", "text-lg-end"], ["type", "image/webp", "srcset", "assets/images/feature-img.webp"], ["type", "image/png", "srcset", "assets/images/feature-img.png"], ["src", "assets/images/feature-img.png", "alt", "feature-img", 1, "img-fluid"], ["type", "image/webp", "srcset", "assets/images/Image9.webp"], ["type", "image/png", "srcset", "assets/images/Image9.png"], ["src", "assets/images/Image9.png", "alt", ""], ["type", "image/webp", "srcset", "assets/images/Image10.webp"], ["type", "image/png", "srcset", "assets/images/Image10.png"], ["src", "assets/images/Image10.png", "alt", ""], ["type", "image/webp", "srcset", "assets/images/Image11.webp"], ["type", "image/png", "srcset", "assets/images/Image11.png"], ["src", "assets/images/Image11.png", "alt", ""], ["type", "image/webp", "srcset", "assets/images/Image12.webp"], ["type", "image/png", "srcset", "assets/images/Image12.png"], ["src", "assets/images/Image12.png", "alt", ""], ["type", "image/webp", "srcset", "assets/images/Image14.webp"], ["type", "image/png", "srcset", "assets/images/Image14.png"], ["src", "assets/images/Image14.png", "alt", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.toggleDrawer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() { return ctx.toggleDrawer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u292B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_19_listener() { return ctx.scrollTo("services-provide"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_22_listener() { return ctx.scrollTo("featured-projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Featured Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_25_listener() { return ctx.scrollTo("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About Cappstech");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_28_listener() { return ctx.scrollTo("professional"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "We are Professionals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_31_listener() { return ctx.scrollTo("happy-client"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Our Happy Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_34_listener() { return ctx.scrollTo("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "We are Cappstech");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Software Design & Development Agency,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Working with startups & scaleups to design growth-driven");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Explore Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "source", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "source", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "SCROll!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Services we provide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "We build & design impactful Web & Mobile Application and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done, we\u2019ve developed a highly optimised process that takes the brand to the next level.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "source", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "source", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Software ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "We build highly impactful Custom software for startup & multidisciplinary companies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Mobile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "We architect, build and deliver exceptional digital experiences with micro-interaction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "UI UX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Designing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "We craft creative design for Mobile & web that make your brand standout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "We build highly impactful Custom software for startup & multidisciplinary companies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Back-End ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "We architect, build and deliver exceptional digital experiences with micro-interaction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Branding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Identity Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "We craft creative design for Mobile & web that make your brand standout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Explore Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "section", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Featured Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "We build & design impactful Web & Mobile Application and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done, we\u2019ve developed a highly optimised process that takes the brand to the next level.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "owl-carousel-o", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, AppComponent_ng_template_144_Template, 13, 0, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, AppComponent_ng_template_145_Template, 13, 0, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, AppComponent_ng_template_146_Template, 13, 0, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, AppComponent_ng_template_147_Template, 13, 0, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, AppComponent_ng_template_148_Template, 13, 0, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "About Cappstech");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "We build more than just experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "We build & design impactful Web & Mobile Application and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done, we\u2019ve developed a highly optimised process that takes the brand to the next level.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "source", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "source", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "section", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "We are Professionals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "We're a growing family of 382,081 designers and makers from around the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "source", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "source", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "source", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "source", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "source", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "source", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "source", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "source", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "source", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "source", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "source", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "source", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "source", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "source", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "section", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h2", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Our Happy Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "We have been proudly partnering with more than 700 forward-thinking companies of all sizes, from startups to world-famous enterprises.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "owl-carousel-o", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](230, AppComponent_ng_template_230_Template, 4, 0, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](231, AppComponent_ng_template_231_Template, 4, 0, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](232, AppComponent_ng_template_232_Template, 4, 0, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](233, AppComponent_ng_template_233_Template, 4, 0, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](234, AppComponent_ng_template_234_Template, 4, 0, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](235, AppComponent_ng_template_235_Template, 4, 0, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "section", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Let\u2019s Start the Conversation!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Get our bi-weekly emails \uD83D\uDC8C with insightful content on how to boost your product growth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "source", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "source", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "section", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "form", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_256_listener() { return ctx.submit(ctx.contactForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "label", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "input", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "label", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "input", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "label", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "input", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "label", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Where are you based?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "label", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "About Project Requirement?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "textarea", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "button", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Let\u2019s make something amazing together");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "footer", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Get our bi-weekly emails \uD83D\uDC8C with insightful content on how to boost your product growth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "ul", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "a", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "a", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Start Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Hello@Cappstech.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "ul", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "li", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "img", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "a", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "li", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "a", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Copyright \u00A9 2021 Cappstech. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " Thank you for contacting us. We'll reply back to you soon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "button", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.drawer));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.happyClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselSlideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["@font-face {\n  font-family: \"Gilroy\";\n  font-style: 300;\n  font-weight: normal;\n  src: url('Gilroy-Regular.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('Gilroy-Medium.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-style: normal;\n  font-weight: 700;\n  src: url('Gilroy-Bold.woff') format(\"woff\");\n}\nbody {\n  background-color: #FCFAF7;\n  font-family: \"Gilroy\", sans-serif;\n  color: #000;\n}\np {\n  font-size: 20px;\n}\n.btn:focus {\n  outline: 0;\n  box-shadow: none;\n}\n.custom-btn {\n  background-color: #ff6f2f;\n  border: 2px solid #ff6f2f;\n  border-radius: 17px;\n  font-size: 20px;\n  color: #fff !important;\n  padding: 10px 50px;\n}\n.custom-btn:hover {\n  background-color: #fff;\n  color: #ff6f2f !important;\n}\n.header .header-inner .row .logo-text {\n  font-size: 50px;\n  font-weight: bold;\n}\n.header .header-inner .row .btn-header-drawer {\n  background: transparent;\n  border: none;\n}\n@media (max-width: 767px) {\n  .header .header-inner .row .logo-text {\n    font-size: 30px;\n  }\n  .header .header-inner .row .btn-header-drawer img {\n    height: 50px;\n    width: 50px;\n  }\n}\n.header .drawer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  max-width: 400px;\n  width: 100%;\n  background-color: #000;\n  z-index: 100;\n  transition: transform 0.2s linear;\n  transform: translateX(400px);\n}\n.header .drawer .btn-drawer-close {\n  background: transparent;\n  color: #fff;\n  font-size: 40px;\n  line-height: 1;\n}\n.header .drawer ul.main-menu li.menu-item {\n  padding: 20px 0;\n}\n.header .drawer ul.main-menu li.menu-item a {\n  text-decoration: none;\n  color: #fff;\n  font-size: 20px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.header .hide {\n  transform: translateX(0px);\n}\n.banner-section {\n  overflow: hidden;\n}\n.banner-section .banner-inner .row h1 {\n  font-size: 90px;\n  line-height: 0.8;\n}\n.banner-section .banner-inner .row a {\n  color: #000;\n  font-size: 18px;\n  text-decoration: none;\n}\n.banner-section .banner-inner .row .btn-explore-project {\n  font-size: 20px;\n  color: #000;\n}\n.banner-section .banner-inner .row .btn-explore-project:hover img {\n  transform: rotate(-45deg);\n}\n.banner-section .banner-inner .row .btn-explore-project img {\n  width: 50px;\n  height: 50px;\n  transition: 0.4s ease;\n}\n.banner-section .banner-inner .row .col-lg-7 img {\n  animation: bounce 4s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n@media (max-width: 767px) {\n  .banner-section .banner-inner .row h1 {\n    font-size: 40px;\n  }\n}\n.services-provide-section .services-provide-inner .container .row h2 {\n  font-size: 70px;\n}\n.services-provide-section .services-provide-inner .container .row .btn-explore-services {\n  background-color: #ff6f2f;\n  border: 2px solid #ff6f2f;\n  border-radius: 17px;\n  font-size: 20px;\n  color: #fff;\n  padding: 10px 50px;\n}\n.services-provide-section .services-provide-inner .container .row .btn-explore-services:hover {\n  background-color: #fff;\n  color: #ff6f2f;\n}\n.services-provide-section .services-provide-inner .row.services-details h3 {\n  font-size: 40px;\n}\n.services-provide-section .services-provide-inner .row.services-details h3:after {\n  content: \"\";\n  background-color: #6D89AE;\n  height: 8px;\n  width: 88px;\n  display: block;\n  margin-top: 35px;\n}\n.services-provide-section .services-provide-inner .row.services-details p {\n  font-size: 18px;\n}\n@media (max-width: 767px) {\n  .services-provide-section .services-provide-inner .row.services-details h3 {\n    font-size: 28px;\n  }\n  .services-provide-section .services-provide-inner .row.services-details h3:after {\n    margin: 20px auto 0;\n  }\n}\n@media (max-width: 767px) {\n  .services-provide-section .services-provide-inner .row h2 {\n    font-size: 36px;\n  }\n}\n.featured-projects-section .featured-projects-inner .row h2 {\n  font-size: 70px;\n}\n.featured-projects-section .featured-projects-inner .feature-slider .owl-nav {\n  margin-top: 80px;\n}\n.featured-projects-section .featured-projects-inner .feature-slider .owl-nav .owl-prev, .featured-projects-section .featured-projects-inner .feature-slider .owl-nav .owl-next {\n  background: transparent;\n}\n.featured-projects-section .featured-projects-inner .feature-slider .owl-nav .owl-prev img, .featured-projects-section .featured-projects-inner .feature-slider .owl-nav .owl-next img {\n  width: 60px;\n}\n.featured-projects-section .featured-projects-inner .feature-slider .owl-nav .owl-prev {\n  transform: translateX(-90px);\n}\n.featured-projects-section .featured-projects-inner .feature-slider .owl-nav .owl-next {\n  transform: translateX(90px);\n}\n.featured-projects-section .featured-projects-inner .feature-slider .owl-dots {\n  margin-top: -50px;\n}\n.featured-projects-section .featured-projects-inner .feature-slider .owl-dots .owl-dot span {\n  background: #6D89AE;\n  width: 11px;\n  height: 8px;\n  border-radius: 12px;\n  margin: 2px;\n  transition: all 0.25s ease-in;\n}\n.featured-projects-section .featured-projects-inner .feature-slider .owl-dots .owl-dot.active span {\n  background: #ff6f2f;\n  width: 80px;\n}\n@media (max-width: 767px) {\n  .featured-projects-section .featured-projects-inner .row h2 {\n    font-size: 36px;\n  }\n}\n.about-section .about-inner .container {\n  background-color: #fff;\n  border-radius: 63px;\n  box-shadow: 0px 40px 99px #D6BFB129;\n}\n.about-section .about-inner .container .row h3 {\n  font-size: 34px;\n}\n.about-section .about-inner .container .row h2 {\n  font-size: 54px;\n}\n.about-section .about-inner .container .row .col-lg-7 img {\n  animation: bounce 4s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n@media (max-width: 767px) {\n  .about-section .about-inner .container .row h3 {\n    font-size: 20px;\n  }\n  .about-section .about-inner .container .row h2 {\n    font-size: 24px;\n  }\n}\n.professional-section .professional-inner .row h2 {\n  font-size: 80px;\n}\n.professional-section .professional-inner .row .icon-box {\n  width: 150px;\n  height: 150px;\n  background-color: #fff;\n  box-shadow: 0px 100px 99px #D6BFB129;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n@media (max-width: 1200px) {\n  .professional-section .professional-inner .row h2 {\n    font-size: 60px;\n  }\n}\n@media (max-width: 1200px) {\n  .professional-section .professional-inner .row h2 {\n    font-size: 40px;\n  }\n}\n.happy-client-section .happy-client-inner .row h2 {\n  font-size: 70px;\n}\n@media (max-width: 767px) {\n  .happy-client-section .happy-client-inner .row h2 {\n    font-size: 36px;\n  }\n}\n.conversation-section .conversation-inner .row h2 {\n  font-size: 54px;\n}\n@media (max-width: 767px) {\n  .conversation-section .conversation-inner .row h2 {\n    font-size: 24px;\n  }\n}\n.form-section .form-inner .row h2 {\n  font-size: 60px;\n}\n.form-section .form-inner .row form label {\n  font-size: 20px;\n}\n.form-section .form-inner .row form label.required::after {\n  content: \" *\";\n  color: red;\n}\n.form-section .form-inner .row form input, .form-section .form-inner .row form textarea {\n  background-color: #F5F1EA;\n  border-radius: 20px;\n  border: none;\n  padding: 15px 10px;\n  box-shadow: unset;\n}\n@media (max-width: 767px) {\n  .form-section .form-inner .row h2 {\n    font-size: 28px;\n  }\n}\n#footer {\n  background-color: #434F59;\n}\n#footer .footer-inner .row h2 {\n  font-size: 50px;\n  font-weight: bold;\n  color: #FCFAF7;\n}\n#footer .footer-inner .row p {\n  color: #FCFAF7;\n}\n#footer .footer-inner .row a {\n  text-decoration: none;\n  color: #FCFAF7;\n}\n#footer .footer-inner .row .footer-quick-links {\n  color: #FCFAF7;\n}\n#footer .footer-inner .row .footer-quick-links ul {\n  column-count: 2;\n  font-size: 18px;\n  line-height: 2.5;\n}\n@media (max-width: 767px) {\n  p {\n    font-size: 16px;\n  }\n}\n@keyframes bounce {\n  50% {\n    transform: translateY(-15px);\n  }\n}\n.service-img, .conversation-img {\n  animation: bounce 4s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n.alert {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQUxKO0FBT0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQUxKO0FBT0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUxKO0FBUUE7RUFBSyx5QkF2Qk87RUF1QndCLGlDQUFBO0VBQWtDLFdBekIvRDtBQXNCUDtBQUlBO0VBQUUsZUFBQTtBQUFGO0FBQ0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUNBO0VBQ0kseUJBOUJRO0VBK0JSLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUVKO0FBREk7RUFDSSxzQkF2Q0E7RUF3Q0EseUJBQUE7QUFHUjtBQUlZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBRGhCO0FBR1k7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUFEaEI7QUFHWTtFQUNJO0lBQ0ksZUFBQTtFQURsQjtFQUlrQjtJQUNJLFlBQUE7SUFDQSxXQUFBO0VBRnRCO0FBQ0Y7QUFPSTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkE1RUQ7RUE2RUMsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7QUFMUjtBQU1RO0VBQ0ksdUJBQUE7RUFDQSxXQWpGSjtFQWtGSSxlQUFBO0VBQ0EsY0FBQTtBQUpaO0FBT1k7RUFDSSxlQUFBO0FBTGhCO0FBTWdCO0VBQUUscUJBQUE7RUFBdUIsV0FBQTtFQUFhLGVBQUE7RUFBaUIseUJBQUE7RUFBMkIsZUFBQTtBQUNsRztBQUdJO0VBQU0sMEJBQUE7QUFBVjtBQUVBO0VBQWdCLGdCQUFBO0FBRWhCO0FBQ1k7RUFBRyxlQUFBO0VBQWlCLGdCQUFBO0FBR2hDO0FBRlk7RUFBRSxXQW5HUDtFQW1Hc0IsZUFBQTtFQUFpQixxQkFBQTtBQU85QztBQU5ZO0VBQ0ksZUFBQTtFQUNBLFdBdEdUO0FBOEdQO0FBTm9CO0VBQ0kseUJBQUE7QUFReEI7QUFMZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBT3BCO0FBSGdCO0VBQ0ksbUVBQUE7QUFLcEI7QUFBSTtFQUdZO0lBQUcsZUFBQTtFQUNqQjtBQUNGO0FBT2dCO0VBQUcsZUFBQTtBQUhuQjtBQUlnQjtFQUNJLHlCQXBJUjtFQXFJUSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBMUlaO0VBMklZLGtCQUFBO0FBRnBCO0FBR29CO0VBQ0ksc0JBN0loQjtFQThJZ0IsY0E1SVo7QUEySVo7QUFPWTtFQUFHLGVBQUE7QUFKZjtBQUtnQjtFQUNJLFdBQUE7RUFDQSx5QkFwSlI7RUFxSlEsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFIcEI7QUFNWTtFQUFFLGVBQUE7QUFIZDtBQUtRO0VBRVE7SUFBRyxlQUFBO0VBSGpCO0VBSWtCO0lBQVEsbUJBQUE7RUFEMUI7QUFDRjtBQUtJO0VBR1k7SUFBRyxlQUFBO0VBSmpCO0FBQ0Y7QUFXWTtFQUFHLGVBQUE7QUFQZjtBQVVZO0VBQVMsZ0JBQUE7QUFQckI7QUFRZ0I7RUFDSSx1QkFBQTtBQU5wQjtBQU9vQjtFQUNJLFdBQUE7QUFMeEI7QUFRZ0I7RUFBVSw0QkFBQTtBQUwxQjtBQU1nQjtFQUFVLDJCQUFBO0FBSDFCO0FBS1k7RUFDSSxpQkFBQTtBQUhoQjtBQUtvQjtFQUNJLG1CQWpNWjtFQWtNWSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBSHhCO0FBTXdCO0VBQ0ksbUJBM01oQjtFQTRNZ0IsV0FBQTtBQUo1QjtBQWVJO0VBR1k7SUFBRyxlQUFBO0VBZGpCO0FBQ0Y7QUFvQlE7RUFBVyxzQkFuT1g7RUFtT3FDLG1CQUFBO0VBQXFCLG1DQUFBO0FBZGxFO0FBZ0JnQjtFQUFHLGVBQUE7QUFibkI7QUFjZ0I7RUFBRyxlQUFBO0FBWG5CO0FBYW9CO0VBQ0ksbUVBQUE7QUFYeEI7QUFpQkk7RUFJZ0I7SUFBRyxlQUFBO0VBakJyQjtFQWtCa0I7SUFBRyxlQUFBO0VBZnJCO0FBQ0Y7QUF1Qlk7RUFBRyxlQUFBO0FBbkJmO0FBb0JZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFqUVI7RUFrUVEsb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWxCaEI7QUFzQkk7RUFHWTtJQUFHLGVBQUE7RUFyQmpCO0FBQ0Y7QUF3Qkk7RUFHWTtJQUFHLGVBQUE7RUF2QmpCO0FBQ0Y7QUE4Qlk7RUFBRyxlQUFBO0FBMUJmO0FBNkJJO0VBR1k7SUFBRyxlQUFBO0VBNUJqQjtBQUNGO0FBbUNZO0VBQUcsZUFBQTtBQS9CZjtBQWtDSTtFQUdZO0lBQUcsZUFBQTtFQWpDakI7QUFDRjtBQXdDWTtFQUNJLGVBQUE7QUFyQ2hCO0FBd0NnQjtFQUNJLGVBQUE7QUF0Q3BCO0FBMENvQjtFQUNJLGFBQUE7RUFDQSxVQUFBO0FBeEN4QjtBQTJDZ0I7RUFDSSx5QkFwVWQ7RUFxVWMsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXpDcEI7QUE4Q0k7RUFHWTtJQUNJLGVBQUE7RUE5Q2xCO0FBQ0Y7QUFvREE7RUFDSSx5QkFBQTtBQWpESjtBQW9EWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFsRGhCO0FBb0RZO0VBQUUsY0FBQTtBQWpEZDtBQWtEWTtFQUFFLHFCQUFBO0VBQXVCLGNBQUE7QUE5Q3JDO0FBK0NZO0VBQ0ksY0FBQTtBQTdDaEI7QUE4Q2dCO0VBQUcsZUFBQTtFQUFpQixlQUFBO0VBQWlCLGdCQUFBO0FBekNyRDtBQWdEQTtFQUNJO0lBQUUsZUFBQTtFQTVDSjtBQUNGO0FBOENBO0VBQ0M7SUFDQyw0QkFBQTtFQTVDQTtBQUNGO0FBK0NBO0VBQ0ksbUVBQUE7QUE3Q0o7QUFnREE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQTdDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibGFjazojMDAwO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRib2R5LWNvbG9yOiNGQ0ZBRjc7XHJcbiRidG4tb3JhbmdlOiNmZjZmMmY7XHJcbiRsaWdodC1ibHVlOiM2RDg5QUU7XHJcbiRncmV5OiNGNUYxRUE7XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xyXG4gICAgZm9udC1zdHlsZTogMzAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvR2lscm95LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvR2lscm95LU1lZGl1bS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9HaWxyb3ktQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbn1cclxuXHJcbmJvZHl7YmFja2dyb3VuZC1jb2xvcjogJGJvZHktY29sb3I7IGZvbnQtZmFtaWx5OidHaWxyb3knLCBzYW5zLXNlcmlmOyBjb2xvcjogJGJsYWNrO31cclxucHtmb250LXNpemU6IDIwcHg7fVxyXG4uYnRuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY3VzdG9tLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRidG4tb3JhbmdlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGJ0bi1vcmFuZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICRidG4tb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICAuaGVhZGVyLWlubmVye1xyXG4gICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgIC5sb2dvLXRleHR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLWhlYWRlci1kcmF3ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgICAgICAgICAgICAubG9nby10ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4taGVhZGVyLWRyYXdlcntcclxuICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRyYXdlcntcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjBzIGxpbmVhcjtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDAwcHgpO1xyXG4gICAgICAgIC5idG4tZHJhd2VyLWNsb3Nle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwubWFpbi1tZW51e1xyXG4gICAgICAgICAgICBsaS5tZW51LWl0ZW17XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBhe3RleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMjBweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgY3Vyc29yOiBwb2ludGVyO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oaWRle3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO31cclxufVxyXG4uYmFubmVyLXNlY3Rpb257b3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5iYW5uZXItaW5uZXJ7XHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgaDF7Zm9udC1zaXplOiA5MHB4OyBsaW5lLWhlaWdodDogMC44O31cclxuICAgICAgICAgICAgYXtjb2xvcjogJGJsYWNrOyBmb250LXNpemU6IDE4cHg7IHRleHQtZGVjb3JhdGlvbjogbm9uZTt9XHJcbiAgICAgICAgICAgIC5idG4tZXhwbG9yZS1wcm9qZWN0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2wtbGctN3tcclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGJvdW5jZSA0cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC40NDUsMC4wNSwwLjU1LDAuOTUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgIC5iYW5uZXItaW5uZXJ7XHJcbiAgICAgICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgICAgICBoMXtmb250LXNpemU6IDQwcHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5zZXJ2aWNlcy1wcm92aWRlLXNlY3Rpb257XHJcbiAgICAuc2VydmljZXMtcHJvdmlkZS1pbm5lcntcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAucm93e1xyXG4gICAgICAgICAgICAgICAgaDJ7Zm9udC1zaXplOiA3MHB4O31cclxuICAgICAgICAgICAgICAgIC5idG4tZXhwbG9yZS1zZXJ2aWNlc3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLW9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYnRuLW9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYnRuLW9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdy5zZXJ2aWNlcy1kZXRhaWxze1xyXG4gICAgICAgICAgICBoM3tmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtmb250LXNpemU6IDE4cHg7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgICAgICAgIC5yb3cuc2VydmljZXMtZGV0YWlsc3tcclxuICAgICAgICAgICAgICAgIGgze2ZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye21hcmdpbjogMjBweCBhdXRvIDA7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgIC5zZXJ2aWNlcy1wcm92aWRlLWlubmVye1xyXG4gICAgICAgICAgICAucm93e1xyXG4gICAgICAgICAgICAgICAgaDJ7Zm9udC1zaXplOiAzNnB4O31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZmVhdHVyZWQtcHJvamVjdHMtc2VjdGlvbntcclxuICAgIC5mZWF0dXJlZC1wcm9qZWN0cy1pbm5lcntcclxuICAgICAgICAucm93e1xyXG4gICAgICAgICAgICBoMntmb250LXNpemU6IDcwcHg7fVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmVhdHVyZS1zbGlkZXJ7XHJcbiAgICAgICAgICAgIC5vd2wtbmF2e21hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAub3dsLXByZXYsIC5vd2wtbmV4dHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5vd2wtcHJldnt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTkwcHgpO31cclxuICAgICAgICAgICAgICAgIC5vd2wtbmV4dHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCk7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vd2wtZG90c3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgICAgICAgICAgLm93bC1kb3R7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0LWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJ0bi1vcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6OTkycHgpe1xyXG5cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgICAgICAuZmVhdHVyZWQtcHJvamVjdHMtaW5uZXJ7XHJcbiAgICAgICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgICAgICBoMntmb250LXNpemU6IDM2cHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5hYm91dC1zZWN0aW9ue1xyXG4gICAgLmFib3V0LWlubmVye1xyXG4gICAgICAgIC5jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjogJHdoaXRlOyBib3JkZXItcmFkaXVzOiA2M3B4OyBib3gtc2hhZG93OiAwcHggNDBweCA5OXB4ICNENkJGQjEyOTtcclxuICAgICAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgICAgIGgze2ZvbnQtc2l6ZTogMzRweDt9XHJcbiAgICAgICAgICAgICAgICBoMntmb250LXNpemU6IDU0cHg7fVxyXG4gICAgICAgICAgICAgICAgLmNvbC1sZy03e1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UgNHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNDQ1LDAuMDUsMC41NSwwLjk1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgICAgLmFib3V0LWlubmVye1xyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgICAgICAgICBoM3tmb250LXNpemU6IDIwcHg7fVxyXG4gICAgICAgICAgICAgICAgICAgIGgye2ZvbnQtc2l6ZTogMjRweDt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnByb2Zlc3Npb25hbC1zZWN0aW9ue1xyXG4gICAgLnByb2Zlc3Npb25hbC1pbm5lcntcclxuICAgICAgICAucm93e1xyXG4gICAgICAgICAgICBoMntmb250LXNpemU6IDgwcHg7fVxyXG4gICAgICAgICAgICAuaWNvbi1ib3h7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwMHB4IDk5cHggI0Q2QkZCMTI5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjEyMDBweCl7XHJcbiAgICAgICAgLnByb2Zlc3Npb25hbC1pbm5lcntcclxuICAgICAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgICAgIGgye2ZvbnQtc2l6ZTogNjBweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDoxMjAwcHgpe1xyXG4gICAgICAgIC5wcm9mZXNzaW9uYWwtaW5uZXJ7XHJcbiAgICAgICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgICAgICBoMntmb250LXNpemU6IDQwcHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5oYXBweS1jbGllbnQtc2VjdGlvbntcclxuICAgIC5oYXBweS1jbGllbnQtaW5uZXJ7XHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgaDJ7Zm9udC1zaXplOiA3MHB4O31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgICAgLmhhcHB5LWNsaWVudC1pbm5lcntcclxuICAgICAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgICAgIGgye2ZvbnQtc2l6ZTogMzZweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNvbnZlcnNhdGlvbi1zZWN0aW9ue1xyXG4gICAgLmNvbnZlcnNhdGlvbi1pbm5lcntcclxuICAgICAgICAucm93e1xyXG4gICAgICAgICAgICBoMntmb250LXNpemU6IDU0cHg7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgICAgICAuY29udmVyc2F0aW9uLWlubmVye1xyXG4gICAgICAgICAgICAucm93e1xyXG4gICAgICAgICAgICAgICAgaDJ7Zm9udC1zaXplOiAyNHB4O31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZm9ybS1zZWN0aW9ue1xyXG4gICAgLmZvcm0taW5uZXJ7XHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbC5yZXF1aXJlZHtcclxuICAgICAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyAqJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dCwgdGV4dGFyZWF7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgIC5mb3JtLWlubmVye1xyXG4gICAgICAgICAgICAucm93e1xyXG4gICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNEY1OTtcclxuICAgIC5mb290ZXItaW5uZXJ7XHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkNGQUY3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7Y29sb3I6ICNGQ0ZBRjc7fVxyXG4gICAgICAgICAgICBhe3RleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6ICNGQ0ZBRjc7fVxyXG4gICAgICAgICAgICAuZm9vdGVyLXF1aWNrLWxpbmtze1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGQ0ZBRjc7XHJcbiAgICAgICAgICAgICAgICB1bHtjb2x1bW4tY291bnQ6IDI7IGZvbnQtc2l6ZTogMThweDsgbGluZS1oZWlnaHQ6IDIuNTt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICBwe2ZvbnQtc2l6ZTogMTZweDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlIHtcclxuXHQ1MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcclxuXHR9XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWltZywgLmNvbnZlcnNhdGlvbi1pbWd7XHJcbiAgICBhbmltYXRpb246IGJvdW5jZSA0cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC40NDUsMC4wNSwwLjU1LDAuOTUpO1xyXG59XHJcblxyXG4uYWxlcnR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Fiverr\cappstech\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map