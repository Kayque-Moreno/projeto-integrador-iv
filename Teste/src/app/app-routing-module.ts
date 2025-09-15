import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'livros',
  loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
  },

  {
  path: 'contador',
  loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule)
  },

  {
    path: 'estrutura',
  loadChildren: () => import('./estrutura/estrutura-module').then(m => m.EstruturaModule)
  },

  {
    path: 'produtos',
  loadChildren: () => import('./produtos/produtos-module').then(m => m.ProdutosModule)
  },

  {
  path: 'shared-module',
  loadChildren: () => import('./shared-module/shared-module-module').then(m => m.SharedModuleModule)
  },

  {
  path: 'produtos-module',
  loadChildren: () => import('./produtos-module/produtos-module-module').then(m => m.ProdutosModuleModule)
  },

  {
  path: 'aula',
  loadChildren: () => import('./aula/aula-module').then(m => m.AulaModule)
  },

  {
  path: 'dados',
  loadChildren: () => import('./dados/dados-module').then(m => m.DadosModule)
  },

  {
  path: 'funcionarios',
  loadChildren: () => import('./funcionarios/funcionarios-module').then(m => m.FuncionariosModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
