import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AjustesComponent } from './backend/ajustes/ajustes.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { map } from 'rxjs/operators';
import { canActivate } from '@angular/fire/compat/auth-guard';

const uidAdmin = 'd1PEtAiS9oSEyOdRsKTH7gMxDDH3';
const onlyAdmin = () => map( (user: any) => !!user && (user.uid === uidAdmin) );

const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'resultados', component: ResultadosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ajustes', component: AjustesComponent, ...canActivate(onlyAdmin)},
  { path: 'registro', component: RegistroComponent},
  { path: 'perfil', component: PerfilComponent,  canActivate: [AngularFireAuthGuard]},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
