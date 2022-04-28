const nombre = "Donovan";
const nombre2 = new String("Diego");

const persona = new Object();
persona.nombre = "Donovan"
persona.apellido = "Martinez"
persona.edad = "24"

console.log(persona);

const nuevaPersona = {
    /* nombre: "Donovan", */
    /* Atributos o propiedades */
    nombreCompleto: {
        nombre: "Donovan",
        apellido: "Martinez",
    },
    
    edad:"24",
    pasatiempos: ["nadar","dibujar", "anime"],
    tieneTrabajo: true,
    /* Metodo */
    saludar: function(){
        console.log("Hola");
    },
    sumar: function(n1,n2){
        console.log(`El resultadode la suma es ${n1 +n2}`);
    }
}

"Hola".length //Atributo o propiedad
nuevaPersona.saludar(); //Metodo

console.log(nuevaPersona.edad);
console.log(nuevaPersona.nombreCompleto.nombre);
console.log(nuevaPersona.pasatiempos[1]);

nuevaPersona.saludar()
nuevaPersona.sumar(5,10)

/* Para cambiar el valor */
nuevaPersona.edad = 10
console.log(nuevaPersona);

/* Agregar un nuevo atributo */
nuevaPersona.colorFavorito = "Azul"
console.log(nuevaPersona);

console.log(nuevaPersona.hasOwnProperty("edad")); //Regresa un True o un False
console.log(Objet.keys(nuevaPersona));
console.log(Objet.values(nuevaPersona));

const Donovan = {
    nombreCompleto: {
        nombre: "Donovan",
        apellido: "Martinez"
    },
    edad: 24,
    pasatiempos: ["futbol","Lectura","anime"]
}

