import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
  listaProdutos = [
    {nome: 'Notebook', valor: 3500, estoque: 5},
    {nome: 'Teclado', valor: 150, estoque: 0},
    {nome: 'Monitor', valor: 1500, estoque: 3}
  ];

  aumentarValor(){
    this.listaProdutos.forEach(produto => {
      produto.valor *= 1.10;
    })
  }

  diminuirValor(){
    this.listaProdutos.forEach(produto =>{
      produto.valor *= 0.90;
    })
  }
}
