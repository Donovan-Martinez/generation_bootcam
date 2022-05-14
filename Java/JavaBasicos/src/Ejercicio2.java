import java.util.Scanner;

public class Ejercicio2 {

	public static void main(String[] args) {
		
//		Escribe una aplicación que calcule el indice de masa corporal.
//
//		y que lance un mensaje según lo siguiente:
//
//		Si tiene un IMC entre 18.5 y 25:
//		"Your weigh ratio is good"
//
//		si es menor de 18.5 o mayor de 25:
//		"Your health is not good"
		
		Scanner escaner1 = new Scanner (System.in);
		System.out.println("Escribe un peso:");
		int peso = escaner1.nextInt();
		
		Scanner escaner2 = new Scanner (System.in);
		System.out.println("Escribe la estatura:");
		int estatura = escaner2.nextInt();
		
		int numero = peso/(estatura*estatura) ;
		
		
		if(18.5 < numero) {
		System.out.println("Your weigh ratio is good");
	}else if (18.5 > numero){
		System.out.println("Your health is not good");
	}else if (25 > numero){
		System.out.println("Your health is not good");
	}
		
		
	}
		

	}


