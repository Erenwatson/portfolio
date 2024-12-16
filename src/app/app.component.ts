import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodySectionComponent } from './body-section/body-section.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BodySectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})

export class AppComponent {
  title = 'Eren.';
}


