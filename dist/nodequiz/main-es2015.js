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

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/four-zero-four/four-zero-four.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/four-zero-four/four-zero-four.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>four-zero-four works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/nav-bar/nav-bar.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/nav-bar/nav-bar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\">\r\n    <mat-toolbar>NodeQuiz</mat-toolbar>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-presentations/quiz-presentations.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz-presentations/quiz-presentations.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n=====================================\r\n  ; Title: quiz-presentations.component.html\r\n  ; Author: Natasha Whitmer\r\n  ; Date: October 20 2019\r\n  ; Description: quiz-presentations.component.html\r\n======================================\r\n-->\r\n<small *ngIf=\"errorMessage\">{{ errorMessage }}</small>\r\n<div fxLayout=\"column\" *ngIf=\"quiz\">\r\n    <mat-card >\r\n        <mat-card-title>{{quiz.quizName}}</mat-card-title>\r\n        <mat-card-content>\r\n            <p-carousel [value]=\"presentationImages\" numVisibile=\"1\">\r\n                <ng-template let-item pTemplate=\"item\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <div fxFlex>\r\n                        <img src=\"../../../assets/presentations/{{quiz.quizId}}/{{item.name}}.jpg\">\r\n                    </div>\r\n                </div>\r\n                </ng-template>\r\n            </p-carousel>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button fxFlex mat-raised-button color=\"primary\" (click)=\"goToQuizPage(quiz.quizId)\">Take Quiz</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-results/quiz-results.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz-results/quiz-results.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>quiz-results works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-selection/quiz-selection.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz-selection/quiz-selection.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n=====================================\r\n  ; Title: quiz-selection.component.html\r\n  ; Author: Natasha Whitmer\r\n  ; Date: October 20 2019\r\n  ; Description: quiz-selection.component.html\r\n======================================\r\n-->\r\n<div class=\"quizselect\">\r\n    <h2>Please select your quiz below!</h2>\r\n    <div class=\"row\">\r\n        <div class=\"column\">\r\n            <mat-card>\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"quiz-header-image\"></div>\r\n                    <mat-card-title>RESTful APIs</mat-card-title>\r\n                    <mat-card-subtitle>Quiz 1</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"../../../assets/presentations/1001/1.JPG\" alt=\"photo of slide 1\" style=\"width:100%\">\r\n                <mat-card-content>\r\n                    <p>This quiz is in regards to RESTful APIs.</p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <button mat-raised-button color=\"primary\" (click)=\"goToPresentationPage(1001)\">View Presentation</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n        <div class=\"column\">\r\n            <mat-card>\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"quiz-header-image\"></div>\r\n                    <mat-card-title>Development Operations</mat-card-title>\r\n                    <mat-card-subtitle>Quiz 2</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"../../../assets/presentations/1002/1.JPG\" alt=\"photo of slide 1\" style=\"width:100%; align-content: center\">\r\n                <mat-card-content>\r\n                    <p>This quiz is in regards to Development Operations.</p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <button mat-raised-button color=\"primary\" (click)=\"goToPresentationPage(1002)\">View Presentation</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n        <div class=\"column\">\r\n            <mat-card>\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"quiz-header-image\"></div>\r\n                    <mat-card-title>HTML, CSS, and JS</mat-card-title>\r\n                    <mat-card-subtitle>Quiz 3</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"../../../assets/presentations/1003/1.JPG\" alt=\"photo of slide 1\" style=\"width:100%\">\r\n                <mat-card-content>\r\n                    <p>This quiz is in regards to HTML, CSS, & JavaScript.</p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <button mat-raised-button color=\"primary\" (click)=\"goToPresentationPage(1003)\">View Presentation</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz/quiz.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n=====================================\r\n  ; Title: quiz.component.html\r\n  ; Author: Natasha Whitmer\r\n  ; Date: October 20 2019\r\n  ; Description: quiz.component.html\r\n======================================\r\n-->\r\n<!-- <div>\r\n    <mat-card>\r\n        <mat-card-title>{{quiz.quizName}}</mat-card-title>\r\n        <mat-card-content>\r\n            <form #quizForm=\"ngForm\" (ngSubmit)=\"onSubmit(quizForm.value);\">\r\n                <mat-card>\r\n                    <mat-card-content fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n                        <small *ngIf=\"errorMessage\">{{errorMessage}}</small>\r\n\r\n                        <ol>\r\n                            <li *ngFor=\"let question of quiz.questions\">\r\n                                {{question.question}}\r\n                            \r\n                                <div *ngFor=\"let answers of question.answers\">\r\n                                    <input class=\"\"\r\n                                    [(ngModel)]=\"qs[question.questionId]\"\r\n                                    [checked]=\"qs[question.questionId]\"\r\n                                    value=\"{{question.question}};{{answers}};{{{question.answers}}\"\r\n                                    name=\"q{{question.questionId}}\" tyel=\"radio\" />{{answers}}\r\n                                </div>\r\n                            </li>\r\n                        </ol>\r\n                    </mat-card-content>\r\n                    \r\n                    <mat-card-actions>\r\n                        <button fxFlex mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n                    </mat-card-actions>\r\n                </mat-card> \r\n            </form>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>  -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/signin/signin.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/signin/signin.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n=====================================\r\n  ; Title: signin.component.html\r\n  ; Author: Natasha Whitmer\r\n  ; Date: October 12 2019\r\n  ; Description: signin.component.html\r\n======================================\r\n-->\r\n\r\n<div class=\"signin-form\">\r\n    <mat-card class=\"signin-panel\">\r\n        <mat-card-title>Please enter Employee Id below!</mat-card-title>\r\n            \r\n        <mat-card-content>\r\n            <small *ngIf=\"errorMessage\">{{ errorMessage }}</small>\r\n            <form #signinForm=\"ngForm\" (ngSubmit)=\"submit(); form.reset();\">\r\n                <mat-card-content>\r\n                    <small *ngIf=\"form.controls['employeeId'].hasError('required') && form.controls['employeeId'].touched\">An Employee Id is required.</small>\r\n                    <small *ngIf=\"form.controls['employeeId'].hasError('pattern') && form.controls['employeeId'].touched\">Please try again.</small>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" matInput [formControl]=\"form.controls['employeeId']\" placeholder=\"1337\">\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n                \r\n                <mat-card-actions>\r\n                    <button mat-raised-button color=\"primary\" [disabled]=\"!form.valid\" type=\"submit\">Sign In</button>\r\n                </mat-card-actions>\r\n            </form>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/auth-layout/auth-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/base-layout/base-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>"

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

