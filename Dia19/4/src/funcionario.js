"use strict";
exports.__esModule = true;
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(HorasTrabalho, LocalTrabalho, QualTrabalho, Salario) {
        this.HorasTrabalho = HorasTrabalho;
        this.LocalTrabalho = LocalTrabalho;
        this.QualTrabalho = QualTrabalho;
        this.Salario = Salario;
    }
    Funcionario.prototype.Horas = function () {
        console.log("O trabalho dur\u00E1 ".concat(this.HorasTrabalho, " horas."));
    };
    Funcionario.prototype.lugar = function () {
        console.log("O local de trabalho \u00E9 ".concat(this.LocalTrabalho));
    };
    Funcionario.prototype.profissao = function () {
        console.log("A profiss\u00E3o \u00E9 ".concat(this.QualTrabalho));
    };
    Funcionario.prototype.dinheiro = function () {
        console.log("O Salario \u00E9 de R$ ".concat(this.Salario));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
