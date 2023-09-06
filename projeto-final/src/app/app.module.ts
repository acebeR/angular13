import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard';
import { CalculadoraModule } from './calculadora';
import { JogoDaVelhaModule } from './jogo-da-velha';
import { TarefasModule } from './tarefas';
import { ConversorModule } from './conversor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    JogoDaVelhaModule,
    TarefasModule,
    ConversorModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
