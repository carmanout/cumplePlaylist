import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { JuegoComponent } from './componentes/juego/juego.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    JuegoComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
