import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTarefaComponent } from './cadastrar-tarefa.component';

describe('CadastrarTarefaComponent', () => {
  let component: CadastrarTarefaComponent;
  let fixture: ComponentFixture<CadastrarTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarTarefaComponent]
    });
    fixture = TestBed.createComponent(CadastrarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
