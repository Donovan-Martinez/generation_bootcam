package com.pokemon;

public class TipoPlanta extends Pokemon {
	
	//Atributos
	private int numeroHojas;
	
	//Contructor
	public TipoPlanta(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas) {
		super(id,edad,nivel ,nombre ,evolucion);
		this.numeroHojas = numeroHojas;
		
	}
	
	//Metodos
	
	public void paralizar() {
		System.out.println(getNombre() + "esta paralizando");
	}
	public void envenenar() {
		System.out.println(getNombre() + "esta envenenando");
	}
	
	@Override 
	public void atacar() {
		System.out.println(getNombre() + "tipo planta esta atacando");
	}
	
	public void saludar(String mensaje) {
		System.out.println(mensaje);
		
	}
	
	//Geters y setters

	public int getNumeroHojas() {
		return numeroHojas;
	}

	public void setNumeroHojas(int numeroHojas) {
		this.numeroHojas = numeroHojas;
	}

	

	
	
	
	
}
