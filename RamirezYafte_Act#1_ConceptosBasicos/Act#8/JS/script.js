function calcular() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    if (!isNaN(base) && !isNaN(altura)) {
        var perimetro = 2 * (base + altura);
        var area = base * altura;
        document.getElementById("perimetro").textContent = perimetro.toFixed(2) + " metros";
        document.getElementById("area").textContent = area.toFixed(2) + " metros cuadrados";
    } else {
        alert("Ingresa valores válidos para la base y la altura en metros.");
    }
}