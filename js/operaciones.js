function suma() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseInt(num1) + parseInt(num2);
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}

function resta() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseInt(num1) - parseInt(num2);
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}

function multiplicacion() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseInt(num1) * parseInt(num2);
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}

function division() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseInt(num1) / parseInt(num2);
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}