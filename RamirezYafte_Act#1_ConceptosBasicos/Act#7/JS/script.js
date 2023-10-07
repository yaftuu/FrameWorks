function generarSaludo() {
    var momento = document.getElementById("momento").value;
    var sexo = document.getElementById("sexo").value;
    var saludo = "";
    if (momento === "m") {
        saludo = "Buenos días";
    } else if (momento === "t") {
        saludo = "Buenas tardes";
    } else if (momento === "n") {
        saludo = "Buenas noches";
    }
    if (sexo === "m") {
        saludo += " señor.";
    } else if (sexo === "f") {
        saludo += " señora.";
    }
    document.getElementById("saludo").textContent = saludo;
}