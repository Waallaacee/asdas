let a, b, c, r, s, d
alert("Informe os numeros para que a conta seja efetuada")
a = prompt("Digite o primeiro numero: ")
b = prompt("Digite o segundo numero: ")
c = prompt("Digite o terceiro numero: ")
r = parseInt(a) + parseInt(b)
r = r * r
s = parseInt(b) + parseInt(c)
s = s * s
d = parseFloat(r) + parseFloat(s) 
d = d / 2
alert("O resultado da conta é " + d)