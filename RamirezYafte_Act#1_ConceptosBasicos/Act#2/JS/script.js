function calcularDescuento() {
    var estadoCivil = document.getElementById("estadoCivil").value;
    var monto = parseFloat(document.getElementById("monto").value);
    var descuento = 0;

    switch (estadoCivil) {
        case "soltero":
            descuento = 5;
            break;
        case "casado":
            descuento = 10;
            break;
        case "viudo":
            descuento = 15;
            break;
        case "divorciado":
            descuento = 7;
            break;
        default:
            descuento = 0;
            break;
    }

    var descuentoAplicado = (monto * descuento) / 100;
    var montoConDescuento = monto - descuentoAplicado;

    document.getElementById("descuento").textContent = descuento;
    document.getElementById("montoConDescuento").textContent = "$" + montoConDescuento.toFixed(2);
}