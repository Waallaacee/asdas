let n1, n2
n1 = prompt("Informe um numero")
n2 = prompt("Informe um numero")

function resultado(n1, n2){
    soma = parseFloat(n1) + parseFloat(n2)
    sub = parseFloat(n1) - parseFloat(n2)
    multi = parseFloat(n1) * parseFloat(n2)
    divi = parseFloat(n1) / parseFloat(n2)
    return console.log(soma, sub, multi, divi); 
    
}
resultado(n1, n2)
