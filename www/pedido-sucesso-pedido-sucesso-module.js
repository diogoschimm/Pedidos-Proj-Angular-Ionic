(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedido-sucesso-pedido-sucesso-module"],{

/***/ "./src/app/pedido-sucesso/pedido-sucesso.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pedido-sucesso/pedido-sucesso.module.ts ***!
  \*********************************************************/
/*! exports provided: PedidoSucessoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoSucessoPageModule", function() { return PedidoSucessoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pedido_sucesso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedido-sucesso.page */ "./src/app/pedido-sucesso/pedido-sucesso.page.ts");







var routes = [
    {
        path: '',
        component: _pedido_sucesso_page__WEBPACK_IMPORTED_MODULE_6__["PedidoSucessoPage"]
    }
];
var PedidoSucessoPageModule = /** @class */ (function () {
    function PedidoSucessoPageModule() {
    }
    PedidoSucessoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pedido_sucesso_page__WEBPACK_IMPORTED_MODULE_6__["PedidoSucessoPage"]]
        })
    ], PedidoSucessoPageModule);
    return PedidoSucessoPageModule;
}());



/***/ }),

/***/ "./src/app/pedido-sucesso/pedido-sucesso.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pedido-sucesso/pedido-sucesso.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar> \n    <ion-title>\n      Finalização\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-label class=\"h1\">Pedido salvo com sucesso</ion-label>\n      \n    <ion-item class=btnSalvar>\n      <ion-button class=\"home\" shape=\"round\" (click)=\"home()\">HOME</ion-button>\n      <ion-button class=\"editar\" shape=\"round\" (click)=\"editarPedido()\">EDITAR</ion-button>\n      <ion-button class=\"deletar\" shape=\"round\" (click)=\"excluirPedido()\">EXCLUIR</ion-button>\n  </ion-item> \n      <ion-item>\n        <ion-label>ID Pedido: <strong>#{{pedido.id}}</strong></ion-label> \n      </ion-item>  \n      <ion-item>\n        <ion-label>Data do Pedido: {{pedido.dataPedido | date: 'dd/MM/yyyy'}}</ion-label> \n      </ion-item> \n      <ion-item>\n        <ion-label>Hora do Pedido: {{pedido.hora}}</ion-label> \n      </ion-item>  \n      <ion-item>\n        <ion-label class=\"label\">Cliente: {{pedido.cliente.nome}} </ion-label> \n      </ion-item>  \n    </ion-card-content>\n    </ion-card>\n   \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pedido-sucesso/pedido-sucesso.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pedido-sucesso/pedido-sucesso.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card ion-card-content .dividir_cadastro {\n  margin-bottom: 20px; }\n\nion-content ion-card ion-label.label {\n  display: block; }\n\nion-content ion-card ion-label.label-dado {\n  display: block; }\n\nion-content ion-card ion-label.h1 {\n  color: darkgreen;\n  font-size: 20px;\n  display: block;\n  border-radius: 4px;\n  text-align: center;\n  margin: 10px 0; }\n\nion-content ion-card ion-label.h2 {\n  color: #9657ef;\n  display: block; }\n\nion-content ion-card .preenchido {\n  color: darkcyan; }\n\nion-content ion-card .itens {\n  min-height: 300px; }\n\nion-content ion-card .btnSalvar {\n  text-align: center; }\n\nion-content ion-card ion-item ion-button.home {\n  --border-color: #9657ef;\n  --background: #704fa0;\n  --border-style: solid;\n  text-transform: inherit;\n  width: 100%;\n  height: 75%;\n  --border-width: 1px;\n  --ripple-color: #ad82ec; }\n\nion-content ion-card ion-item ion-button.editar {\n  --border-color: rgb(243, 255, 71);\n  --background: rgb(243, 255, 71);\n  --border-style: solid;\n  text-transform: inherit;\n  width: 100%;\n  height: 75%;\n  --border-width: 1px;\n  --ripple-color:  rgb(243, 255, 71);\n  color: #000000; }\n\nion-content ion-card ion-item ion-button.deletar {\n  --border-color: #FF0000;\n  --background: #FF0000;\n  --border-style: solid;\n  text-transform: inherit;\n  width: 100%;\n  height: 75%;\n  --border-width: 1px;\n  --ripple-color: #FF0000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVkaWRvLXN1Y2Vzc28vRTpcXElvbmljXFxQZWRpZG9zUHJvai9zcmNcXGFwcFxccGVkaWRvLXN1Y2Vzc29cXHBlZGlkby1zdWNlc3NvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRLG1CQUFtQixFQUFBOztBQUozQjtFQVFRLGNBQWMsRUFBQTs7QUFSdEI7RUFXUSxjQUFjLEVBQUE7O0FBWHRCO0VBY00sZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBbkJwQjtFQXNCTSxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQXZCcEI7RUEwQk0sZUFDRixFQUFBOztBQTNCSjtFQTZCUSxpQkFBaUIsRUFBQTs7QUE3QnpCO0VBZ0NNLGtCQUFrQixFQUFBOztBQWhDeEI7RUFvQ1EsdUJBQWU7RUFDZixxQkFBYTtFQUNiLHFCQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQWU7RUFDZix1QkFBZSxFQUFBOztBQTNDdkI7RUE4Q1EsaUNBQWU7RUFDZiwrQkFBYTtFQUNiLHFCQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQWU7RUFDZixrQ0FBZTtFQUNmLGNBQWMsRUFBQTs7QUF0RHRCO0VBeURRLHVCQUFlO0VBQ2YscUJBQWE7RUFDYixxQkFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFlO0VBQ2YsdUJBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BlZGlkby1zdWNlc3NvL3BlZGlkby1zdWNlc3NvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBpb24tY2FyZCB7XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgLmRpdmlkaXJfY2FkYXN0cm8ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1sYWJlbC5sYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbC5sYWJlbC1kYWRve1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVsLmgxIHsgXHJcbiAgICAgIGNvbG9yOiBkYXJrZ3JlZW47IFxyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVsLmgyIHsgXHJcbiAgICAgIGNvbG9yOiAjOTY1N2VmOyBcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAucHJlZW5jaGlkb3tcclxuICAgICAgY29sb3I6IGRhcmtjeWFuXHJcbiAgICB9XHJcbiAgICAuaXRlbnN7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuU2FsdmFyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBpb24tYnV0dG9uLmhvbWUge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjOTY1N2VmO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzcwNGZhMDtcclxuICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAtLXJpcHBsZS1jb2xvcjogI2FkODJlYztcclxuICAgICAgfVxyXG4gICAgICBpb24tYnV0dG9uLmVkaXRhciB7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHJnYigyNDMsIDI1NSwgNzEpO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MywgMjU1LCA3MSk7XHJcbiAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgLS1yaXBwbGUtY29sb3I6ICByZ2IoMjQzLCAyNTUsIDcxKTtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgfVxyXG4gICAgICBpb24tYnV0dG9uLmRlbGV0YXIge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjRkYwMDAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI0ZGMDAwMDtcclxuICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAtLXJpcHBsZS1jb2xvcjogI0ZGMDAwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pedido-sucesso/pedido-sucesso.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pedido-sucesso/pedido-sucesso.page.ts ***!
  \*******************************************************/
