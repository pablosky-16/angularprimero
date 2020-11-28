import {Pipe, PipeTransform} from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Pipe ({

                name:'calculadora'
        })

export class CalculadoraPipe implements PipeTransform
{

    transform(value: any, value_two: any){

        let operaciones = `
        Suma: ${value+value_two} -
        Resta:${value-value_two} -
        Multiplicacion:${value*value_two} -
        Division:${value/value_two} -

        `;

        return operaciones;


    }








}
