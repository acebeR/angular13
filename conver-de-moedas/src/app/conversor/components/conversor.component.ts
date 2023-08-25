import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Moeda,Conversao, ConversaoResponse} from '../models';
import { MoedaService, ConversorService } from '../services';
@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  public possuiErro = false;
  public conversao: Conversao = new Conversao('','',0);
  public moedas: Moeda[] = [{"sigla":"AUD", "descricao": "Dolar Australiano"},
  {"sigla":"BRL", "descricao": "Real Brasileiro"},
  {"sigla":"EUR", "descricao": "Euro"}];
  private conversaoResponse!: ConversaoResponse;

  @ViewChild('conversaoForm') conversaoForm!: NgForm;
  constructor(    private moedaService: MoedaService, private conversorService: ConversorService) {}
  ngOnInit(): void {
    this.conversao = new Conversao('USD','BRL',0);
    this.possuiErro = false;
  }

  init(): void{
    this.conversao = new Conversao('USD','BRL',0);
    this.possuiErro = false;
  }

  converter(): void{
    if(this.conversaoForm.form.valid){
      alert('Convertendo: ' + JSON.stringify(this.conversao));
    }
  }
}