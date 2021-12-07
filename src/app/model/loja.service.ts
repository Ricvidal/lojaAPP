import { Produto } from './produto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  private produtos: Produto[];


  constructor() {
    this.produtos = [{
      id: 1,
      nome: 'Piano Digital 88 Teclas SuperNatural PHA4 FP10 bk - Roland',
      descricao: 'FP10 Máxima performance. Incrivelmente acessível. Quando a inspiração surgir, experimente o mais recente lançamento da renomada série Roland fp, o modelo de entrada FP-10. Este piano digital acessível conta com a sensação autêntica do teclado de 88 teclas PHA-4 Standard, em conjunto com os sons inspiradores dos pianos Roland SuperNATURAL, além de te permitir tocar usando fones de ouvido ou alto-falantes. Com seu design portátil e compacto, o FP-10 é o instrumento ideal para uso em casa, onde você poderá praticar suas técnicas no silêncio do seu quarto ou até tocar para a família e amigos na sala. Além disso, ele possui conectividade Bluetooth e recursos internos poderosos não oferecidos por outros modelos digitais nesta faixa de preço. O FP-10 ainda pode ser usado como um segundo piano para músicos mais experientes. * A função Bluetooth pode não estar disponível, dependendo do país onde você adquire o produto.',
      preco: 4972.14,
      imagem: '/assets/img/piano.jpg',
      estoque: 100,
      promocao: false,
      tipo: 'Instrumento Musical'
    }];
  }

  obterProduto(): Produto[]{
    return [...this.produtos];
  }

  // slvarCompra(compra: Compra): boolean {

  // }

}
