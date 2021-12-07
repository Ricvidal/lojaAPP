export class Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    estoque: number;
    promocao: boolean;
    tipo: string;

    constructor(id: number, nome: string, desc: string, preco: number, img: string, estoque: number, tipo:string){
        this.id = id;
        this.nome = nome;
        this.descricao = desc;
        this.preco = preco;
        this.imagem = img;
        this.estoque = estoque;
        this.tipo = tipo;
    }
}