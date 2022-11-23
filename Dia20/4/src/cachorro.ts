import { Animal } from "./animal";

export class Cachorro extends Animal{
    raca: string;
    tamanho: string;

    constructor(
        raca: string,
        tamamho: string,
        nome: string,
        idade: number,
    ){
        super(nome, idade)
        this.raca = raca
        this.tamanho = tamamho
    }

    emitirSom(): void {
        console.log("Au Au Au Au......")
    }

    correr(): void {
        console.log("Correndo correndo......")        
    }
} 