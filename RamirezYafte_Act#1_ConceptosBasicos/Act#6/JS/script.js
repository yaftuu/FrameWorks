function generarNumeros() {
    var primerNumero = parseInt(document.getElementById("primerNumero").value);
    var segundoNumero = parseInt(document.getElementById("segundoNumero").value);
    var resultado = "";
    if (!isNaN(primerNumero) && !isNaN(segundoNumero)) {
        if (primerNumero <= segundoNumero) {
            for (var i = primerNumero; i <= segundoNumero; i++) {
                resultado += i + " ";
            }
        } else {
            resultado = "El primer número debe ser menor o igual al segundo número.";
        }
    } else {
        resultado = "Ingresa valores numéricos válidos.";
    }

    document.getElementById("resultado").textContent = resultado;
}