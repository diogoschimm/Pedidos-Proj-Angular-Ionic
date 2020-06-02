(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalhe-pedido-detalhe-pedido-module"],{

/***/ "./src/app/detalhe-pedido/detalhe-pedido.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/detalhe-pedido/detalhe-pedido.module.ts ***!
  \*********************************************************/
/*! exports provided: DetalhePedidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhePedidoPageModule", function() { return DetalhePedidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalhe_pedido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalhe-pedido.page */ "./src/app/detalhe-pedido/detalhe-pedido.page.ts");







var routes = [
    {
        path: '',
        component: _detalhe_pedido_page__WEBPACK_IMPORTED_MODULE_6__["DetalhePedidoPage"]
    }
];
var DetalhePedidoPageModule = /** @class */ (function () {
    function DetalhePedidoPageModule() {
    }
    DetalhePedidoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detalhe_pedido_page__WEBPACK_IMPORTED_MODULE_6__["DetalhePedidoPage"]]
        })
    ], DetalhePedidoPageModule);
    return DetalhePedidoPageModule;
}());



/***/ }),

/***/ "./src/app/detalhe-pedido/detalhe-pedido.page.html":
/*!*********************************************************!*\
  !*** ./src/app/detalhe-pedido/detalhe-pedido.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar> \n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n        Pedido # {{pedido.id}} \n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n \n  \n  <ion-content>\n    <ion-card>\n      <ion-card-content>\n        <ion-label class=\"h1\">Detalhe do Pedido</ion-label>\n        \n        <ion-item class=btnSalvar>\n          <ion-button class=\"home\" shape=\"round\" (click)=\"home()\">LISTA</ion-button>\n          <ion-button class=\"editar\" shape=\"round\" (click)=\"editarPedido()\">EDITAR</ion-button>\n          <ion-button class=\"deletar\" shape=\"round\" (click)=\"excluirPedido()\">EXCLUIR</ion-button>\n        </ion-item> \n\n        <ion-item>\n          <ion-label>ID Pedido: <strong>#{{pedido.id}}</strong></ion-label> \n        </ion-item>  \n\n        <ion-item>\n          <ion-label>Data do Pedido: {{pedido.dataPedido | date: 'dd/MM/yyyy'}}</ion-label> \n        </ion-item> \n\n        <ion-item>\n          <ion-label>Hora do Pedido: {{pedido.hora}}</ion-label> \n        </ion-item>  \n\n        <ion-item>\n          <ion-label class=\"label\">Cliente: {{pedido.cliente.nome}} </ion-label> \n        </ion-item> \n\n        <ion-item>\n          <ion-label class=\"label\">Valor Total: {{pedido.valor}} </ion-label> \n        </ion-item>  \n\n        <ion-item> \n           <p><strong>Itens:</strong> {{pedido.itens}} </p> \n        </ion-item>     \n        \n      </ion-card-content>\n      </ion-card>\n     \n  </ion-content>\n  \n"

/***/ }),

