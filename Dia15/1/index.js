let numero, porcentagem
numero = prompt("Informe um numero")
porcentagem = prompt("Informe a porcentagem")

function resultado(numero, porcentagem){
    soma = (numero * porcentagem) / 100
    return alert(soma)
}
resultado(numero, porcentagem)