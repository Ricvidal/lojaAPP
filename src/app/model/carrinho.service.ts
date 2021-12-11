import { Produto } from './produto';
import { ItemPedido } from './item-pedido';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private itensDePedido: ItemPedido[];
  private total=0; 

  constructor() { 
    this.itensDePedido = [];
    this.total;
  }

  obterItens(): ItemPedido[]{
    return [...this.itensDePedido];
  }

  adicionarItem(item: ItemPedido): boolean{
    this.itensDePedido.push(item);
    return true;
  }

  totalPedido(){
    this.total = this.itensDePedido.map(pedidos => pedidos.produto.preco).reduce((soma, prod)=> soma + prod);
    return this.total.toFixed(2);
  }
}
