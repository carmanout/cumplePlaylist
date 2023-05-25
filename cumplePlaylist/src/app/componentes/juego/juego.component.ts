import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import * as data from '../../../assets/canciones.json';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit, AfterViewInit {
  public jsonData: any = Object.values(data);
  public nombres!: string[];
  @ViewChildren("preguntas") preguntas!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.nombres = [];

    let counter = 0;
    while (this.jsonData[counter]?.nombres !== undefined) {
      const nombresCancion = this.jsonData[counter].nombres;

      for (let i = 0; i < nombresCancion.length; i++) {
        const nombre = nombresCancion[i];

        if (!this.nombres.includes(nombre) && nombresCancion.length === 1) {
          this.nombres.push(nombre);
        }
      }

      counter++;
    }

  }

  check(nombre: string, comprobacion: any) {

    if (comprobacion.includes(nombre)) {
      alert("¡Acierto!");
    }
  }

  ngAfterViewInit(): void {
    var primero = this.preguntas.toArray()[0]
    if(primero){
      console.log(primero)
      primero.nativeElement.style.display="block"
    }
  }
}
