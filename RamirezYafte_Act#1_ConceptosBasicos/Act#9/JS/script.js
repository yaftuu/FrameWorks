var coloresSeleccionados = [];
        function agregarCajas() {
            var contenedorCajas = document.getElementById("contenedorCajas");
            var selectColores = document.getElementById("colores");
            var numCajas = parseInt(document.getElementById("numCajas").value);
            var colorSeleccionado = selectColores.value;
            if (!isNaN(numCajas) && numCajas > 0) {
                for (var i = 0; i < numCajas; i++) {
                    var nuevaCaja = document.createElement("article");
                    nuevaCaja.className = "caja";
                    nuevaCaja.style.backgroundColor = colorSeleccionado;
                    nuevaCaja.addEventListener("mouseenter", function () {
                        this.classList.add("rojo-oscuro");
                    });
                    nuevaCaja.addEventListener("mouseleave", function () {
                        this.classList.remove("rojo-oscuro");
                    });
                    contenedorCajas.appendChild(nuevaCaja);
                    coloresSeleccionados.push(colorSeleccionado);
                }
            } else {
                alert("Ingresa un número válido de cajas (mayor que 0).");
            }
        }
        function borrarCajas() {
            var contenedorCajas = document.getElementById("contenedorCajas");
            contenedorCajas.innerHTML = "";
            coloresSeleccionados = [];
        }