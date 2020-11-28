import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({

    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    
    public titulo: string;
    public listado; string;

    
    
    constructor(){

        this.titulo = "componente de videjuego a";
        this.listado = "listado de videjuego populares";
        console.log("se ha a cargado");
    }

    ngOnInit(){

      console.log("ono ninut ejecutado");
        }
    ngDoCheck(){

       console.log("Dochek ejecturada");


    }

    

    ngOnDestroy(){


    }

    cambiarTitulo(){
    this.titulo = "Nuevo titulo";
    }
}

