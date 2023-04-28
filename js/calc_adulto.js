function calcular_imc() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    document.getElementById("imc").innerHTML = "Seu IMC é: " + (peso/(altura*altura)).toFixed(2);
    var imc = peso/(altura*altura).toFixed(2);
    var img = document.getElementById("img");


    if (imc >= 0 && imc < 18.5) {
        document.getElementById("qualimc").innerHTML = 'Abaixo do Peso';
        img.src = "../img/abaixo.jpg";
    }
    else if (imc >= 18.5 && imc < 24.9) {
        document.getElementById("qualimc").innerHTML = 'Peso Normal';
        img.src = "../img/normal.jpg";
    }
    else if (imc >= 25 && imc < 29.9) {
        document.getElementById("qualimc").innerHTML = 'Acima do Peso';
        img.src = "../img/acima.jpg";
    }
    else if (imc >= 30 && imc < 34.9) {
        document.getElementById("qualimc").innerHTML = 'Obesidade (Classe 01)';
        img.src = "../img/obesidade1.jpg";
    }
    else if (imc >= 35 && imc < 39.9) {
        document.getElementById("qualimc").innerHTML = 'Obesidade (Classe 02)';
        img.src = "../img/obesidade2.jpg";
    }
    else if (imc >= 40) {
        document.getElementById("qualimc").innerHTML = 'Obesidade (Classe 03)';
        img.src = "../img/obesidade3.jpg";
    }
    else {
        document.getElementById("qualimc").innerHTML = 'IMC inválido';
        img.src = "";
    }
}