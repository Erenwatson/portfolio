import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-body-section',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './body-section.component.html',
  styleUrl: './body-section.component.sass'
})
export class BodySectionComponent {

}
