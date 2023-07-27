import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit{

  private numero1 : string = '0';
  private numero2: string = '0';
  private resultado:number = 0;
  private operacao: string = '';

  constructor(private calculadoraService:CalculadoraService){}

  ngOnInit(): void {
    this.limpar();
  }


  limpar(): void {
    this.numero1 = '0';
    this.numero2 = '0';
    this.resultado = 0;
    this.operacao = '';
  }

  adicionarNumero(numero:string): void {
    if(this.operacao === ''){
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    }else{
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    if(numAtual === '0'){
      numAtual = '';
    }
    if(numConcat === '.' && numAtual === ''){
      return '0.';
    }
    if(numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    if(this.operacao === ''){
      this.operacao = operacao;
      return;
    }

    if(this.numero2 !== null){
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),parseFloat(this.numero2),this.operacao);
        this.operacao = operacao;
        this.numero1 = this.resultado.toString();
        this.resultado = 0;
        this.numero2 = '0';
    }
  }

  calcular(): void {
    if(this.numero2 === '0'){
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),parseFloat(this.numero2),this.operacao);
  }

  get display(): string{
    if(this.resultado !== 0){
      return this.resultado.toString();
    }
    if(this.numero2 !== '0'){
      return this.numero2;
    }
    return this.numero1;
  }
}
