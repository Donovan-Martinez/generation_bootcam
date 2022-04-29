/* Este es un comentario */
const $titulo = document.querySelector('h1')
const $parr = document.querySelector('p')
const $card = document.querySelector('.card')


console.log($parr.nodeName);
console.log($titulo.nodeName);

//TextContent
$parr.textContent += "Hola Mundo";
console.log($parr.textContent);

$titulo.textContent = 'Modificando elementos con JavaScript'

//InnerText - Mejor no utilizarla

//innerHTML
console.log($parr.innerHTML);
$parr.innerHTML = '<a href = "#">Este es un enlace</a>';
//innerHTML Remplaza lo que hay dentro del elemento seleccionado

//outerHTML
$parr.outerHTML = '<a href = "#">Este es un enlace</a>';
//outerHTML Remplaza todo, incluido el elemento seleccionado


//Crear elementos de HTML

function crearElemento(){
    const img = document.createElement('img')
    img.src = "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU";

    //appendChild
    $card.appendChild(img);
    // 

}
crearElemento();
