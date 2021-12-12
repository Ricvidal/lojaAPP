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
      descricao: 'FP10 Máxima performance. Incrivelmente acessível. Quando a inspiração surgir, experimente o mais recente lançamento da renomada série Roland fp, o modelo de entrada FP-10. Este piano digital acessível conta com a sensação autêntica do teclado de 88 teclas PHA-4 Standard, em conjunto com os sons inspiradores dos pianos Roland SuperNATURAL, além de te permitir tocar usando fones de ouvido ou alto-falantes. Com seu design portátil e compacto, o FP-10 é o instrumento ideal para uso em casa, onde você poderá praticar suas técnicas no silêncio do seu quarto ou até tocar para a família e amigos na sala. Além disso, ele possui conectividade Bluetooth e recursos internos poderosos não oferecidos por outros modelos digitais nesta faixa de preço.',
      preco: 4972.14,
      imagem: '/assets/img/piano.jpg',
      estoque: 100,
      promocao: false,
      tipo: 'Instrumento Musical'
    },
    {
      id: 2,
      nome: 'Smart TV LED 75” Samsung Q950TS Qled Ultra HD 8K com Conversor Digital 2 USB 4 HDMI Wi-Fi integrado',
      descricao: 'Um único fio fino e praticamente transparente conecta a QLED 8K à uma central de conexões - o One Connect - ligando a TV à energia e aos demais aparelhos, enquanto o suporte de parede No-Gap2 permite uma instalação rápida e fácil, praticamente sem espaço entre a TV e a parede.',
      preco: 49999.99,
      imagem: '/assets/img/tv.jpg',
      estoque: 100,
      promocao: false,
      tipo: 'Eletrodoméstico'
  },
  {
    id: 3,
    nome: 'Computador All in One Dell Inspiron 5400-M30S LED 23.8 Full HD 11ª Geração Intel Core i7 16GB 512GB ssd Windows',
    descricao: 'Design que vale a pena exibirLeve para casa um desktop All in One de 23.8 polegadas elegante e moderno, projetado para streaming e pesquisa. Apresentando os mais recentes processadores Intel Core da 11ª geração, uma tela InfinityEdge, o Dell Cinema e uma webcam pop-up para maior privacidade. Utilize melhor o espaço com um dispositivo que inclui tudo o que você precisa: computador, monitor e alto-falantes all in one. Além disso, tenha a experiência completa com Teclado e Mouse sem fio Dell KM636 Branco inclusos.',
    preco: 6335.12,
    imagem: '/assets/img/computador.jpg',
    estoque: 100,
    promocao: false,
    tipo: 'Informática'
}];
}

obterProduto(): Produto[]{
  return [...this.produtos];
}
  // slvarCompra(compra: Compra): boolean {

  // }

}
