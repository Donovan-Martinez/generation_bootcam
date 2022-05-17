package com.calculadora;


public class PruebaCalculadora {

	public static void main(String[] args) {
		System.out.println("Vamos a calcular");
		
		//Instanciar - CRear un objeto a partir de una clase
		Calculadora cal = new Calculadora();
		
		// Metodo que no retorna nada - Void
		cal.sumarMensaje();
		
		//Metodo que regresa un valor
		String mensaje = cal.mensaje();
		System.out.println(mensaje);
		
		double prueba = cal.prueba();
		System.out.println(prueba);
		
		
		//Metodos con parametros
		int suma = cal.sumar(5, 20);
		System.out.println(suma);
		
		cal.sumarM(8, 5);
		
		int resta = cal.restar(8, 1);
		System.out.println(resta);
		
		//Instanciar
		Areas calAreas = new Areas();
		
		calAreas.mensaje();
		
		int areaCuadrado = calAreas.areaCuadrado(10);
		System.out.println(areaCuadrado);
		
		double areaT = calAreas.areaTriangulo(5,10);
		System.out.println(areaT);

	}

}
