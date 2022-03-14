import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  aMayusculas: boolean = true
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ];

  ordenarPor: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  
  toggleMayus = ()=> {
    this.aMayusculas = !this.aMayusculas
  }

  cambiarOrden = (orden: string) => {
    this.ordenarPor = orden;
  }
}
