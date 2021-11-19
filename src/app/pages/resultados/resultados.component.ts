import { Component, OnInit } from '@angular/core';
import { Estudiante, Resultado, ResultadoI } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {

  resultados: ResultadoI[] = [];


  constructor(private database: FirestoreService) {      
  }

  ngOnInit() {
    this.getResultados();
  }
  
  getResultados() {

      const path = 'Resultados';
      this.database.getCollection<ResultadoI>(path).subscribe( res => {
          console.log('esta es la lectura', res);
          this.resultados = res;
      })

  }

}


interface Amigo {
  nombre: string;
  talla: 'S' | 'M' | 'L';
  numero: number;
  edad: number;
  cedula: string;
}




