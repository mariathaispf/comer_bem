function calcular_imc() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    document.getElementById("imc").innerHTML = "Seu IMC é: " + (peso/(altura*altura)).toFixed(2);
    var imc = peso/(altura*altura).toFixed(2);
    var img = document.getElementById("img");


    if (imc >= 0 && imc <= 22) {
        document.getElementById("qualimc").innerHTML = 'Abaixo do Peso';
        img.src = "../img/abaixo.jpg";
    }
    else if (imc > 22 && imc < 27) {
        document.getElementById("qualimc").innerHTML = 'Peso Adequado';
        img.src = "../img/normal.jpg"
    }
    else if (imc >= 27) {
        document.getElementById("qualimc").innerHTML = 'Sobrepeso';
        img.src = "../img/acima.jpg"
    }
    else {
        document.getElementById("qualimc").innerHTML = 'IMC inválido';
        img.src = ""
    }
}