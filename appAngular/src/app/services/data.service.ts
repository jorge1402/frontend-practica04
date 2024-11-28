import { Injectable } from '@angular/core';
import { Alumno } from '../gestion/alumnos/alumno';
import { Curso } from '../gestion/cursos/curso';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  alumnos: Alumno[] = [
    new Alumno(
      1,
      'Jorge',
      'Vega',
      '15/10/1990',
      'Av. principal 1234',
      'jvega@gmail.com',
      '963258741'
    ),
    new Alumno(
      2,
      'Juan',
      'Perez',
      '20/02/2000',
      'Jr. la union 9658',
      'jperez@gmail.com',
      '947863214'
    ),
    new Alumno(
      3,
      'Martin',
      'Peralta',
      '19/01/1998',
      'Santa Rosa 358',
      'mperalta@gmail.com',
      '946321579'
    ),
    new Alumno(
      4,
      'Luis',
      'Valencia',
      '11/12/1999',
      'Los girasoles 9658',
      'lvalencia@gmail.com',
      '945632178'
    ),
    new Alumno(
      5,
      'Alexander',
      'Pekerman',
      '20/05/1991',
      'Av. universitaria 569',
      'apkm@gmail.com',
      '965874123'
    ),
    new Alumno(
      6,
      'Andres',
      'Zavaleta',
      '02/02/1995',
      'Los geranios mz E1 Lt 19',
      'azavaleta@gmail.com',
      '963578412'
    ),
    new Alumno(
      7,
      'Cristopher',
      'Campos',
      '15/10/1990',
      'Ramon Catilla 569',
      'ccampos@gmail.com',
      '456873216'
    ),
    new Alumno(
      8,
      'Leonel',
      'Espinoza',
      '05/11/2001',
      'Urb. Santa Isabel 1234',
      'lespinoza@gmail.com',
      '9645789648'
    ),
    new Alumno(
      9,
      'Cesar',
      'Zapata',
      '15/10/1990',
      'Calle San Martin 569',
      'czapata@gmail.com',
      '946871123'
    ),
    new Alumno(
      10,
      'Patricia',
      'Alvarez',
      '15/10/1990',
      'Jose Olaya 569',
      'palavarez@gmail.com',
      '963587493'
    ),
    new Alumno(
      11,
      'Luisa',
      'Peña',
      '15/10/1990',
      'Av. Miguel Grau 596',
      'lpena@gmail.com',
      '9785463218'
    ),
    new Alumno(
      12,
      'Karen',
      'Sanchez',
      '15/10/1990',
      'Av. Lambayeque 569',
      'kzanchez@gmail.com',
      '9632587456'
    ),
    new Alumno(
      13,
      'Bruno',
      'Andrade',
      '15/10/1990',
      'Urb. Santa Ana Mz. E3 Lt.5',
      'bandrade@gmail.com',
      '986574123'
    ),
    new Alumno(
      14,
      'Iris',
      'Nuñez',
      '10/12/1992',
      'Av. La primavera 599',
      'inunez@gmail.com',
      '968524317'
    ),
    new Alumno(
      15,
      'Maria',
      'Guevara',
      '03/05/1998',
      'Av. guardia civil 655',
      'mguevara@gmail.com',
      '932568746'
    ),
  ];

  cursos: Curso[] = [
    new Curso(1, 'Java 1', 18, 4, 'sofware'),
    new Curso(2, 'Python para principiantes', 18, 5, 'sofware'),
    new Curso(3, 'Javascript', 20, 4, 'sofware'),
    new Curso(4, 'Psicologia', 10, 4, 'otros'),
    new Curso(5, 'Reposteria', 10, 1, 'otros'),
    new Curso(6, 'Computación básica', 15, 2, 'software'),
    new Curso(7, 'Computación intermedia', 15, 3, 'software'),
    new Curso(8, 'Computación avanzada', 15, 4, 'software'),
    new Curso(9, 'Aplicaciones móviles', 24, 5, 'software'),
    new Curso(10, 'Flutter', 24, 5, 'software'),
    new Curso(11, 'React Native', 24, 5, 'software'),
    new Curso(12, 'React para principiantes', 18, 4, 'software'),
    new Curso(13, 'React avanzado', 18, 4, 'software'),
    new Curso(14, 'Angular', 20, 4, 'software'),
    new Curso(15, 'Spring boot', 24, 5, 'software'),
  ];

  matriculas:any[]=[];

  constructor() {}

  getAlumnos() {
    return this.alumnos;
  }

  addAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: Curso) {
    this.cursos.push(curso);
  }


  getMatriculas(){
    return this.matriculas;
  }

  setMatricula(matricula:any){
    this.matriculas.push(matricula);
  }
}
