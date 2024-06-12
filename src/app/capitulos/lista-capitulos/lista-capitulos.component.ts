import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { MaterialModule } from '../../modules/material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListaComponent } from "../../listado/lista/lista.component";

@Component({
    selector: 'app-lista-capitulos',
    standalone: true,
    providers: [
        RickAndMortyService
    ],
    templateUrl: './lista-capitulos.component.html',
    styleUrl: './lista-capitulos.component.css',
    imports: [
        MaterialModule,
        HttpClientModule,
        ListaComponent
    ]
})
export class ListaCapitulosComponent implements OnInit{

  capitulos: any;

  constructor (private rymService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rymService.obtenerCapitulos().subscribe(
      resultado => {
        this.capitulos = resultado;
        console.log(this.capitulos);
      }
    )
  }
}
