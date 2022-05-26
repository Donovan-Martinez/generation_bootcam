package testGradle;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Tests de la clase Claculadora")
public class CalculadoraTest {

	@Test
	@DisplayName("Metodo para comprobar suma")
	public void sumaTest() {
		Calculadora sumaCalc = new Calculadora();
		Assertions.assertEquals(2, sumaCalc.suma(1, 1), "El resultado deberia ser 2");
	}
	@Test
	@DisplayName("Metodo para comprobar assertions")
	public void assertionTest() {
		//boolean valorBoolean = true;
		//assertTrue(valorBoolean);
		assertAll(
		"Encabezado",
		() -> assertEquals(2, 1+1, "Deberia ser 2"),
		() -> assertTrue(true, "Deberia ser true")
		);
	}
}