/***/ "./src/app/detalhe-pedido/detalhe-pedido.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/detalhe-pedido/detalhe-pedido.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card ion-card-content .dividir_cadastro {\n  margin-bottom: 20px; }\n\nion-content ion-card ion-label.label {\n  display: block; }\n\nion-content ion-card ion-label.label-dado {\n  display: block; }\n\nion-content ion-card ion-label.h1 {\n  color: darkgreen;\n  font-size: 20px;\n  display: block;\n  border-radius: 4px;\n  text-align: center;\n  margin: 10px 0; }\n\nion-content ion-card ion-label.h2 {\n  color: #9657ef;\n  display: block; }\n\nion-content ion-card .preenchido {\n  color: darkcyan; }\n\nion-content ion-card .itens {\n  min-height: 300px; }\n\nion-content ion-card .btnSalvar {\n  text-align: center; }\n\nion-content ion-card ion-item ion-button.home {\n  --border-color: #9657ef;\n  --background: #704fa0;\n  --border-style: solid;\n  text-transform: inherit;\n  width: 100%;\n  height: 75%;\n  --border-width: 1px;\n  --ripple-color: #ad82ec; }\n\nion-content ion-card ion-item ion-button.editar {\n  --border-color: rgb(243, 255, 71);\n  --background: rgb(243, 255, 71);\n  --border-style: solid;\n  text-transform: inherit;\n  width: 100%;\n  height: 75%;\n  --border-width: 1px;\n  --ripple-color:  rgb(243, 255, 71);\n  color: #000000; }\n\nion-content ion-card ion-item ion-button.deletar {\n  --border-color: #FF0000;\n  --background: #FF0000;\n  --border-style: solid;\n  text-transform: inherit;\n  width: 100%;\n  height: 75%;\n  --border-width: 1px;\n  --ripple-color: #FF0000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxoZS1wZWRpZG8vRTpcXElvbmljXFxQZWRpZG9zUHJvai9zcmNcXGFwcFxcZGV0YWxoZS1wZWRpZG9cXGRldGFsaGUtcGVkaWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlVLG1CQUFtQixFQUFBOztBQUo3QjtFQVFVLGNBQWMsRUFBQTs7QUFSeEI7RUFXVSxjQUFjLEVBQUE7O0FBWHhCO0VBY1EsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBbkJ0QjtFQXNCUSxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQXZCdEI7RUEwQlEsZUFDRixFQUFBOztBQTNCTjtFQTZCVSxpQkFBaUIsRUFBQTs7QUE3QjNCO0VBZ0NRLGtCQUFrQixFQUFBOztBQWhDMUI7RUFvQ1UsdUJBQWU7RUFDZixxQkFBYTtFQUNiLHFCQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQWU7RUFDZix1QkFBZSxFQUFBOztBQTNDekI7RUE4Q1UsaUNBQWU7RUFDZiwrQkFBYTtFQUNiLHFCQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQWU7RUFDZixrQ0FBZTtFQUNmLGNBQWMsRUFBQTs7QUF0RHhCO0VBeURVLHVCQUFlO0VBQ2YscUJBQWE7RUFDYixxQkFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFlO0VBQ2YsdUJBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RldGFsaGUtcGVkaWRvL2RldGFsaGUtcGVkaWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgLmRpdmlkaXJfY2FkYXN0cm8ge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVsLmxhYmVse1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVsLmxhYmVsLWRhZG97XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICBpb24tbGFiZWwuaDEgeyBcclxuICAgICAgICBjb2xvcjogZGFya2dyZWVuOyBcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVsLmgyIHsgXHJcbiAgICAgICAgY29sb3I6ICM5NjU3ZWY7IFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcmVlbmNoaWRve1xyXG4gICAgICAgIGNvbG9yOiBkYXJrY3lhblxyXG4gICAgICB9XHJcbiAgICAgIC5pdGVuc3tcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5idG5TYWx2YXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgaW9uLWJ1dHRvbi5ob21lIHtcclxuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjOTY1N2VmO1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNzA0ZmEwO1xyXG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiAjYWQ4MmVjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uLmVkaXRhciB7XHJcbiAgICAgICAgICAtLWJvcmRlci1jb2xvcjogcmdiKDI0MywgMjU1LCA3MSk7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI1NSwgNzEpO1xyXG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiAgcmdiKDI0MywgMjU1LCA3MSk7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbi5kZWxldGFyIHtcclxuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjRkYwMDAwO1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkYwMDAwO1xyXG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiAjRkYwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/detalhe-pedido/detalhe-pedido.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/detalhe-pedido/detalhe-pedido.page.ts ***!
  \*******************************************************/
/*! exports provided: DetalhePedidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhePedidoPage", function() { return DetalhePedidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pedido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pedido.service */ "./src/app/pedido.service.ts");
/* harmony import */ var _pedido__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pedido */ "./src/app/pedido.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var DetalhePedidoPage = /** @class */ (function () {
    function DetalhePedidoPage(route, router, pedidoService, alertController) {
        this.route = route;
        this.router = router;
        this.pedidoService = pedidoService;
        this.alertController = alertController;
        this.pedido = new _pedido__WEBPACK_IMPORTED_MODULE_4__["Pedido"]();
    }
    DetalhePedidoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.key = this.route.snapshot.paramMap.get('id');
        console.log(this.key);
        this.pedidoService.getChave(this.key).then(function (val) {
            _this.pedido = val;
        });
    };
    DetalhePedidoPage.prototype.home = function () {
        this.router.navigate(['/list-pedido']);
    };
    DetalhePedidoPage.prototype.editarPedido = function () {
        this.router.navigate(['/novo-pedido/' + this.key]);
    };
    DetalhePedidoPage.prototype.excluirPedido = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alerta;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmar exclusão?',
                            message: 'Confirmar exclusão: <br />Pedido #' + this.pedido.id,
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secundary'
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        _this.pedidoService.delete(_this.key).then(function () {
                                            _this.router.navigate(['/list-pedido']);
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alerta = _a.sent();
                        return [4 /*yield*/, alerta.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetalhePedidoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalhe-pedido',
            template: __webpack_require__(/*! ./detalhe-pedido.page.html */ "./src/app/detalhe-pedido/detalhe-pedido.page.html"),
            styles: [__webpack_require__(/*! ./detalhe-pedido.page.scss */ "./src/app/detalhe-pedido/detalhe-pedido.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _pedido_service__WEBPACK_IMPORTED_MODULE_3__["PedidoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], DetalhePedidoPage);
    return DetalhePedidoPage;
}());



/***/ })

}]);
//# sourceMappingURL=detalhe-pedido-detalhe-pedido-module.js.map