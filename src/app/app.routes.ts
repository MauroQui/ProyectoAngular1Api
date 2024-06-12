import { Routes } from '@angular/router';
import { MaterialComponent } from './tools/material/material.component';
import { ListaPersonajesComponent } from './personajes/lista-personajes/lista-personajes.component';
import { ListaCapitulosComponent } from './capitulos/lista-capitulos/lista-capitulos.component';
import { ListaUbicacionComponent } from './ubicacion/lista-ubicacion/lista-ubicacion.component';
import { ListaComponent } from './listado/lista/lista.component';
import { PersonajeComponent } from './personaje/personaje/personaje.component';

export const routes: Routes = [
    
    {
        path: '',
        component: MaterialComponent
    },

    {
        path: 'lista',
        component: ListaComponent
    },

    {
        path: 'personaje/:id',
        component: PersonajeComponent
    },

    {
        path: 'personajes',
        component: ListaPersonajesComponent
    },

    {
        path: 'capitulos',
        component: ListaCapitulosComponent
    },

    {
        path: 'ubicacion',
        component: ListaUbicacionComponent
    },

];
