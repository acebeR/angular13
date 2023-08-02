import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';
@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit{
  tarefas: Tarefa[] = this.listarTodos();
  constructor(private tarefaService:TarefaService){}

  ngOnInit(): void {
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover($event: any,tarefa:Tarefa): void{
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa: ' + tarefa.nome + '?')){
      this.tarefaService.remover(tarefa.id === undefined? 0: tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }
  alterarStatus(tarefa:Tarefa): void{
    if(confirm('Deseja alterar a tarefa: ' + tarefa.nome + '?')){
      this.tarefaService.alterarStatus(tarefa.id === undefined? 0: tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}
