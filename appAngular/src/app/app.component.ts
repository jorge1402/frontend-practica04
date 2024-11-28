import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilesModule } from './utiles/utiles.module';
import { HomeComponent } from './components/home/home.component';
import { GestionModule } from './gestion/gestion.module';
import { MatriculaModule } from './matricula/matricula.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UtilesModule,
    GestionModule,
    MatriculaModule,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'appPractica3';
}
