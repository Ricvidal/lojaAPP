import { Produto } from './../model/produto';
import { ItemPedido } from './../model/item-pedido';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../model/carrinho.service';
import { LojaService } from '../model/loja.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  itensDePedido: ItemPedido[];

  constructor(private cs: CarrinhoService) {}

  ngOnInit(): void {
    this.itensDePedido = this.cs.obterItens();
  }

  diminuirQuantidade(itm: ItemPedido){
    // if(itm.quantidade>0) {
    //   itm.quantidade--;
    // } else {
        this.cs.removerItem(itm);
    // }
    
  }
  aumentarQuantidade(itm: ItemPedido){
    // itm.quantidade++;
    this.cs.adicionarItem(itm);
 }


}
