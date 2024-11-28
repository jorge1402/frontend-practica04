import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { PieComponent } from './pie/pie.component';



@NgModule({
  imports: [
    CommonModule,
    CabeceraComponent,
    CarruselComponent,
    PieComponent
  ],
  exports: [
    CabeceraComponent,
    CarruselComponent,
    PieComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UtilesModule { }
