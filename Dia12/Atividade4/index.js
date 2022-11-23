let numero
    numero = prompt("Digite um número: ");
    if(numero < 0 && numero % 2!=0){
    alert("O número é negativo e é ímpar");
    }
    if(numero > 0 && numero % 2==0){
        alert("O número é positivo e é par");
    }if(numero < 0 && numero % 2==0){
        alert("O número é negativo e é par");
    }
    if(numero > 0 && numero % 2!=0){
        alert("O número é positivo e é ímpar");
    }