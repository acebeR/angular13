import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components/calculadora.component';
import { CalculadoraService } from './services/calculadora.service';


@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ CalculadoraService],
  exports: [ CalculadoraComponent ]
})
export class CalculadoraModule { }
