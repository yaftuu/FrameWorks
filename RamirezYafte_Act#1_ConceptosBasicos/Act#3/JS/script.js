function calcularSigno() {
    var anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);

    if (!isNaN(anioNacimiento)) {
        var signos = ["Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra"];
        var indiceSigno = anioNacimiento % 12;
        var signo = signos[indiceSigno];

        document.getElementById("signo").textContent = signo;
        document.getElementById("imagenSigno").src = `img/${signo.toLowerCase()}.jpg`;
    } else {
        alert("Ingresa un año de nacimiento válido.");
    }
}