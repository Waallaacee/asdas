import { Animal } from "./4/src/animal";
import { Cachorro } from "./4/src/cachorro";
import { Cavalo } from "./4/src/cavalo";
import { Preguiça } from "./4/src/preguiça";

let conta1 = new Cavalo("Marrom", 14, "Manga Larga")

let conta2 = new Cachorro("Vira Balde", "44 cm", "Rex", 6)

let conta3 = new Preguiça("Gavião Real", "Cansado", 32)

conta1.emitirSom();
conta1.correr();

conta2.correr();
conta2.emitirSom();

conta3.subirArvore();