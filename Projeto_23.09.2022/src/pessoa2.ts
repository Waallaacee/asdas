export class Pessoa2{
    saldo2: number;
    reeceber: number;

    constructor(
        saldo2: number,
        reeceber: number,
    ){
        this.saldo2 = saldo2
        this.reeceber = reeceber
    }

    receber(){
        console.log(`O valor recebido foi: R$ ${this.reeceber}`)
    }

    verSaldo2(){
        console.log(`\nWALLACE SANTOS DA SILVA:`)
        console.log(`O seu saldo é: ${this.saldo2}`)
    }
}