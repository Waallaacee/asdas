let altura, base, area, res
altura = prompt("Informe a altura do triângulo")
base = prompt("Informe a base do triângulo")
if(altura && base > 0){
    res = altura * base 
    area = res / 2
}alert("A área do triângulo é de " + area)