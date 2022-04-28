/* function invertirPalabra(palabra){
    return palabra.split("").reverse().join("");
}
console.log(invertirPalabra('Anita lava la tina')); */

/* Ejercicio 1 */
function palindromeChecker(palabraSalas) {
    const reversa = palabraSalas.split("").reverse().join("");
  
    return reversa === palabraSalas ? "true" : "false";
  }
  console.log(palindromeChecker("salas")); // es palindromo

/* otra forma de hacer el ejercicio 1 */

  /* function texto()
        {
            var palabra=prompt("Escribe una palabra").toLowerCase();
         
            // eliminamos los espacios en blanco
            palabra=palabra.replace(/ /g, "");
         
            for (var i=0;i<palabra.length;i++){
                if(palabra[i]!=palabra[palabra.length-i-1]){
                    return false;
                }
            }
            return true;
        }
         
        if(texto())
        {
            alert("Esto es palíndromo");
        }else{
            alert("Esto no es palíndromo")
        } */

  

/* Ejercicio 2 */

function repeat(cadenaRepetida, numero) {
    let repetido = cadenaRepetida.repeat(numero);
    console.log(repetido);
  }
  
  repeat("Hola Mundo ", 5); // se repite el numero de
  

/* Ejercicio 3 */

let TextoBase = "hola mundo";
        let TextoCorto = TextoBase.substring(0, 4);
        console.log( TextoCorto );

