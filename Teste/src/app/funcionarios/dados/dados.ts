import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  standalone: false,
  templateUrl: './dados.html',
  styleUrl: './dados.css'
})
export class Dados {

    nome = 'Kayque';
    mostrarSalario = true;

    toggleOcultarSalario(){
      this.mostrarSalario = false;
    }

     toggleMostrarSalario(){
      this.mostrarSalario = true;
    }

}
