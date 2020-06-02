(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-pedido-list-pedido-module"],{

/***/ "./src/app/list-pedido/list-pedido.module.ts":
/*!***************************************************!*\
  !*** ./src/app/list-pedido/list-pedido.module.ts ***!
  \***************************************************/
/*! exports provided: ListPedidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPedidoPageModule", function() { return ListPedidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_pedido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-pedido.page */ "./src/app/list-pedido/list-pedido.page.ts");







var routes = [
    {
        path: '',
        component: _list_pedido_page__WEBPACK_IMPORTED_MODULE_6__["ListPedidoPage"]
    }
];
var ListPedidoPageModule = /** @class */ (function () {
    function ListPedidoPageModule() {
    }
    ListPedidoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_pedido_page__WEBPACK_IMPORTED_MODULE_6__["ListPedidoPage"]]
        })
    ], ListPedidoPageModule);
    return ListPedidoPageModule;
}());



/***/ }),

/***/ "./src/app/list-pedido/list-pedido.page.html":
/*!***************************************************!*\
  !*** ./src/app/list-pedido/list-pedido.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Listagem de Pedidos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\"> \n        <ion-grid>\n        <ion-row [routerDirection]=\"'root'\" [routerLink]=\"item.url\">\n            <ion-col size=\"2\">\n              <div>\n                  <ion-icon [name]=\"item.icon\" slot=\"start\"></ion-icon>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                  #{{item.pedido.id}}\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div>\n                  {{item.pedido.cliente.nome}}\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                  {{item.pedido.hora}} \n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>  \n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/list-pedido/list-pedido.page.scss":
/*!***************************************************!*\
  !*** ./src/app/list-pedido/list-pedido.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --border-color: #9657ef;\n  --background: #704fa0;\n  --border-style: solid;\n  text-transform: inherit;\n  width: 100%;\n  height: 75%;\n  --border-width: 1px;\n  --ripple-color: #ad82ec;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1wZWRpZG8vRTpcXElvbmljXFxQZWRpZG9zUHJvai9zcmNcXGFwcFxcbGlzdC1wZWRpZG9cXGxpc3QtcGVkaWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVCQUFlO0VBQ2YscUJBQWE7RUFDYixxQkFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFlO0VBQ2YsdUJBQWU7RUFDZixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0LXBlZGlkby9saXN0LXBlZGlkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogIzk2NTdlZjtcclxuICAgIC0tYmFja2dyb3VuZDogIzcwNGZhMDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogI2FkODJlYztcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/list-pedido/list-pedido.page.ts":
/*!*************************************************!*\
  !*** ./src/app/list-pedido/list-pedido.page.ts ***!
  \*************************************************/
/*! exports provided: ListPedidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPedidoPage", function() { return ListPedidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pedido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pedido.service */ "./src/app/pedido.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ListPedidoPage = /** @class */ (function () {
    function ListPedidoPage(pedidoService, router) {
        var _this = this;
        this.pedidoService = pedidoService;
        this.router = router;
        this.items = [];
        this.pedidoService.getAll().then(function (data) {
            console.log(data);
            data.forEach(function (elemento) {
                _this.items.push({
                    pedido: elemento.pedido,
                    icon: 'basket',
                    url: '/detalhe-pedido/' + elemento.pedido.key
                });
            });
        });
    }
    ListPedidoPage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    ListPedidoPage.prototype.ngOnInit = function () {
    };
    ListPedidoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-pedido',
            template: __webpack_require__(/*! ./list-pedido.page.html */ "./src/app/list-pedido/list-pedido.page.html"),
            styles: [__webpack_require__(/*! ./list-pedido.page.scss */ "./src/app/list-pedido/list-pedido.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pedido_service__WEBPACK_IMPORTED_MODULE_2__["PedidoService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListPedidoPage);
    return ListPedidoPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-pedido-list-pedido-module.js.map