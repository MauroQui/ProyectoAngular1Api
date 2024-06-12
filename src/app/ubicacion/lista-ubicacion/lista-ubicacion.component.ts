import { Component, OnInit } from '@angular/core';
import { ListaComponent } from "../../listado/lista/lista.component";
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
    selector: 'app-lista-ubicacion',
    standalone: true,
    templateUrl: './lista-ubicacion.component.html',
    styleUrl: './lista-ubicacion.component.css',
    imports: [
      ListaComponent,
      MaterialModule,
      HttpClientModule,

    ],
    
    providers: [
      RickAndMortyService
  ],
})
export class ListaUbicacionComponent implements OnInit {

  ubicacion: any;

  constructor (private rymService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rymService.obtenerUbicacion().subscribe(
      resultado => {
        this.ubicacion = resultado;
        console.log(this.ubicacion);
      }
    )
  }
}  
