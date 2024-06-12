import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    RickAndMortyService
  ],

  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent implements OnInit {
  id: string ='';
  personaje : any;

  constructor(
    private rutaActiva: ActivatedRoute,
    private ryc:RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('id')!;
    console.log(this.id)
    this.ryc.obtenerUnPersonaje(this.id).subscribe(
      result => {
        this.personaje = result
        console.log(this.personaje);
      }
    )
  }
}
