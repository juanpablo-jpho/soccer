import { Component, OnInit } from '@angular/core';
import { Estudiante, Resultado, ResultadoI } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import {ThemePalette} from '@angular/material/core';

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

  task: any = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
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




