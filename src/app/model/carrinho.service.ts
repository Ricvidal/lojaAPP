import { ItemPedido } from './item-pedido';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private itensDePedido: ItemPedido[]; 

  constructor() { 
    this.itensDePedido = [];
  }
  obterItem(): ItemPedido[]{
    return [...this.itensDePedido];
  }

  adicionarItem(item: ItemPedido): boolean{
    this.itensDePedido.push(item);
    return true;
  }
}
