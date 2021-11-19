import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserI } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  login: boolean = false;
  rol: 'visitante' | 'admin' = null;


  constructor(public popoverController: PopoverController,
              private auth: AuthService,
              private interaction: InteractionService,
              private firestore: FirestoreService,
              private router: Router) { 

                    this.auth.stateUser().subscribe( res => {
                         if (res) {
                              console.log('está logeado');
                              this.login = true;
                              this.getDatosUser(res.uid)
                         } else {
                           console.log('no está logeado');
                           this.login = false;
                           this.router.navigate(['/login'])
                           
                         }   
                    })

              }

  ngOnInit() {}



  loginApp() {
      this.login = true;
  }

  logout() {
      this.auth.logut();
      this.interaction.presentToast('sesion finalizada');
      this.router.navigate(['/login'])

  }

  getDatosUser(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<UserI>(path, id).subscribe( res => {
        console.log('datos -> ', res);
        if (res) {
          this.rol = res.perfil
        }
    })
  }

}
