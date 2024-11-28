import { Component, OnInit } from '@angular/core';
import { PagosComponent } from "../pagos/pagos.component";
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Alumno } from '../../gestion/alumnos/alumno';
import { Curso } from '../../gestion/cursos/curso';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  showForm:boolean=false;
  alumnos: Alumno[] = [];
  cursos: Curso[] = [];
  matriculas:any[] = [];

  formMatricula:any={}
  
  constructor(private service:DataService){}


  ngOnInit(): void {
    this.getAlumnos();
    this.getCursos(); 
    this.getAllMatriculas()
  }

  getAlumnos(){
    this.alumnos = this.service.getAlumnos();
  }

  getCursos(){
    this.cursos = this.service.getCursos();
  }

  matricular(){
    let alumno:any = this.alumnos.find(alumno=>alumno.id==this.formMatricula.alumno[0]);
    let curso:any = this.cursos.find(curso=>curso.id==this.formMatricula.curso[0]);
    let matricula = {
      id:this.matriculas.length+1,
      nombres:`${alumno.nombres} ${alumno.apellidos}`,
      curso: `${curso.nombre}`,
      fecha: new Date(),
    }
    this.service.setMatricula(matricula);
    Swal.fire({
      title: "Registro exitoso",
      text: "Alumno matriculado exitosamente",
      icon: "success"
    });
    this.reiniciarFormulario();
  }

  getAllMatriculas(){
    this.matriculas = this.service.getMatriculas();
  }

  reiniciarFormulario(){
    this.formMatricula={};
    this.getAllMatriculas();
  }
}
