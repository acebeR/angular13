import { Injectable } from '@angular/core';
import { Moeda } from '../models';
@Injectable({
  providedIn: 'root'
})
export class MoedaService {
  private moedas: Moeda[] | undefined;
  constructor() { }

  private moedasObj = [
    {"sigla":"AUD", "descricao": "Dolar Australiano"},
    {"sigla":"BRL", "descricao": "Real Brasileiro"},
    {"sigla":"EUR", "descricao": "Euro"},
  ]

  listarTodas() : Moeda[]{
    if(this.moedas){
      return this.moedas;
    }

    this.moedas = [];

    for(let moedaObj of this.moedasObj){
      let moeda: Moeda = new Moeda();
      Object.assign(moeda,moedaObj);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }
}
