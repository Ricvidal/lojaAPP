import { Produto } from './produto';
import { ItemPedido } from './item-pedido';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private itensDePedido: ItemPedido[];
  private total = 0;

  constructor() {
    this.itensDePedido = [];
    this.total;
  }

  obterItens(): ItemPedido[] {
    return [...this.itensDePedido];
  }

  adicionarItem(item: ItemPedido): boolean {
    // const id = this.itensDePedido.map(pedidos => pedidos.produto.id)
    // console.log("ID: " + id);
    // const pos = this.itensDePedido.map(pedidos => pedidos.produto.id).indexOf(item.produto.id);
    // console.log("antes do if: " + this.itensDePedido.length);
    if (this.itensDePedido.map(pedidos => pedidos.produto.id).indexOf(item.produto.id) >= 0) {
      item.quantidade++;
      this.totalPedido(item);
      console.log("dentro do if: " + this.itensDePedido.length);
      return false;
    } else {
      this.itensDePedido.push(item);
      item.quantidade++;
      this.totalPedido(item);
      console.log("dentro do else: " + this.itensDePedido.length);
      return true;
    }
  }


  totalPedido(itemPreco: ItemPedido) {
    if (this.itensDePedido.length >= 0) {
      itemPreco.produto.preco.toFixed(2);
      this.total.toFixed(2);
      this.total=this.total+itemPreco.produto.preco;
      return this.total;
    }
    
  }

  removerItem(it: ItemPedido): boolean {
    const pos = this.itensDePedido.indexOf(it);
    if (pos >= 0 && it.quantidade>1) {
      it.quantidade--;
      it.produto.preco.toFixed(2);
      this.total.toFixed(2);

      this.total = this.total - it.produto.preco;
      return false;
    } else{
      this.itensDePedido.splice(pos, 1);
      return true;
    }
   
  }
}
