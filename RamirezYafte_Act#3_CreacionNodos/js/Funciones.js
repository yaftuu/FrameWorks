let seccionHTML=document.getElementById('conHTML');
let seccionCreate=document.getElementById('conCreate');

let saludo ='Hola EVN401 ';

seccionHTML.innerHTML=`<h1 id="titulo">Creación de Nodos con HTML</h1>
                        <p class="parrafo contenido">
                            <span class="capital">${saludo}Lorem ipsum</span>
                            dolor sit amet consectetur adipisicing elit. Quasi animi similique, quos ipsam tempora dolorem repellendus quod nam, non odit nobis doloremque illo? Quos, a numquam architecto harum quod aut doloribus excepturi dicta dolorum repellendus quidem magnam nihil voluptatem eos.

                        </p>`;

// Con Create --------------------------------------------------------------

let elemento = document.createElement('h1');
elemento.setAttribute('id', 'titulo');
let contenido = document.createTextNode('Creación de Nodos con CREATE');
elemento.appendChild(contenido);
let conCreate = document.getElementById('seccionCreate'); 
seccionCreate.appendChild(elemento);
let elemento2 = document.createElement('p');
elemento2.setAttribute('class', 'parrafo contenido');
let capital = document.createElement('span');
capital.setAttribute('class', 'capital');
let contenido3 = document.createTextNode('Lorem impsum');
capital.appendChild(contenido3);
elemento2.appendChild(capital);
let content = document.createTextNode('nvunvsudbnlsubtluwtbnwtr');
elemento2.appendChild(content);
seccionCreate.appendChild(elemento2);

//----------------------------------------------------------------------

let seccionConoceme = document.createElement('section');

let h1Conoceme = document.createElement('h1');
let textoH1 = document.createTextNode('Conóceme');
h1Conoceme.appendChild(textoH1);

seccionConoceme.appendChild(h1Conoceme);

let contenedor = document.createElement('div');
contenedor.setAttribute('class', 'contenedor');

let article1 = document.createElement('article');
article1.setAttribute('class', 'conoceme');
let fieldset = document.createElement('fieldset');
let spanYafte = document.createElement('span');
let textoSpan = document.createTextNode('Yafte');
spanYafte.appendChild(textoSpan);
fieldset.appendChild(spanYafte);
article1.appendChild(fieldset);

let article2 = document.createElement('article');
article2.setAttribute('class', 'conoceme');
let imagen = document.createElement('img');
imagen.setAttribute('src', '../imagenes/pedrito.jpeg'); 
article2.appendChild(imagen);

contenedor.appendChild(article1);
contenedor.appendChild(article2);

seccionConoceme.appendChild(contenedor);
document.body.appendChild(seccionConoceme);