import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  mostrarLista = true;
  toggleMensagem(){
    this.mostrarLista = !this.mostrarLista;
  }

  alunos= [
    {id: '10', nome: 'Alberto', status: true},
    {id: '11', nome: 'Bárbara', status: false},
    {id: '12', nome: 'Carol', status: true},
    {id: '13', nome: 'Daniel', status: false},
    {id: '14', nome: 'Eduardo', status: true}
  ];

  fontSize : number =  18;

  aumentarFonte(){
    this.fontSize += 2;
  }

  diminuirFonte(){
    this.fontSize -= 2;
  }
}
