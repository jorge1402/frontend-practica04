import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css',
})
export class AlumnosComponent implements OnInit{
  showForm: boolean = false;
  alumno: Alumno = {
    id: 0,
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    direccion: '',
    correo: '',
    telefono: '',
  };
  alumnos: Alumno[] = [];

  constructor(private service:DataService){}

  ngOnInit(): void {
    this.getAlumnos();
  }

  nuevoAlumno() {
    this.showForm = true;
  }

  agregarAlumno() {
    let alumno = this.alumno;
    alumno.id = this.alumnos.length + 1;
    this.service.addAlumno(alumno);
    this.reiniciarFormulario();
    Swal.fire({
      title: "Registro exitoso",
      text: "Alumno registrado exitosamente",
      icon: "success"
    });
    this.getAlumnos();
  }

  reiniciarFormulario() {
    this.alumno = {
      id: 0,
      nombres: '',
      apellidos: '',
      fechaNacimiento: '',
      direccion: '',
      correo: '',
      telefono: '',
    };
    this.showForm=false;
  }

  cancelar() {
    this.showForm = false;
  }

  getAlumnos(){
    this.alumnos = this.service.getAlumnos();
  }
}
