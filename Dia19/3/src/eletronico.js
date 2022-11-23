"use strict";
exports.__esModule = true;
exports.Eletronico = void 0;
var Eletronico = /** @class */ (function () {
    function Eletronico(custo, nomeProduto, PaislOrigem, CriadoraDoproduto) {
        this.custo = custo;
        this.nomeProduto = nomeProduto;
        this.PaislOrigem = PaislOrigem;
        this.CriadoraDoproduto = CriadoraDoproduto;
    }
    Eletronico.prototype.preço = function () {
        console.log("O produco custa R$ ".concat(this.custo, "."));
    };
    Eletronico.prototype.nome = function () {
        console.log("O nome do produto \u00E9: ".concat(this.nomeProduto, "."));
    };
    Eletronico.prototype.pais = function () {
        console.log("O pa\u00EDs de origem do produto \u00E9 ".concat(this.PaislOrigem, "."));
    };
    Eletronico.prototype.empresa = function () {
        console.log("A marca do produto \u00E9 ".concat(this.CriadoraDoproduto, "."));
    };
    return Eletronico;
}());
exports.Eletronico = Eletronico;
