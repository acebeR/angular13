import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ConversorComponent } from './components/conversor.component';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';


@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent
  ],
  imports: [
    CommonModule,
    //HttpModule,
    FormsModule
  ],
  exports: [ConversorComponent],
  providers: [MoedaService,ConversorService]

})
export class ConversorModule { }
