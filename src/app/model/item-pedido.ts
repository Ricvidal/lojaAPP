import { Produto } from "./produto";

export class ItemPedido {
    produto: Produto;
    quantidade: number;

    constructor(prod: Produto, quant: number){
        this.produto = prod;
        this.quantidade = quant;
    }
}