var custo, acresc, venda,
custo = prompt("Quanto custa o produto?: ") 
acresc = prompt("Qual é o valor de acréscimo?: ")
venda = parseInt(custo) + (custo * acresc) / 100
alert("O valor de venda é: " + venda)