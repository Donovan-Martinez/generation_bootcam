addEventListener('load', function(){
    this.alert('Se ha terminado de cargar la pagina');
});


function saludar(){
    alert('Hola')
}


/* Manejador de eventos sematico */
const $botonSemantico = document.getElementById('evento-semantico');

$botonSemantico.onclick = saludar;
$botonSemantico.onclick = function(evento) {
    /* alert('hola desde un evento') */
    console.log(evento.target);
}

/* Manejador de eventos multiple */
const $botonMultiple = document.getElementById('elemento-multiple');

$botonMultiple.addEventListener('click', function(e){

})
$botonMultiple.addEventListener('click', function(){
    console.log(e.target);
})
