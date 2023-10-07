function encontrarMayor() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);
    var mayor = Math.max(num1, num2, num3);
    document.getElementById("resultado").textContent = mayor;
}