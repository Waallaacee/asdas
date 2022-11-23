let fahrenhait, celsius
fahrenhait = prompt("Informe a temperatura (Fahrenheit) que deseja converter");

function resultado(fahrenhait){
    celsius = (parseFloat(fahrenhait) - 32) * 0.55
    return alert(celsius);
}
resultado(fahrenhait);