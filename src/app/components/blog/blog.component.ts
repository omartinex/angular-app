import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  valor3: string;

  constructor() { }

  ngOnInit(): void {
  }

  //Datos de un empleado
  nombre = 'Juan Martinez';
  edad = 40;
  email = 'jfmartinez@local.domain';
  sueldos = [ 1700, 1600, 1900];
  activo = true;

  //Metodo propiedad activo
  esActivo() {
    if (this.activo)
      return 'Trabajador activo';
    else
      return 'Trabajador inactivo';
  }

  //Retorna la suma de sus últimos 3 meses de sueldo
  ultimos3Sueldos(){
    let suma=0;
    for (let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }
}
