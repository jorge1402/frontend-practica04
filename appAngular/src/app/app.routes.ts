import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './gestion/cursos/cursos.component';
import { AlumnosComponent } from './gestion/alumnos/alumnos.component';
import { FormularioComponent } from './matricula/formulario/formulario.component';
import { PagosComponent } from './matricula/pagos/pagos.component';

export const routes: Routes = [
    {path:'', redirectTo:'/inicio', pathMatch:'full'},
    {path:'inicio',component:HomeComponent},
    {path:'cursos',component:CursosComponent},
    {path:'alumnos',component:AlumnosComponent},
    {path:'matricula',component:FormularioComponent},
    {path:'pagos',component:PagosComponent},
];
