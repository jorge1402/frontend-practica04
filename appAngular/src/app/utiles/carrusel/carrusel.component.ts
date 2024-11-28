import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  images = [
    {id:0,source:"images/curso.jpg",name:"Curso 1", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum optio laborum placeat commodi eligendi itaque ipsa in quisquam earum cupiditate voluptatibus repellat modi, et incidunt praesentium libero, totam debitis corrupti."},
    {id:1,source:"images/curso2.jpg",name:"Curso 2",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum optio laborum placeat commodi eligendi itaque ipsa in quisquam earum cupiditate voluptatibus repellat modi, et incidunt praesentium libero, totam debitis corrupti."},
    {id:2,source:"images/curso3.jpg",name:"Curso 3",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum optio laborum placeat commodi eligendi itaque ipsa in quisquam earum cupiditate voluptatibus repellat modi, et incidunt praesentium libero, totam debitis corrupti."},
    {id:3,source:"images/cjava_academico.png",name:"Curso 4",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum optio laborum placeat commodi eligendi itaque ipsa in quisquam earum cupiditate voluptatibus repellat modi, et incidunt praesentium libero, totam debitis corrupti."}
  ]

  getClass(index:number){
    if(index==0){
      return "carousel-item active"
    }else{
      return "carousel-item"
    }
  }
}
