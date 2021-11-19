import { Component, Input, OnInit } from '@angular/core';
import { Resultado, ResultadoI } from 'src/app/models/models';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],
})
export class ResultadoComponent implements OnInit {

  @Input() resultado: ResultadoI;

  constructor() { }

  ngOnInit() {}

  add() {
    console.log('añadir a favoriuta -> ', this.resultado);
    
  }



}
