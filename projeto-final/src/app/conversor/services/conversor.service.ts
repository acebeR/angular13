import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  Conversao,ConversaoResponse
}from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {
  private readonly BASE_URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL";

  constructor(
    private http:HttpClient
    ) { }

  converter(conversao: Conversao): Observable<ConversaoResponse>{
    let params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`


    return this.http.get(this.BASE_URL).pipe(
      map((response: any) => response as ConversaoResponse),
      catchError((error: any) => throwError(error))
    );

  }

  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number{
    if(conversaoResponse === undefined){
      return 0;
    }

    return conversaoResponse.rates[conversao.moedaPara];
  }

  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string{
    if(conversaoResponse === undefined){
      return '0';
    }

    return (1/ conversaoResponse.rates[conversao.moedaDe]).toFixed(4);
  }

  dataCotacao( conversaoResponse: ConversaoResponse): string{
    if(conversaoResponse === undefined){
      return '';
    }
    return conversaoResponse.date;
  }
}
