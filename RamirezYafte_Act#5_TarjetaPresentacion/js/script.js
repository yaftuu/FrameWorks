function guardar() {
    var nuevoNombre = document.getElementById("nuevoNombre").value;
    var nuevoPuesto = document.getElementById("nuevoPuesto").value;
    
    document.getElementById("nombre").textContent = nuevoNombre;
    document.getElementById("puesto").textContent = nuevoPuesto;
}