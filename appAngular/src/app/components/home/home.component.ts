import { Component } from '@angular/core';
import { UtilesModule } from '../../utiles/utiles.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UtilesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
