import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  menus = [
    {route:'/inicio', name:'Inicio'},
    {route:'/alumnos', name:'Alumnos'},
    {route:'/cursos', name:'Cursos'},
    {route:'/matricula', name:'Matriculas'},
    {route:'/pagos', name:'Pagos'},
  ]

}
