import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  datos: UserI = {
    nombre: null,
    edad: null,
    correo: null,
    uid: null,
    password: null,
    perfil: 'visitante'
  }

  constructor(private auth: AuthService,
              private firestore: FirestoreService,
              private interaction: InteractionService,
              private router: Router) { }

  ngOnInit() {}

  async registrar() {
    this.interaction.presentLoading('registrando...')
    console.log('datos -> ', this.datos);
    const res = await this.auth.registarUser(this.datos).catch( error => {
      this.interaction.closeLoading();
      this.interaction.presentToast('error')
      console.log('error');
    })
    if (res) {
        console.log('exito al crear el usuario');
        const path = 'Usuarios';
        const id = res.user.uid;
        this.datos.uid = id;
        this.datos.password = null
        await this.firestore.createDoc(this.datos, path, id)
        this.interaction.closeLoading();
        this.interaction.presentToast('registrado con exito');
        this.router.navigate(['/home'])
    }

  }

}
