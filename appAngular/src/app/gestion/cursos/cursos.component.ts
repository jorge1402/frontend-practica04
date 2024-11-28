import { Component } from '@angular/core';
import { Curso } from './curso';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  showForm:boolean = false;
  curso:Curso={
    id:0,
    nombre:"",
    creditos:0,
    horas:0,
    categoria:""
  };
  cursos:Curso[]=[];

  constructor(private service:DataService){}

  ngOnInit(): void {
    this.getCursos();
  }

  nuevoCurso(){
    this.showForm = true;
  }

  agregarCurso(){
    let curso = this.curso;
    curso.id = this.cursos.length+1;
    this.service.addCurso(curso);
    this.reiniciarFormulario();
    Swal.fire({
      title: "Registro exitoso",
      text: "Curso registrado exitosamente",
      icon: "success"
    });
    this.getCursos();
  }

  reiniciarFormulario(){
    this.curso={
      id:0,
      nombre:"",
      creditos:0,
      horas:0,
      categoria:""
    }
    this.showForm = false;
  }

  cancelar(){
    this.showForm = false;
  }

  getCursos(){
    this.cursos = this.service.getCursos();
  }
}
