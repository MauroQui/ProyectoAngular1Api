import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    
    
  ],
  exports: [
    MatListModule,
    MatCardModule,
    MatButtonModule,
    

  ],
})
export class MaterialModule { }
