import { Directive, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR,ControlValueAccessor } from '@angular/forms'
@Directive({
  selector: '[numero]',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NumeroDirective,multi: true }]
})
export class NumeroDirective implements ControlValueAccessor{
  onTouches: any;
  OnChange: any;
  constructor( private el: ElementRef) { }
  @HostListener('keyup',['$event'])
  onKeyUp($event: any){
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g,'');

    if(posDecimais > 0){
      valor = valor.substr(0,posDecimais) + '.' + valor.substr(posDecimais);
    }

    $event.target.value = valor;
    this.OnChange(valor);
  }
}
