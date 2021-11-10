import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AjustesComponent } from './backend/ajustes/ajustes.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'resultados', component: ResultadosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ajustes', component: AjustesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
