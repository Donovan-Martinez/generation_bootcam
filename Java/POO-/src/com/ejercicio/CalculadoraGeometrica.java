package com.ejercicio;

public class CalculadoraGeometrica {

	public static void main(String[] args) {
		
		
		Areas calAreas = new Areas();
		Perimetro PerMedidas = new Perimetro();
		
		//Areas
		
		double areaCirculo = calAreas.areaCirculo(4);
		System.out.println(areaCirculo);
		
		double areaCuadrado = calAreas.areaCuadrado(3);
		System.out.println(areaCuadrado);
		
		double areaTriangulo = calAreas.areaTriangulo(1, 2);
		System.out.println(areaTriangulo);
		
		//Perimetros
		
		double perimetroCirculo = PerMedidas.periCirculo(2);
		System.out.println(perimetroCirculo);
		
		double perimetroCuadrado = PerMedidas.perimetroCuadrado(2);
		System.out.println(perimetroCuadrado);
		
		double perimetroTriangulo = PerMedidas.periTriangulo(3, 2, 1);
		System.out.println(perimetroTriangulo);
	

	}

}
