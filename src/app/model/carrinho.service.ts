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
    const id = this.itensDePedido.map(pedidos => pedidos.produto.id)
    console.log("ID: "+id);
    const pos = id.indexOf(item.produto.id);
    console.log("antes do if: "+this.itensDePedido.length);
    if (pos >= 0) {
      item.quantidade+=1;
      this.totalPedido();
      console.log("dentro do if: "+this.itensDePedido.length);
      return false;
    } else
    this.itensDePedido.push(item);
    this.totalPedido();
    console.log("dentro do else: "+this.itensDePedido.length);
    return true;
  }
  

  totalPedido() {
    this.total = this.itensDePedido.map(pedidos => pedidos.produto.preco).reduce((soma, prod) => soma + prod);
    // const vl = this.itensDePedido.map(pedidos => pedidos.produto.preco);
    // const qtd = this.itensDePedido.map(pedidos => pedidos.quantidade);

    // this.total = vl*qtd;
    return this.total.toFixed(2);
  }

  removerItem(it: ItemPedido): boolean {
    const pos = this.itensDePedido.indexOf(it);
    if (pos >= 0) {
      this.itensDePedido.splice(pos, 1);
      return true;
    }
    return false;
  }
}
