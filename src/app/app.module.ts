import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { VideojuegoComponent } from './videojuegos/videojuegos.component'

import { ZapatillasComponent} from  './zapatilla/zaptillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component'
import { from } from 'rxjs';
import { ExternoComponent } from './externo/externo.component';
import {CalculadoraPipe} from './pipe/calculadora.pipe'
 

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
