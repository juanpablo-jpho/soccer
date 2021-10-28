import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { MenuComponent } from './components/menu/menu.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultadosComponent,
    MenuComponent,
    ResultadoComponent,
    LoginComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
