var categorias = document.querySelectorAll('.categoria');

categorias.forEach((categoria) => {
    categoria.addEventListener('click', function () {
        var subcategoria = categoria.querySelector('.subcategoria');
        
        subcategoria.classList.toggle('mostrando');
        
        var color = categoria.getAttribute('data-color');
        
        document.body.style.backgroundColor = color;
    });
});