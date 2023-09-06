import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { CalculadoraComponent } from './calculadora';
import { ConversorComponent } from './conversor';
import { JogoDaVelhaComponent } from './jogo-da-velha';
import { CadastrarTarefaComponent, EditarTarefasComponent, ListarTarefaComponent } from './tarefas';



export const routes: Routes = [
  {
    path:'',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'calculadora',
    component: CalculadoraComponent
  },
  // {
  //   path:'conversor',
  //   component: ConversorComponent
  // },
  {
    path:'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path:'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path:'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  },
  {
    path:'tarefas/editar/:id',
    component: EditarTarefasComponent
  },
  {
    path:'jogo-da-velha',
    component: JogoDaVelhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
