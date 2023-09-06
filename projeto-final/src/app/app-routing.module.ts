import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora';
import { DashboardComponent } from './dashboard';
import { ConversorComponent } from './conversor';
import { EditarTarefasComponent } from './tarefas';
import { JogoDaVelhaComponent } from './jogo-da-velha';

export const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'calculadora',
    component: CalculadoraComponent
  },
  {
    path:'conversor',
    component: ConversorComponent
  },  {
    path:'gerenciador',
    component: EditarTarefasComponent
  },  {
    path:'jogo',
    component: JogoDaVelhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
