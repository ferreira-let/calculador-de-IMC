function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").textContent = "Informe valores válidos de peso e altura.";
        return;
    }
    
    var imc = peso / (altura * altura);
    
    var resultadoTexto = "";
    if (imc < 18.5) {
        resultadoTexto = "Abaixo do peso";
    } else if (imc < 24.9) {
        resultadoTexto = "Peso normal";
    } else if (imc < 29.9) {
        resultadoTexto = "Sobrepeso";
    } else if (imc < 34.9) {
        resultadoTexto = "Obesidade grau 1";
    } else if (imc < 39.9) {
        resultadoTexto = "Obesidade grau 2";
    } else {
        resultadoTexto = "Obesidade grau 3";
    }
    
    document.getElementById("resultado").textContent = "Seu IMC é " + imc.toFixed(2) + ". classificado como: " + resultadoTexto;
}
