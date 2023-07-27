import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });

  });

  it('Soma',
    inject([CalculadoraService],(service: CalculadoraService) => {
    let soma = service.calcular(1,4,CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }) );

});
