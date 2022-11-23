let np
np = prompt("Informe o nivel de poluição atual")
if(np == 0.3){
    alert("Industrias do grupo 1, parem suas atividades")
}if(np == 0.4){
    alert("Industrias dos grupos 1 e 2, parem suas atividaes")
}if(np >= 0.5){
    alert("Industrias dos grupos 1, 2 e 3, parem suas atividades")
}if(np < 0.3){
    alert("O nivel de polução esta ok")
}