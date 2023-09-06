import { Component, OnInit, ViewChild } from '@angular/core';
import { TarefaService,Tarefa } from '../shared';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit{

  @ViewChild('formTarefa')
  formTarefa!: NgForm;
  tarefa: Tarefa = new Tarefa();

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  cadastrar(): void{
    if(this.formTarefa.form.valid){
      console.log("entrou aqui");
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
