import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  public user: any;
  nombre: string;
  apellido: string;
  edad: number;
  algebra: number;
  quimica: number;
  fisica: number;
  prom: number;

  constructor() {
    /* this.user = {
      nombre: 'Nicolas',
      apellidos: 'Martinez',
      bio: 'Colombia',
      genero: 'Masculino'
    } */
  }

  ngOnInit(): void {
  }

  duplicarTexto(valor: string): string{
    return valor + ' ' + valor;
  }

  // Calcular promedio
  promedio() {
    // let prom = 0;
    this.prom = (this.algebra + this.quimica + this.fisica) / 3;
    if (this.prom >= 3) {
      return 'Ha pasado el semestre porque su nota es: ' + this.prom;
    } else {
      return 'Ha perdido el semestre porque su nota es:' + this.prom;
    }
  }

  // Calcular Edad
  esMayor() {
    if (this.edad >= 18) {
      return 'Es mayor de edad';
    }
    else {
      return 'Es menor de edad';
    }
  }

  // Calcular aprobar
  aprobarAlgebra() {

    // Validar nota algebra
    if (this.algebra >= 3) {
      return 'Ha pasado Algebra';
    }
    else {
      return 'Ha perdido Algebra';
    }
  }

  aprobarQuimica() {

    // Validar nota quimica
    if (this.quimica >= 3) {
      return 'Ha pasado Quimica';
    }
    else {
      return 'Ha perdido Quimica';
    }
  }

  aprobarFisica() {

    // Validar nota quimica
    if (this.fisica >= 3) {
      return 'Ha pasado Fisica';
    }
    else {
      return 'Ha perdido Fisica';
    }
  }

}
