package ciclos;

import java.util.Scanner;

		
		import javax.swing.JOptionPane;

		public class Ejercicio1 {
//			Adivina el n�mero
//
//			Escribe un programa en Java que te pida introducir un n�mero y lo compare con otro n�mero que puede ser aleatorio o establecido por t�.
//			Mientras que el n�mero no sea igual al establecido como base, el programa se seguir� ejecutando.
//			Una vez que ambos n�meros sean iguales, el programa se detendr� y mostrar� lo siguiente en consola:
//
//			"Felicidades, adivinaste el n�mero."
			
			public static void main(String[] args) {
				
				int numBase = 9;
				String numEntrada = "";
				
				do {
					numEntrada = JOptionPane.showInputDialog("Introduce un numero");
					
				}	while (numBase != Integer.parseInt(numEntrada));
				
				System.out.println("Felicidades, adivinaste el n�mero.");
			}          
		



	}


