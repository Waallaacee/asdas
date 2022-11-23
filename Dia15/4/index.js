let peso, altura, imc
peso = prompt("Informe seu peso")
altura = prompt("Informe sua altura")

function resultado(peso, altura){
    altura = altura * altura
    imc = parseFloat(peso) / parseFloat(altura)
    return
   
}
resultado(peso, altura)
if(imc >= 18.5 && imc <= 24.9){
        alert("Peso " + imc.toFixed(1) + "\nPeso normal")
    }if(imc >= 25.0 && imc <=29.9){
        alert("Peso " + imc.toFixed(1) + "\nSobrepeso")
    }if(imc >= 30.0 && imc <= 39.9){
        alert("Peso " + imc.toFixed(1) + "\nObesidade")
    }if(imc >= 40.0){
        alert("Peso " + imc.toFixed(1) + "\nObesidade grave")
    }