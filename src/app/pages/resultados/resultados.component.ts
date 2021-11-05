import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/models';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {

  resultado: number = 0;
  mensaje: string = "hola";
  enable: boolean = false;

  resultados: number[] = [0, 4, 9, 9];

  julio: Estudiante = {
    nombre: 'julio',
    apellido: 'Mendoza',
    edad: 10,
    sexo: 'M',
    cedula: '0100102032',
  }

  estudiantes: Estudiante[] = [
    {
      nombre: 'julio',
      apellido: 'Mendoza',
      edad: 10,
      sexo: 'M',
      cedula: '0100102032',
    },
    {
      nombre: 'katty',
      apellido: 'Mendoza',
      edad: 19,
      sexo: 'M',
      cedula: '0100102032',
    },
    {
      nombre: 'diana',
      apellido: 'Mendoza',
      edad: 31,
      sexo: 'M',
      cedula: '0100102032',
    }
  ]


  constructor() {
      console.log("HOLA ESTOY EN EL CONTRUCTOR");
      this.getResultados();

      this.estudiantes.forEach( estudiante => {
           console.log('la edad es -> ', estudiante.edad);
      } )
      
      
  }

  ngOnInit() {
    console.log('HOLA YA SE CREO LA VISTA');
  }
  
  getResultados() {
    console.log('estos son los resultados ->', this.estudiantes);

  }

}


