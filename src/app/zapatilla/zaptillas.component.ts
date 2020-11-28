import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ThrowStmt } from '@angular/compiler';
//import { ConsoleReporter } from 'jasmine';
//import { templateJitUrl } from '@angular/compiler';



@Component({

    selector: 'zapatillas',
    templateUrl: './zapatilla.component.html'



})

export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componentes de zapatilla";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public mi_marca:String;

    constructor(){
        this.marcas = new Array(); 
        this.zapatillas = [
            new Zapatilla('Rebook', 'classic', 'blanca', 20, true),
            new Zapatilla('Adidas', 'classic', 'roja', 20, true),
            new Zapatilla('Dc', 'classic', 'negro', 120, false),
            new Zapatilla('Puma', 'classic', 'negro', 120, false),
            new Zapatilla('Puma', 'Spartan', 'negro', 120, false),
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
        
        this.get_Marcas();
    
    }
   

    get_Marcas(){
        this.zapatillas.forEach((zapatilla, index) =>{
           
            if(this.marcas.indexOf(zapatilla.marca) < 0 ){
                this.marcas.push(zapatilla.marca)
            }

        });
    
    console.log(this.marcas);
    
    
    }

    get_marcas1(){

        alert(this.mi_marca);
    }

    add_marca(){
        this.marcas.push(this.mi_marca);
    }
}