/*! exports provided: PedidoSucessoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoSucessoPage", function() { return PedidoSucessoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pedido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pedido.service */ "./src/app/pedido.service.ts");
/* harmony import */ var _pedido__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pedido */ "./src/app/pedido.ts");





var PedidoSucessoPage = /** @class */ (function () {
    function PedidoSucessoPage(route, router, pedidoService) {
        this.route = route;
        this.router = router;
        this.pedidoService = pedidoService;
        this.pedido = new _pedido__WEBPACK_IMPORTED_MODULE_4__["Pedido"]();
    }
    PedidoSucessoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.key = this.route.snapshot.paramMap.get('id');
        if (this.key) {
            this.pedidoService.getChave(this.key).then(function (val) {
                _this.pedido = val;
            });
        }
    };
    PedidoSucessoPage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    PedidoSucessoPage.prototype.novoPedido = function () {
        this.router.navigate(['/novo-pedido']);
    };
    PedidoSucessoPage.prototype.editarPedido = function () {
        this.router.navigate(['/novo-pedido/' + this.key]);
    };
    PedidoSucessoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pedido-sucesso',
            template: __webpack_require__(/*! ./pedido-sucesso.page.html */ "./src/app/pedido-sucesso/pedido-sucesso.page.html"),
            styles: [__webpack_require__(/*! ./pedido-sucesso.page.scss */ "./src/app/pedido-sucesso/pedido-sucesso.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _pedido_service__WEBPACK_IMPORTED_MODULE_3__["PedidoService"]])
    ], PedidoSucessoPage);
    return PedidoSucessoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pedido-sucesso-pedido-sucesso-module.js.map