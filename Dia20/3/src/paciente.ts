export class Paciente {
    nomePaciente: string;
    Doença: string;
    TipoSangue: string;
    Altura: number;
    Peso: number;

    constructor(
        nomePaciente: string,
        Doença: string,
        TipoSangue: string,
        Altura: number,
        Peso: number,
    ){
        this.nomePaciente = nomePaciente
        this.Doença = Doença
        this.TipoSangue = TipoSangue
        this.Altura = Altura
        this.Peso = Peso
    }

    nome(){
        console.log(`Nome: ${this.nomePaciente}`)
    }

    doença(){
        console.log(`Doença ${this.Doença}`)
    }

    sangue(){
        console.log(`Tipo Sanguéneo: ${this.TipoSangue}`)
    }

    alto(){
        console.log(`Altura: ${this.Altura}`)
    }

    pesso(){
        console.log(`Peso: ${this.Peso}`)
    }
}