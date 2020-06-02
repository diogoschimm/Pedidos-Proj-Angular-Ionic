(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["novo-pedido-novo-pedido-module"],{

/***/ "./src/app/novo-pedido/novo-pedido.module.ts":
/*!***************************************************!*\
  !*** ./src/app/novo-pedido/novo-pedido.module.ts ***!
  \***************************************************/
/*! exports provided: NovoPedidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoPedidoPageModule", function() { return NovoPedidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _novo_pedido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./novo-pedido.page */ "./src/app/novo-pedido/novo-pedido.page.ts");







var routes = [
    {
        path: '',
        component: _novo_pedido_page__WEBPACK_IMPORTED_MODULE_6__["NovoPedidoPage"]
    }
];
var NovoPedidoPageModule = /** @class */ (function () {
    function NovoPedidoPageModule() {
    }
    NovoPedidoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_novo_pedido_page__WEBPACK_IMPORTED_MODULE_6__["NovoPedidoPage"]]
        })
    ], NovoPedidoPageModule);
    return NovoPedidoPageModule;
}());



/***/ }),

/***/ "./src/app/novo-pedido/novo-pedido.page.html":
/*!***************************************************!*\
  !*** ./src/app/novo-pedido/novo-pedido.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{operacao}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-label class=\"h1\">Cliente</ion-label>\n      <ion-label class=\"h2\">Dados Pessoais</ion-label>\n      <ion-item>\n        <ion-label position=\"floating\">Nome ou Razão</ion-label>\n        <ion-input [ngClass]=\"{'preenchido':pedido.cliente.nome !=''}\" type=\"text\" placeholder=\"Nome do cliente aqui :)\" [(ngModel)]=\"pedido.cliente.nome\" name=\"nome\"></ion-input>\n      </ion-item>\n      <ion-item class=\"dividir_cadastro\">\n        <ion-label position=\"floating\">CPF/CNPJ</ion-label>\n        <ion-input [ngClass]=\"{'preenchido':pedido.cliente.documento !=''}\" type=\"text\" placeholder=\"cpf ou cnpj\"  [(ngModel)]=\"pedido.cliente.documento\" name=\"documento\"></ion-input>\n      </ion-item>\n      <ion-label class=\"h2\">Contato</ion-label>\n      <ion-item>\n        <ion-label position=\"floating\">Celular</ion-label>\n        <ion-input [ngClass]=\"{'preenchido':pedido.cliente.telefone !=''}\" type=\"tel\" placeholder=\"(##) #.####-####\" [(ngModel)]=\"pedido.cliente.telefone\" name=\"telefone\"></ion-input>\n      </ion-item>\n      <ion-item class=\"dividir_cadastro\">\n        <ion-label position=\"floating\">E-mail</ion-label>\n        <ion-input [ngClass]=\"{'preenchido':pedido.cliente.email !=''}\" type=\"email\" placeholder=\"email@email.com.br\" [(ngModel)]=\"pedido.cliente.email\" name=\"email\"></ion-input>\n      </ion-item>\n      <ion-label class=\"h2\">Endereço</ion-label>\n      <ion-item>\n        <ion-label position=\"floating\">CEP</ion-label>\n        <ion-input [ngClass]=\"{'preenchido':pedido.cliente.cep !=''}\" type=\"number\" placeholder=\"00000-000\" [(ngModel)]=\"pedido.cliente.cep\" name=\"cep\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Endereço do Cliente</ion-label>\n        <ion-input [ngClass]=\"{'preenchido':pedido.cliente.endereco !=''}\" type=\"text\" placeholder=\"Endereço do Cliente\" [(ngModel)]=\"pedido.cliente.endereco\" name=\"endereco\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Número do Endereço</ion-label>\n        <ion-input [ngClass]=\"{'preenchido':pedido.cliente.numero !=''}\" type=\"text\" placeholder=\"Qual o número do endereço?\"  [(ngModel)]=\"pedido.cliente.numero\" name=\"numero\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Bairro</ion-label>\n        <ion-input [ngClass]=\"{'preenchido':pedido.cliente.bairro !=''}\" type=\"text\" placeholder=\"Onde é o bairro?\" [(ngModel)]=\"pedido.cliente.bairro\" name=\"bairro\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">UF</ion-label>\n        <ion-input [ngClass]=\"{'preenchido':pedido.cliente.uf !=''}\" type=\"text\" placeholder=\"A cidade fica em qual estado?\"  [(ngModel)]=\"pedido.cliente.uf\" name=\"uf\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Cidade</ion-label>\n        <ion-input [ngClass]=\"{'preenchido':pedido.cliente.cidade !=''}\" type=\"text\" placeholder=\"O endereço é em qual cidade?\"  [(ngModel)]=\"pedido.cliente.cidade\" name=\"cidade\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Complemento</ion-label>\n        <ion-textarea [ngClass]=\"{'preenchido':pedido.cliente.complemento !=''}\" placeholder=\"Informe para ficar mas fácil para a localização ;)\"  [(ngModel)]=\"pedido.cliente.complemento\" name=\"complemento\"></ion-textarea>\n      </ion-item>\n      \n      <ion-label class=\"h1\">Itens do Pedido</ion-label>\n      <ion-item>\n        <ion-label position=\"floating\">Descreva os itens</ion-label>\n        <ion-textarea [ngClass]=\"{'preenchido':pedido.itens !=''}\" placeholder=\"Descreva aqui os itens que o cliente comprou\" class=\"itens\"  [(ngModel)]=\"pedido.itens\" name=\"itens\"></ion-textarea>\n      </ion-item>\n      <ion-label class=\"h1\">Valor e Forma de Pagamento</ion-label>\n      <ion-item>\n        <ion-label position=\"floating\">Valor Total</ion-label>\n        <ion-input [ngClass]=\"{'preenchido':pedido.valor}\" type=\"number\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" step=\"0.01\" [(ngModel)]=\"pedido.valor\" name=\"valor\" placeholder=\"0.00\"></ion-input>\n      </ion-item>  \n      <!-- <ion-item> \n          <ion-list radio-group [(ngModel)]=\"pedido.formaPagamento\">\n          <ion-item>\n            <ion-label>Dinheiro</ion-label>\n            <ion-radio slot=\"start\" value=\"DINHEIRO\"></ion-radio>\n          </ion-item> \n          <ion-item>\n            <ion-label>Cartão de Crédito</ion-label>\n            <ion-radio slot=\"start\" value=\"CARTAO_CREDITO\"></ion-radio>\n          </ion-item> \n          <ion-item>\n            <ion-label>Cartão de Débito</ion-label>\n            <ion-radio slot=\"start\" value=\"CARTAO_DEBITO\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Outro</ion-label>\n            <ion-radio slot=\"start\" value=\"OUTROS\"></ion-radio>\n          </ion-item>\n        </ion-list> \n      </ion-item>  -->\n    </ion-card-content>\n\n    <ion-item class=btnSalvar>\n        <ion-button shape=\"round\" (click)=\"save()\">SALVAR PEDIDO</ion-button>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/novo-pedido/novo-pedido.page.scss":
/*!***************************************************!*\
  !*** ./src/app/novo-pedido/novo-pedido.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card ion-card-content .dividir_cadastro {\n  margin-bottom: 20px; }\n\nion-content ion-card ion-label.h1 {\n  color: #000;\n  font-size: 16px;\n  display: block;\n  background: #dfcdf8;\n  padding: 5px 10px;\n  border-radius: 4px;\n  text-align: left;\n  margin: 10px 0; }\n\nion-content ion-card ion-label.h2 {\n  color: #9657ef;\n  display: block; }\n\nion-content ion-card .preenchido {\n  color: darkcyan; }\n\nion-content ion-card .itens {\n  min-height: 300px; }\n\nion-content ion-card .btnSalvar {\n  text-align: center; }\n\nion-content ion-card ion-item ion-button {\n  --border-color: #9657ef;\n  --background: #704fa0;\n  --border-style: solid;\n  text-transform: inherit;\n  width: 100%;\n  height: 75%;\n  --border-width: 1px;\n  --ripple-color: #ad82ec; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92by1wZWRpZG8vRTpcXElvbmljXFxQZWRpZG9zUHJvai9zcmNcXGFwcFxcbm92by1wZWRpZG9cXG5vdm8tcGVkaWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlVLG1CQUFtQixFQUFBOztBQUo3QjtFQVFRLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBZnRCO0VBa0JRLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBbkJ0QjtFQXNCUSxlQUNGLEVBQUE7O0FBdkJOO0VBeUJVLGlCQUFpQixFQUFBOztBQXpCM0I7RUE0QlEsa0JBQWtCLEVBQUE7O0FBNUIxQjtFQWdDVSx1QkFBZTtFQUNmLHFCQUFhO0VBQ2IscUJBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBZTtFQUNmLHVCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3ZvLXBlZGlkby9ub3ZvLXBlZGlkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIC5kaXZpZGlyX2NhZGFzdHJvIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlvbi1sYWJlbC5oMSB7IFxyXG4gICAgICAgIGNvbG9yOiAjMDAwOyBcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RmY2RmODtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgfVxyXG4gICAgICBpb24tbGFiZWwuaDIgeyBcclxuICAgICAgICBjb2xvcjogIzk2NTdlZjsgXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLnByZWVuY2hpZG97XHJcbiAgICAgICAgY29sb3I6IGRhcmtjeWFuXHJcbiAgICAgIH1cclxuICAgICAgLml0ZW5ze1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0blNhbHZhciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjOTY1N2VmO1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNzA0ZmEwO1xyXG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiAjYWQ4MmVjO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/novo-pedido/novo-pedido.page.ts":
/*!*************************************************!*\
  !*** ./src/app/novo-pedido/novo-pedido.page.ts ***!
  \*************************************************/
