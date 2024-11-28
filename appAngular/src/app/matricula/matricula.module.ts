import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { PagosComponent } from './pagos/pagos.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormularioComponent,
    PagosComponent
  ],
  exports:[
    FormularioComponent,
    PagosComponent
  ]
})
export class MatriculaModule { }
