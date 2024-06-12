import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListaComponent } from "../../listado/lista/lista.component";

@Component({
    selector: 'app-lista-personajes',
    standalone: true,
    providers: [
        RickAndMortyService
    ],
    templateUrl: './lista-personajes.component.html',
    styleUrl: './lista-personajes.component.css',
    imports: [
        MaterialModule,
        HttpClientModule,
        ListaComponent
    ]
})
export class ListaPersonajesComponent implements OnInit{
  
  personajes: any;

  constructor (private rymService: RickAndMortyService) {}
  
  ngOnInit(): void {
    this.rymService.obtenerPersonajes().subscribe(
      resultado => {
        this.personajes = resultado;
        console.log(this.personajes);
      }

    )
  }

 

}
