import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class BienvenidaComponent {
comienzo = true

empezar(){
  this.comienzo = false
}

checker(){
  return this.comienzo
}
}