/*
=====================================
  ; Title: app.component.ts
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: app.component.ts
======================================
*/

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'NodeQuiz';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/signin/signin.component */ "./src/app/pages/signin/signin.component.ts");
/* harmony import */ var _pages_four_zero_four_four_zero_four_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/four-zero-four/four-zero-four.component */ "./src/app/pages/four-zero-four/four-zero-four.component.ts");
/* harmony import */ var _pages_quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/quiz-selection/quiz-selection.component */ "./src/app/pages/quiz-selection/quiz-selection.component.ts");
/* harmony import */ var _pages_quiz_presentations_quiz_presentations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/quiz-presentations/quiz-presentations.component */ "./src/app/pages/quiz-presentations/quiz-presentations.component.ts");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "./src/app/pages/quiz/quiz.component.ts");
/* harmony import */ var _pages_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/quiz-results/quiz-results.component */ "./src/app/pages/quiz-results/quiz-results.component.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/guards/auth-guard */ "./src/app/shared/guards/auth-guard.ts");
/* harmony import */ var _pages_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/nav-bar/nav-bar.component */ "./src/app/pages/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_28__);

/*
=====================================
  ; Title: app.module.ts
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: app.module.ts
======================================
*/





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _shared__WEBPACK_IMPORTED_MODULE_9__["BaseLayoutComponent"],
            _pages_four_zero_four_four_zero_four_component__WEBPACK_IMPORTED_MODULE_11__["FourZeroFourComponent"],
            _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_16__["AuthLayoutComponent"],
            _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"],
            _pages_quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_12__["QuizSelectionComponent"],
            _pages_quiz_presentations_quiz_presentations_component__WEBPACK_IMPORTED_MODULE_13__["QuizPresentationsComponent"],
            _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_14__["QuizComponent"],
            _pages_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_15__["QuizResultsComponent"],
            _pages_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_19__["NavBarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__["MatDividerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
            primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"], { useHash: true, enableTracing: false }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_28__["CarouselModule"]
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] },
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__["CookieService"],
            _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/auth-guard */ "./src/app/shared/guards/auth-guard.ts");