/*! exports provided: NovoPedidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoPedidoPage", function() { return NovoPedidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pedido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pedido.service */ "./src/app/pedido.service.ts");
/* harmony import */ var _pedido__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pedido */ "./src/app/pedido.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var NovoPedidoPage = /** @class */ (function () {
    function NovoPedidoPage(pedidoService, router, datepipe, route) {
        this.pedidoService = pedidoService;
        this.router = router;
        this.datepipe = datepipe;
        this.route = route;
        this.pedido = new _pedido__WEBPACK_IMPORTED_MODULE_3__["Pedido"]();
    }
    NovoPedidoPage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.key = this.route.snapshot.paramMap.get('id');
            this.pedidoService.getChave(this.key).then(function (val) {
                _this.pedido = val;
                _this.operacao = 'Editando #' + _this.pedido.id;
            });
        }
        else {
            this.limpar();
        }
    };
    NovoPedidoPage.prototype.limpar = function () {
        this.key = '';
        this.operacao = 'Novo Pedido';
        this.pedido.dataPedido = new Date();
        this.pedido.hora = this.formatar(this.pedido.dataPedido.getHours().toString()) + ':' + this.formatar(this.pedido.dataPedido.getMinutes().toString());
        this.pedido.key = 'pedido_' + this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
        this.pedido.cliente.nome = '';
        this.pedido.cliente.documento = '';
        this.pedido.cliente.telefone = '';
        this.pedido.cliente.email = '';
        this.pedido.cliente.cep = '';
        this.pedido.cliente.endereco = '';
        this.pedido.cliente.numero = '';
        this.pedido.cliente.bairro = '';
        this.pedido.cliente.uf = 'MT';
        this.pedido.cliente.cidade = 'Cuiabá';
        this.pedido.cliente.complemento = '';
        this.pedido.itens = '';
        this.pedido.valor = undefined;
    };
    NovoPedidoPage.prototype.save = function () {
        var _this = this;
        if (this.operacao == 'Novo Pedido') {
            this.pedidoService.insert(this.pedido).then(function (v) {
                console.log('Pedido salvo com sucesso');
                _this.router.navigate(['/detalhe-pedido/' + _this.pedido.key]);
            });
        }
        else {
            this.pedidoService.update(this.pedido).then(function (v) {
                console.log('Pedido atualizado com sucesso');
                _this.router.navigate(['/detalhe-pedido/' + _this.pedido.key]);
            });
        }
    };
    NovoPedidoPage.prototype.formatar = function (valor) {
        if (valor.length == 1) {
            return '0' + valor;
        }
        return valor;
    };
    NovoPedidoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-novo-pedido',
            template: __webpack_require__(/*! ./novo-pedido.page.html */ "./src/app/novo-pedido/novo-pedido.page.html"),
            styles: [__webpack_require__(/*! ./novo-pedido.page.scss */ "./src/app/novo-pedido/novo-pedido.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pedido_service__WEBPACK_IMPORTED_MODULE_2__["PedidoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], NovoPedidoPage);
    return NovoPedidoPage;
}());



/***/ })

}]);
//# sourceMappingURL=novo-pedido-novo-pedido-module.js.map