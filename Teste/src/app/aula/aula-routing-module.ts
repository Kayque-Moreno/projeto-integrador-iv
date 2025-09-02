import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Testando } from './testando/testando';

const routes: Routes = [
  {path:'testando', component: Testando}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulaRoutingModule { }
