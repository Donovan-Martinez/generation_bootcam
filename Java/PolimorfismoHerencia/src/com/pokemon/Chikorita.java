package com.pokemon;

public class Chikorita extends TipoPlanta{
	
	//Atributos especificos de chikorita
	private int numeroCuernitos;

	public Chikorita(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas, int numeroCuernitos) {
		super(id, edad,nivel, nombre, evolucion, numeroHojas);
		this.numeroCuernitos = numeroCuernitos;
	}
	//Metodo Especifico
	public void latigo() {
		System.out.println(getNombre() + " uso latigo");
	}
	public void atacar() {
		System.out.println(getNombre() + "tipo planta esta atacando con hojas navajas");
	}
	

	//Getters y setters
	public int getNumeroCuernitos() {
		return numeroCuernitos;
	}
	public void setNumeroCuernitos(int numeroCuernitos) {
		this.numeroCuernitos = numeroCuernitos;
	}
	
	@Override
	public String toString() {
		return "Chikorita [numeroCuernitos=" + numeroCuernitos + "]";
	}
	
}
