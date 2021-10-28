import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public toastController: ToastController,
              public loadingController: LoadingController) { }

  ngOnInit() {}

  login() {
    console.log('click en login');
    this.presentLoading();

    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'tus cambios han sifo guardados',
      duration: 5000
    });

    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'bottom',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Ingresando...',
      spinner: 'dots',

    });
    await loading.present();
      setTimeout(() => {
          loading.dismiss();
          this.presentToast();
      }, 5000);
  }

  registrase() {
    console.log('esta es la funcion registrar');
    
  }



}
