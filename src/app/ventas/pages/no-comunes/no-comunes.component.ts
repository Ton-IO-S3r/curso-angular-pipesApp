import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  
  //I18nSelect
  nombre: string = 'Mariana';
  genero: string = 'femenino';
  mapping_invitation = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //I18nPlural
  clientes: string[] = ['Maria','Pedro','Ramiro','Ernesto', 'Lucia'];
  mapping_clientes = {
    '=0': 'No hay clientes esperando.',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  modificarCliente = () => {
    this.nombre= 'Pedro';
    this.genero= 'masculino';
  }

  eliminarCliente = () =>{
    this.clientes.pop()
  }

  //Key Value pipe
  persona={
    nombre: 'Antonio',
    edad: 36,
    direccion: 'La Paz, Mexico'
  }

  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'robin',
      vuela: false
    },
    {
      nombre: 'aquaman',
      vuela: false
    },
  ]

  //Async pipe
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos una promesa')
    }, 3500);
  })

}
