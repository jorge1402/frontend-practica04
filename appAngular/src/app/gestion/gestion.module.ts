import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlumnosComponent,
    CursosComponent
  ],
  exports:[
    AlumnosComponent,
    CursosComponent
  ]
})
export class GestionModule { }
