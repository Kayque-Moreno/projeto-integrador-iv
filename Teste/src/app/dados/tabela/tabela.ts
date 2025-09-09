import { Component } from '@angular/core';
import { produto } from '../modelo/produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {
  displayedColumns: string[] = ['nome', 'quantidade'];

  dados: produto[] = [
    {nome: 'Arroz Safra Sul', quantidade: 35},
    {nome: 'Skol', quantidade: 100},
    {nome: 'Veja multiuso', quantidade: 30},
    {nome: 'Farinha de trigo', quantidade: 40},
    {nome: 'Suco Tang', quantidade: 10}
  ]
}
