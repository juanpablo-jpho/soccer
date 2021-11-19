import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserI } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth) { }

  login(correo: string, password: string) {
    return  this.authfirebase.signInWithEmailAndPassword(correo, password)
  }

  logut() {
    this.authfirebase.signOut();
  }

  registarUser(datos: UserI) {
    return  this.authfirebase.createUserWithEmailAndPassword(datos.correo, datos.password);
  }

   stateUser() {
    return this.authfirebase.authState
   } 

}
