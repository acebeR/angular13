import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
