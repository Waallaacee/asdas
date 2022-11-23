"use strict";
exports.__esModule = true;
exports.Aviao = void 0;
var Aviao = /** @class */ (function () {
    function Aviao(passageiros, Tempodeviagem, LocalSaida, LocalChegada) {
        this.passageiros = passageiros;
        this.Tempodeviagem = Tempodeviagem;
        this.LocalSaida = LocalSaida;
        this.LocalChegada = LocalChegada;
    }
    Aviao.prototype.QuantidadePassageiros = function () {
        console.log("A quantidade de passageiros no avi\u00E3o \u00E9 de ".concat(this.passageiros, "."));
    };
    Aviao.prototype.ViagemHoras = function () {
        console.log("A viagem irar durar ".concat(this.Tempodeviagem, " horas."));
    };
    Aviao.prototype.Saida = function () {
        console.log("O local de saida do avi\u00E3o \u00E9 ".concat(this.LocalSaida, "."));
    };
    Aviao.prototype.Chegada = function () {
        console.log("O local de chegada do avi\u00E3o \u00E9 ".concat(this.LocalChegada));
    };
    return Aviao;
}());
exports.Aviao = Aviao;
