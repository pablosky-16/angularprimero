import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master de Javascript';
  public mostrar_videojuegos: boolean = true;
  public description: string;
  public config;

  constructor(){
    this.config=configuracion;
    this.title = configuracion.titulo;
    this.description=configuracion.descripcion;
  }

  ocultarVideojuegos(){

    this.mostrar_videojuegos=false;


  }


}