/* harmony import */ var _pages_four_zero_four_four_zero_four_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/four-zero-four/four-zero-four.component */ "./src/app/pages/four-zero-four/four-zero-four.component.ts");
/* harmony import */ var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/signin/signin.component */ "./src/app/pages/signin/signin.component.ts");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "./src/app/pages/quiz/quiz.component.ts");
/* harmony import */ var _pages_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/quiz-results/quiz-results.component */ "./src/app/pages/quiz-results/quiz-results.component.ts");
/* harmony import */ var _pages_quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/quiz-selection/quiz-selection.component */ "./src/app/pages/quiz-selection/quiz-selection.component.ts");
/* harmony import */ var _pages_quiz_presentations_quiz_presentations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/quiz-presentations/quiz-presentations.component */ "./src/app/pages/quiz-presentations/quiz-presentations.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*
=====================================
  ; Title: app.routing.ts
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: app.routing.ts
======================================
*/











const AppRoutes = [
    {
        path: '',
        component: _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                component: _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"],
            }
        ]
    },
    {
        path: 'quiz-selection',
        component: _shared__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"],
        children: [
            {
                path: '',
                component: _pages_quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_9__["QuizSelectionComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'quiz-presentations/:quizId',
                component: _pages_quiz_presentations_quiz_presentations_component__WEBPACK_IMPORTED_MODULE_10__["QuizPresentationsComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'quiz/:quizId',
                component: _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__["QuizComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'quiz-results',
                component: _pages_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_8__["QuizResultsComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ]
    },
    {
        path: 'session',
        component: _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"],
        children: [
            {
                path: 'signin',
                component: _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]
            },
            {
                path: 'four-zero-four',
                component: _pages_four_zero_four_four_zero_four_component__WEBPACK_IMPORTED_MODULE_5__["FourZeroFourComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/four-zero-four'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(AppRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/pages/four-zero-four/four-zero-four.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/four-zero-four/four-zero-four.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvdXItemVyby1mb3VyL2ZvdXItemVyby1mb3VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/four-zero-four/four-zero-four.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/four-zero-four/four-zero-four.component.ts ***!
  \******************************************************************/
/*! exports provided: FourZeroFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourZeroFourComponent", function() { return FourZeroFourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*
=====================================
  ; Title: four-zero-four.component.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 7 2019
  ; Description: four-zero-four.component.ts
======================================
*/

let FourZeroFourComponent = class FourZeroFourComponent {
    constructor() { }
    ngOnInit() {
    }
};
FourZeroFourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-four-zero-four',
        template: __webpack_require__(/*! raw-loader!./four-zero-four.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/four-zero-four/four-zero-four.component.html"),
        styles: [__webpack_require__(/*! ./four-zero-four.component.css */ "./src/app/pages/four-zero-four/four-zero-four.component.css")]
    })
], FourZeroFourComponent);



/***/ }),

/***/ "./src/app/pages/nav-bar/nav-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/nav-bar/nav-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/nav-bar/nav-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/nav-bar/nav-bar.component.ts ***!
  \****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
=====================================
  ; Title: nav-bar.component.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 7 2019
  ; Description: nav-bar.component.ts
======================================
*/


let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/pages/nav-bar/nav-bar.component.css")]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/pages/quiz-presentations/quiz-presentations.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/quiz-presentations/quiz-presentations.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXotcHJlc2VudGF0aW9ucy9xdWl6LXByZXNlbnRhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/quiz-presentations/quiz-presentations.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/quiz-presentations/quiz-presentations.component.ts ***!
  \**************************************************************************/
/*! exports provided: QuizPresentationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPresentationsComponent", function() { return QuizPresentationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/*
=====================================
  ; Title: quiz-presentations.component.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 20 2019
  ; Description: quiz-presentations.component.ts
======================================
*/




let QuizPresentationsComponent = class QuizPresentationsComponent {
    constructor(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.presentationImages = [
            { name: '1', image: '1.jpg' },
            { name: '2', image: '2.jpg' },
            { name: '3', image: '3.jpg' },
            { name: '4', image: '4.jpg' },
            { name: '5', image: '5.jpg' },
            { name: '6', image: '6.jpg' },
            { name: '7', image: '7.jpg' },
            { name: '8', image: '8.jpg' },
            { name: '9', image: '9.jpg' },
            { name: '10', image: '10.jpg' },
            { name: '11', image: '11.jpg' },
            { name: '12', image: '12.jpg' },
        ];
        this.urlParamId = route.snapshot.paramMap.get('quizId');
        this.http.get('/api/quizzes/' + this.urlParamId).subscribe(res => {
            if (res) {
                return this.quiz = res;
            }
            else {
                return this.errorMessage = "WELCOME TO THE LAND OF NO QUIZZES";
            }
        });
    }
    goToQuizPage(id) {
        this.router.navigateByUrl('/quiz-selection/quiz/' + id);
    }
    ngOnInit() {
    }
};
QuizPresentationsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
QuizPresentationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz-presentations',
        template: __webpack_require__(/*! raw-loader!./quiz-presentations.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-presentations/quiz-presentations.component.html"),
        styles: [__webpack_require__(/*! ./quiz-presentations.component.css */ "./src/app/pages/quiz-presentations/quiz-presentations.component.css")]
    })
], QuizPresentationsComponent);



