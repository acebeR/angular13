import { Component, OnInit, ViewChild } from '@angular/core';
import { TarefaService,Tarefa } from '../shared';
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent {
  @ViewChild('formTarefa')
  formTarefa!: NgForm;
  tarefa: Tarefa = new Tarefa();

  id = this.route.snapshot.params['id'];

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.tarefa = this.tarefaService.buscarPorId(Number(this.id));
  }

  atualizar(): void{
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }
}
