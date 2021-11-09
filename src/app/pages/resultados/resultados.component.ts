import { Component, OnInit } from '@angular/core';
import { Estudiante, Resultado, ResultadoI } from 'src/app/models/models';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {


  mensaje: string = 'hola estamos en resultados';
  enable: boolean = true;
  sexo: 'Masculino' | 'Femenino' = 'Masculino';


  amigo: Amigo = {
    nombre: 'juan',
    talla: 'M',
    numero: 10,
    edad: 25,
    cedula: '01046390292'
  }


  partidos: ResultadoI[] = [
    {
        equipo1: {
          nombre: 'Ecuador',
          goles: 4,
        },
        equipo2: {
          nombre: ' Venezuela',
          goles: 0
        },
        arbitro: 'MAX' 
    },
    {
      equipo1: {
        nombre: 'Uruguay',
        goles: 0,
      },
      equipo2: {
        nombre: 'Argentina',
        goles: 2
      },
      arbitro: 'MAX' 
  },
  
    {
      equipo1: {
        nombre: 'Brasil',
        goles: 4,
      },
      equipo2: {
        nombre: 'Colombia',
        goles: 0
      }
    }

  ]



  resultado: number = 0;
  resultados: number[] = [0, 4, 9, 9];

  mensajes: string[] = ['hola', 'adios'];

  constructor() {
      console.log("HOLA ESTOY EN EL CONTRUCTOR");
      this.getResultados();

      
  }

  ngOnInit() {
    console.log('HOLA YA SE CREO LA VISTA');
  }
  
  getResultados() {


  }

}


interface Amigo {
  nombre: string;
  talla: 'S' | 'M' | 'L';
  numero: number;
  edad: number;
  cedula: string;
}