/***/ }),

/***/ "./src/app/pages/quiz-results/quiz-results.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/quiz-results/quiz-results.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXotcmVzdWx0cy9xdWl6LXJlc3VsdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/quiz-results/quiz-results.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/quiz-results/quiz-results.component.ts ***!
  \**************************************************************/
/*! exports provided: QuizResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultsComponent", function() { return QuizResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
=====================================
  ; Title: quiz-results.component.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 7 2019
  ; Description: quiz-results.component.ts
======================================
*/


let QuizResultsComponent = class QuizResultsComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuizResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz-results',
        template: __webpack_require__(/*! raw-loader!./quiz-results.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-results/quiz-results.component.html"),
        styles: [__webpack_require__(/*! ./quiz-results.component.css */ "./src/app/pages/quiz-results/quiz-results.component.css")]
    })
], QuizResultsComponent);



/***/ }),

/***/ "./src/app/pages/quiz-selection/quiz-selection.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/quiz-selection/quiz-selection.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    width: 100%;\r\n    background-color: darkgray;\r\n}\r\n\r\n.row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.column {\r\n    -webkit-box-flex: 33.33%;\r\n            flex: 33.33%;\r\n    padding: 5px;\r\n}\r\n\r\n.quiz-header-image {\r\n    background-image: url('quizicon.jpg');\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei1zZWxlY3Rpb24vcXVpei1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBWTtZQUFaLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUNBO0lBQ0kscUNBQTREO0lBQzVELHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXotc2VsZWN0aW9uL3F1aXotc2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBmbGV4OiAzMy4zMyU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnF1aXotaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9xdWl6aWNvbi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/quiz-selection/quiz-selection.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/quiz-selection/quiz-selection.component.ts ***!
  \******************************************************************/
/*! exports provided: QuizSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSelectionComponent", function() { return QuizSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

/*
=====================================
  ; Title: quiz-selection.component.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 7 2019
  ; Description: quiz-selection.component.ts
======================================
*/



