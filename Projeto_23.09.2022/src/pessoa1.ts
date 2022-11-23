export class Pessoa1 { 
    quantidadeTransferir: number;
    saldo: number;

    constructor(
        quantidadeTransferir: number,
        saldo: number,
        
    ){
        this.quantidadeTransferir = quantidadeTransferir
        this.saldo = saldo
        
    }

    verSaldo(){
        console.log(`JURACY SOYZA:`);
        console.log(`O seu saldo é R$ ${this.saldo}`);
    }

    valorTransferir(){
        console.log(`O valor transferido foi R$ ${this.quantidadeTransferir}`)
    }

}