let numero = 0, soma = 0, total = 0
while(numero >= 0){
    numero = prompt("Informe um numero")
    if(numero >= 0){
        soma = parseInt(soma) + parseInt(numero)
        total++
    }
}media = soma / total

alert("O resultado da soma é " + soma + "\nA media é " + media + "\nO total é " + total)
