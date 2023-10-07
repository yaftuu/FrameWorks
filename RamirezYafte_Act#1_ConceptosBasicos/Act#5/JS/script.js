function calcular() {
    var radio = parseFloat(document.getElementById("radio").value);

    if (!isNaN(radio)) {
        var pi = 3.1416;
        var perimetro = 2 * pi * radio;
        var area = pi * Math.pow(radio, 2);
        var volumen = (4 * pi * Math.pow(radio, 3)) / 3;
        document.getElementById("perimetro").textContent = perimetro.toFixed(2);
        document.getElementById("area").textContent = area.toFixed(2);
        document.getElementById("volumen").textContent = volumen.toFixed(2);
    } else {
        alert("Ingresa un valor válido para el radio.");
    }
}