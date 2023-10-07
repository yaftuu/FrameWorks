function enviarEncuesta() {
    var encuesta = document.getElementById("formulario");
    var respuestas = [];
    for (var i = 0; i < encuesta.elements.length; i++) {
        var element = encuesta.elements[i];
        if (element.type === "radio" && element.checked) {
            respuestas.push(element.value);
        }
    }
    console.log("Respuestas de la encuesta:");
    for (var j = 0; j < respuestas.length; j++) {
        console.log("Pregunta " + (j + 1) + ": " + respuestas[j]);
    }
}