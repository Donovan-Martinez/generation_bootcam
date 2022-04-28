/* Nivel 1 */
/* const anioNacimiento = parseInt(prompt("Escribe el año de nacimiento:"))
const anioActula = 2022;
console.log(anioNacimiento);

console.log(`Tienes ${anioActula -anioNacimiento} años`);

 */

/* Nivel 2 */

/* const anioActual = 2022;

function calcularEdad(){
  const anioNacimiento = parseInt(document.getElementById("anio").value);
  console.log(anioNacimiento);
  console.log(`Tienes ${anioActual - anioNacimiento} años`)
} */

/* Opcion 2 */
/* const boton = document.getElementById("calcular")
console.log(boton);

boton.addEventListener("click", () =>{
  const anioNacimiento = parseInt(document.getElementById("anio").value);
  console.log(anioNacimiento);
  console.log(`Tienes ${anioActual - anioNacimiento} años`)
}) */


/* Nivel 3 */
const fecha = new Date()
const anioActual = fecha.getFullYear()
console.log(anio);

const mesActual = fecha.getMonth()
console.log(mes);

const diaActual = fecha.getDate()
console.log(dia);

/* const anioActual = 2022
const mesActual = 04
const diaActual = 27 */
function mostrarDatos(){
  const nacimiento = document.getElementById("anio").value;
  console.log(nacimiento);
  const nacimientoDividido = nacimiento.split("-")
  console.log(nacimientoDividido);
  const anioNacimiento = parseInt(nacimientoDividido[0])
  const mesNacimiento = parseInt (nacimientoDividido[1]) 
  const diaNacimiento = parseInt (nacimientoDividido[2])
  console.log(anioNacimiento,mesNacimiento,diaNacimiento);

  if( mesNacimiento <= mesActual && diaNacimiento <= diaActual){
    console.log(`Tienes ${anioActual - anioNacimiento} años`)
  }
  else{
    console.log(`Tienes ${anioActual - anioNacimiento - 1} años`)
  }

}



/*  edad =
 
 function edad(Cadena) {
        let hoy = new Date()
        let fechaNacimiento = new Date(Cadena)
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if (
          diferenciaMeses < 0 ||
          (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
          edad--
        }
        return edad
      } */