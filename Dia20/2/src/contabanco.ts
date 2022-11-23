export class ContaBanco{
    Nome: string;
    saldo: number;
    banco: string;

    constructor(
        Nome: string,
        saldo: number,
        banco: string,
    ){
        this.Nome = Nome
        this.saldo = saldo
        this.banco = banco
    }

    nome(){
        console.log(`Nome: ${this.Nome}`)
    }

    Saldo(){
        console.log(`Saldo: ${this.saldo}`)
    }

    Banco(){
        console.log(`Banco: ${this.banco}`)
    }
}