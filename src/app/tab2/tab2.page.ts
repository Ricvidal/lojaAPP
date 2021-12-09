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
    this.itensDePedido = this.cs.obterItem();
  }
}