let QuizSelectionComponent = class QuizSelectionComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.http.get('/api/quizzes/all').subscribe(res => {
            if (res) {
                return this.quizzes = res;
            }
            else {
                return this.errorMessage = "You have traveled to the realm of no quizzes";
            }
        });
    }
    goToPresentationPage(id) {
        this.router.navigateByUrl('/quiz-selection/quiz-presentations/' + id);
    }
};
QuizSelectionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
QuizSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz-selection',
        template: __webpack_require__(/*! raw-loader!./quiz-selection.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-selection/quiz-selection.component.html"),
        styles: [__webpack_require__(/*! ./quiz-selection.component.css */ "./src/app/pages/quiz-selection/quiz-selection.component.css")]
    })
], QuizSelectionComponent);



/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXovcXVpei5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.ts ***!
  \**********************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
=====================================
  ; Title: quiz.component.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 7 2019
  ; Description: quiz.component.ts
======================================
*/


let QuizComponent = class QuizComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz',
        template: __webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html"),
        styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/pages/quiz/quiz.component.css")]
    })
], QuizComponent);



/***/ }),

/***/ "./src/app/pages/signin/signin.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signin/signin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin-form {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n\r\n.signin-form {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbmluLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zaWduaW4tZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/signin/signin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signin/signin.component.ts ***!
  \**************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/*
=====================================
  ; Title: signin.component.ts
  ; Author: Natasha Whitmer, W3Schools.com
  ; Updated Date: October 7 2019
  ; Description: signin.component.ts
======================================
*/






let SigninComponent = class SigninComponent {
    constructor(router, cookie, fb, http) {
        this.router = router;
        this.cookie = cookie;
        this.fb = fb;
        this.http = http;
    }
    ngOnInit() {
        this.form = this.fb.group({
            employeeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")])]
        });
    }
    submit() {
        const employeeId = this.form.controls['employeeId'].value;
        this.http.get('/api/employees/' + employeeId).subscribe(res => {
            if (res) {
                this.cookie.set('isAuthenticated', 'true', 7);
                this.cookie.set('employeeId', employeeId, 7);
                this.router.navigate(['/quiz-selection']);
            }
            else {
                this.errorMessage = "Please try again";
            }
        });
    }
};
SigninComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/signin/signin.component.html"),
        styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/pages/signin/signin.component.css")]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/shared/auth-layout/auth-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/auth-layout/auth-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*
=====================================
  ; Title: auth-layout.component.ts
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: auth-layout.component.ts
======================================
*/

let AuthLayoutComponent = class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-layout',
        template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html"),
        styles: [__webpack_require__(/*! ./auth-layout.component.css */ "./src/app/shared/auth-layout/auth-layout.component.css")]
    })
], AuthLayoutComponent);



/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYXNlLWxheW91dC9iYXNlLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
=====================================
  ; Title: base-layout.component.ts
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: base-layout.component.ts
======================================
*/



let BaseLayoutComponent = class BaseLayoutComponent {
    constructor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        console.log("Logout");
        this.cookieService.delete('isAuthenticated');
        this.router.navigate(['/session/signin']);
    }
};
BaseLayoutComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base-layout',
        template: __webpack_require__(/*! raw-loader!./base-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html"),
        styles: [__webpack_require__(/*! ./base-layout.component.css */ "./src/app/shared/base-layout/base-layout.component.css")]
    })
], BaseLayoutComponent);



/***/ }),

/***/ "./src/app/shared/guards/auth-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth-guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");

/*
=====================================
; Title: auth-guards.ts
; Author: Natasha Whitmer
; Date: October9 2019
; Description: auth-guards.ts
======================================
*/



let AuthGuard = class AuthGuard {
    constructor(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    canActivate(route, state) {
        const isAuthenticated = this.cookieService.get('isAuthenticated');
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/session/signin']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__["BaseLayoutComponent"]; });

/*
=====================================
  ; Title: index.ts
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: index.ts
======================================
*/



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
/*
=====================================
  ; Title: main.ts
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: main.ts
======================================
*/




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

module.exports = __webpack_require__(/*! C:\Users\ASUS\OneDrive - Bellevue University\NodeQuiz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map