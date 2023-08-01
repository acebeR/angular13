import { Routes} from '@angular/router';

import { ListarTarefaComponent } from './listar';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo:'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component:ListarTarefaComponent
  }
];
