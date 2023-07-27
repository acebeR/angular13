import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';
import { CalculadoraService } from './calculadora/services/calculadora.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculadoraModule,
    CalculadoraService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
