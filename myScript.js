// Função para calcular o IMC
function calcularIMC() {
    // Obter os valores inseridos pelo usuário
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    // Calcular o IMC
    const imc = peso / (altura * altura);
  
    // Exibir o resultado
    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2);
  
    // Exibir a imagem correspondente ao resultado
    let imagem = "";
    if (imc < 18.5) {
      imagem = "magro.jpg";
    } else if (imc >= 18.5 && imc < 25) {
      imagem = "normal.jpg";
    } else if (imc >= 25 && imc < 30) {
      imagem = "sobrepeso.jpg";
    } else {
      imagem = "obeso.jpg";
    }
  
    document.getElementById("imagem").innerHTML = "<img src='" + imagem + "' alt='imagem'>";
  }