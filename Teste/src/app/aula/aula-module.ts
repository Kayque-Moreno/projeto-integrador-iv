import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulaRoutingModule } from './aula-routing-module';
import { Testando } from './testando/testando';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    Testando
  ],
  imports: [
    CommonModule,
    AulaRoutingModule,
    MatToolbarModule
  ]
})
export class AulaModule { }
