a = prompt("Digite a primeira nota ")
b = prompt("Digite a segunda nota ")
c = prompt("Digite a terceira nota ")
media = parseFloat(a) + parseFloat(b) + parseFloat(c) / 3
ponderada = (2 * a + 3 * b + 5 * c)/(2+3+5)
alert("A media final é " + media + "\nA media ponderada é " + ponderada)