import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  credenciales = {
    correo: null,
    password: null
  }


  constructor(private auth: AuthService,
              private interaction: InteractionService,
              private router: Router,
              private menu: MenuController) {



               }

  ngOnInit() {}




  async login() {
    await this.interaction.presentLoading('ingresando...')
    console.log('credenciales -> ', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch( error => {
        console.log('error');
        this.interaction.closeLoading();
        this.interaction.presentToast('Usuario o contraseña invalido')
    })
    if (res) {
        console.log('res -> ', res);
        this.interaction.closeLoading();
        this.interaction.presentToast('Ingresado con exito');
        this.router.navigate(['/home'])
    }
  }




}
