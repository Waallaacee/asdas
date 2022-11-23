let estoque: string[] = []

estoque.push("Ferramentas", "Mesas", "Caixas", "Pregos", "Lampadas")
console.log(estoque);

estoque.pop();
console.log(estoque)

estoque.splice(2,1, "Sofa")
console.log(estoque);