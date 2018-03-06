var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.pagarImposto = function (taxa) {
        if (taxa === void 0) { taxa = 7.5; }
        console.log("Pagando " + this.salario * taxa / 100 + " de imposto");
    };
    return Funcionario;
}());
var Secretario = (function (_super) {
    __extends(Secretario, _super);
    function Secretario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Secretario;
}(Funcionario));
var Executivo = (function (_super) {
    __extends(Executivo, _super);
    function Executivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Executivo.prototype.pagarImposto = function (taxa) {
        if (taxa === void 0) { taxa = 27.5; }
        console.log('Executivo paga mais!');
        _super.prototype.pagarImposto.call(this, taxa);
    };
    return Executivo;
}(Funcionario));
var sarah = new Secretario('Sarah', 2000);
sarah.pagarImposto();
var jorge = new Executivo('Jorge', 30000);
jorge.pagarImposto();
