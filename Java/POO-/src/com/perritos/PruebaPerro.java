package com.perritos;

public class PruebaPerro {

	public static void main(String[] args) {
		
		//Instanciar
		
		Perro perro1 = new Perro("Patitas", 3);
		
		//Cambiar sus atributos
		
		//perro1.edad = 3;
		perro1.raza = "Husky";
		perro1.tamanio = "Mediano";
		
		
		//Nombre
		perro1.ladrar();
		
		int edadP = perro1.edadPerruna();
		System.out.println(edadP);
		
		//Metodo estatico
		perro1.mensaje();
		
		Perro.mensaje();
		
		
		Perro perro2 = new Perro("Cookies", 1);
		
		//perro2.nombre = "Cookies";
		//perro2.edad = 1;
		perro2.raza = "Dalmata";
		perro2.tamanio = "Grande";
		
		perro2.ladrar();

	}

}
