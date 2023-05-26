import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import * as data from '../../../assets/canciones.json';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class JuegoComponent implements OnInit {
  public jsonData: any = Object.values(data);
  public nombres!: string[];
  @ViewChildren("preguntas") preguntas!: QueryList<ElementRef>;
  public completa = false
  public correcta = false
  public puntuacion = 0
  public terminado = false

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

    if(this.completa){
      return
    }else{

      if (comprobacion.includes(nombre)) {
        this.correcta = true
        this.puntuacion++
      }else{
        this.correcta = false
      }
      this.completa=true
    }
  }

  public preguntaActual: number = 0;


  next(){
    this.completa=false
    this.preguntaActual++;
    console.log(this.preguntaActual+";"+this.jsonData.length)
    if(this.preguntaActual==this.jsonData.length-2){
      this.terminado = true
    }
  }

  porcentajePuntuacion(){

    var resultado = Math.trunc(this.puntuacion*100/41)

    return resultado
  }
}
