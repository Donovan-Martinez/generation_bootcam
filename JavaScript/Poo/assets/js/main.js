class Persona {
    //Atibutos
    #id = 0;
    static #contador = 0;
    #nombre = 'Pedro';// Variable Privada (#nombre)
    #edad = 0;
    #correo= '';
    
    constructor(nombre, edad, correo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#correo = correo;
        this.#id = ++Persona.#contador;


    }

    //Setters & getters
    // set & get
    // Fijar % obetners
    //Se usan como si fueran atributos
    get getNombre(){
        return this.#nombre;
    }
    set setNombre(nombre){
        this.#nombre = nombre;
    }
        
    get getEdad(){
        return this.edad;
    }
    set setEdad(edad){
        this.edad = edad;
    }
    get getCorreo(){
        return this.#correo;
    }
    set setEdad(correo){
        this.#correo = correo;
    }

    //metodos

    cambiarnNombre(nombre){
        this.#nombre = nombre;
    }

    #saludar(){
        let mensaje = `Hola mi nombre es${this.#nombre}`
        return mensaje;
    }
    
    mostrarSaludo(){
        return this.#saludar();
        
    }

    static mostrarContador(){
        return Persona.#contador;
    }

}
//Crear un objeto o una instancia de la clase persona
const persona1 = new Persona('Pedro', 30, 'pedro@gmail.com');
const persona2 = new Persona(' Gabriel', 25, 'grabriel@gmail.com')
const persona3 = new Persona('Martin', 40, 'martin@gmail.com')

persona1.setNombre = ' Jose'
/* persona1.cambiarnNombre(' Antonio') */

console.log(persona1);
console.log(persona2);
console.log(persona3);

console.log(persona1.mostrarSaludo());
console.log(persona2.mostrarSaludo());

/* console.log(Persona.contador); */

console.log(Persona.mostrarContador());