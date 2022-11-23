import { Animal} from "./animal";

export class Cavalo extends Animal{
    raça: string;

    constructor(
        nome: string,
        idade: number,
        raça: string,
    ){
        super(nome, idade)
        this.raça = raça
    }

    emitirSom(): void {
        console.log("Relincho.......")
    }

    correr(): void {
        console.log("Galopa....")
    }
}