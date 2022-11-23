import { Pessoa1 } from "./src/pessoa1";
import { Pessoa2 } from "./src/pessoa2";

let projeto4 = new Pessoa1(100,500)
let projeto5 = new Pessoa2(400, 100)

projeto4.verSaldo();
projeto4.valorTransferir();

let resultado = (saldo: number, quantidadeTransferir: number) => saldo - quantidadeTransferir
console.log("O seu saldo atual agora é R$ " + resultado(500,100))

projeto5.verSaldo2();
projeto5.receber();

let resultado2 = (saldo2: number, quantidadeTransferir: number) => saldo2 + quantidadeTransferir
console.log("Agora seu Saldo Atual é: " + resultado2(400,100))