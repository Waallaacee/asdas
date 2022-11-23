let n1, n2, n3
n1 = prompt("Informe o primeiro numero")
n2 = prompt("Informe o segundo numero")
n3 = prompt("Informe o terceiro numero")

function maiorNumero(n1, n2, n3){
    maiorN = Math.max(n1,n2,n3)
    return alert(maiorN)
}
function menorNumero(n1, n2, n3){
    menorN = Math.min(n1, n2, n3)
    return alert(menorN)
}
maiorNumero(n1, n2, n3)
menorNumero(n1, n2, n3)