import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), JogoDaVelhaModule],
  exports: [RouterModule,JogoDaVelhaModule]
})
export class AppRoutingModule { }
