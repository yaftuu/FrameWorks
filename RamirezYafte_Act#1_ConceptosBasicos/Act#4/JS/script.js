function convertirAEuros() {
    var cantidadDolares = parseFloat(document.getElementById("cantidadDolares").value);

    if (!isNaN(cantidadDolares)) {
        var tipoCambio = 1.33250; // 1 euro = 1.33250 dólares
        var equivalenteEuros = cantidadDolares / tipoCambio;

        document.getElementById("equivalenteEuros").textContent = equivalenteEuros.toFixed(2) + " euros";
    } else {
        alert("Ingresa una cantidad válida en dólares.");
    }
}