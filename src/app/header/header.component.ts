import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

// const enterTransition = transition(':enter', [
//   state('closed', style({transform: 'translateX(120%'})),
//   state('open', style({transform: 'translateX(0%)'})),
//   transition('closed <=> open', [animate('1s ease-in')])
// ])

// const menuTransition = trigger('openClose', [enterTransition])

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
  animations: [
    trigger('openClose', [
      state('closed', style({transform: 'translateX(120%)'})),
      state('open', style({transform: 'translateX(0)'})),
      transition('closed <=> open', [animate('0.4s ease-in')])
    ])
  ]
})
export class HeaderComponent {
  blnOpen = false

  toggleBurger(){
    this.blnOpen = !this.blnOpen
  }
}
