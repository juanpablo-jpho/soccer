import { Component, OnInit } from '@angular/core';
import { ResultadoI } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})
export class AjustesComponent implements OnInit {

  data: ResultadoI =  {
    equipo1: {
      nombre: '',
      goles: null
    }, 
    equipo2: {
      nombre: '',
      goles: null
    }, 
    arbitro: 'Freddy Alarcón',
    id: '',
  }


  constructor(private database: FirestoreService,
            private interaction: InteractionService) { }

  ngOnInit() {
    console.log('hola estamois en ajustes'); 
  }

  crearNuevoResultado() {
      this.interaction.presentLoading('Guardando...');

      const path = 'Resultados';
      const id = this.database.getId();
      this.data.id = id;
      this.database.createDoc(this.data, path, id).then( () => {
          console.log('guardado con exito -> ');
          this.interaction.closeLoading();
          this.interaction.presentToast('Guardado con éxito')
      } )
  }

}
