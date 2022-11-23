import { Animal } from "./animal";

export class Preguiça extends Animal{
    predadores: string;

    constructor(
        predadores: string,
        nome: string,
        idade: number,
    ){
        super(nome, idade)
        this.predadores = predadores
    }

    subirArvore(){
        console.log("Mó páz :)")
    }
}