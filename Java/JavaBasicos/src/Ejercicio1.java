
public class Ejercicio1 {

	public static void main(String[] args) {
		
//		Crear una aplicaci�n que reciba un int entre 1 y 10 y que regrese un mensaje seg�n la calificaci�n ingresada.
//
//
//		menos de 3 == "Failed!"
//		menos de 5 == "Insufficient!"
//		menor de 9 == "Good!"
//		10 == "Excellent!"
//
//		Mayor de 10 == "Grade outside range supported!"

		
		int numero = 1;
		
		
		if(numero < 3 ) {
		System.out.println("Failed!");
	}else if (numero < 5){
		System.out.println("Insufficient!");
	}else if (numero < 9){
		System.out.println("Goood!");
	}else if (numero <= 10){
		System.out.println("Excellent!");
	}
		
	}

}

