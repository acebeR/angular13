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
  private readonly BASE_URL = "http://api.fixer.io/latest";
  constructor(
    private http:HttpClient
    ) { }

  converter(conversao: Conversao): Observable<ConversaoResponse>{
    //converter(conversao: Conversao): any{
    let params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`

    //return this.http.get(this.BASE_URL + params);

    return this.http.get(this.BASE_URL + params).pipe(
      map((response: any) => response as ConversaoResponse),
      catchError((error: any) => throwError(error))
    );

    //return this.http.get(this.BASE_URL + params);
  }

  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number{
    if(conversaoResponse === undefined){
      return 0;
    }
    //return 1;

    return conversaoResponse.rates[conversao.moedaPara];
  }

  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string{
    if(conversaoResponse === undefined){
      return '0';
    }
    //return '1';
    return (1/ conversaoResponse.rates[conversao.moedaDe]).toFixed(4);
  }
}
