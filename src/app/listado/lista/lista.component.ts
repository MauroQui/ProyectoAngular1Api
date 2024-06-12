import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterLink],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent implements OnInit{
  @Input() data: any 

  constructor(){}

  ngOnInit(): void {
    console.log(this.data);
  }
}