import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { NotasService } from './services/notas.service';


const listarNotasResolver = () => {
  return inject(NotasService).selecionarTodos();
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'listar',
    component: ListarNotasComponent,
      resolve: { notas: listarNotasResolver } 
  },
  // {
  //   path: 'inserir',
  //   component: InserirNotaComponent,
  // },
  // {
  //   path: 'editar/:id',
  //   component: EditarNotaComponent,
  //   resolve: { nota: formsNotaResolver }
  // },
  // {
  //   path: 'excluir/:id',
  //   component: ExcluirNotaComponent,
  //   resolve: { nota: formsNotaResolver }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasRoutingModule { }
