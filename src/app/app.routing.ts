// importar modulos del router de Angular

import { ModuleWithProviders, Component } from'@angular/core';
import { Routes, RouterModule } from '@angular/router';

///importat componentes

import { ZapatillasComponent} from './zapatilla/zaptillas.component';
import { VideojuegoComponent } from './videojuegos/videojuegos.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component'
import { ExternoComponent} from './externo/externo.component';
//array de rutas

const appRoutes: Routes =[
    {path:'', component:HomeComponent},
    {path:'zapatillas', component:ZapatillasComponent },
    {path:'videojuego', component:VideojuegoComponent},
    {path:'cursos', component:CursosComponent},
    {path:'externo', component:ExternoComponent},
    {path: '**',component:HomeComponent}

];

//exportar al modulo

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
