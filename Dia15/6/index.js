let custo, imposto
custo = prompt("Informe o custo")
imposto= prompt("Iforme o imposto")

function resultado(custo, imposto){
    soma = (imposto / 100) * parseFloat(custo) + parseFloat(custo)
    return alert(soma)
}
resultado(custo, imposto)