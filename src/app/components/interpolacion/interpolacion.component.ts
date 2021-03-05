import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  public user: any;

  constructor() {

    this.user = {
      nombre: 'Nicolas',
      apellidos: 'Martinez',
      bio: 'Colombia',
      genero: 'Masculino'
    }
  }

  ngOnInit(): void {
  }

  duplicarTexto(valor: string): string{
    return valor + ' ' + valor;
  }

}
