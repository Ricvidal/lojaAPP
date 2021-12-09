import { CarrinhoService } from './../model/carrinho.service';
import { LojaService } from './../model/loja.service';
import { Produto } from './../model/produto';
import { Component, OnInit } from '@angular/core';
import { ItemPedido } from '../model/item-pedido';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  produtos: Produto[];

  constructor(private ls: LojaService, private cs: CarrinhoService) {}

  ngOnInit(): void {
    this.produtos = this.ls.obterProduto();
  }
  comprar(prod: Produto){
    if (prod != undefined) {
      const item: ItemPedido = new ItemPedido (prod, 1);
      this.cs.adicionarItem(item);
      console.log(item);
    }
  }

}
