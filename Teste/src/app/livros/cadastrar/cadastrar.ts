import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {
  nome = 'Kayque';

  caminhoImagem = 'https://angular.io/assets/images/logos/angular/angular.svg';

  dizerOi(){
    this.nome = "Kayque! Aproveite todos os serviços de nossa página!";
  }
}
