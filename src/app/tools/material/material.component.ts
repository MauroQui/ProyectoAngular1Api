import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  
}
