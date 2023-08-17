import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit{

  constructor(private jogoDaVelhaService:JogoDaVelhaService){}
  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  get showInicio(): boolean{
    return this.jogoDaVelhaService.showInicio;
  }

  // get showTabuleiro(): boolean{
  //   return this.jogoDaVelhaService.showTabuleiro;
  // }

  get showFinal(): boolean{
    return this.jogoDaVelhaService.showFinal;
  }
}
