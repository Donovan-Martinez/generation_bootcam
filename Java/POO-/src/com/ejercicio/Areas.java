package com.ejercicio;

public class Areas {

	public void mensaje() {
		System.out.println("Voy a calcular un area");
	}
	public double areaCuadrado(int l) {
		return l*l;
	}
	
	public double areaTriangulo(int base, int altura) {
		return (base * altura)/ 2;
	}
	
	public double areaCirculo(int r) {
		return Math.PI*(r*r);
	}

}
