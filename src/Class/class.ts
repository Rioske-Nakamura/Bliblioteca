import type { Ilivro } from "../interface/interface";

export class Livro implements Ilivro {
  id_livro: number;
  titulo: string;
  id_pessoa: number;
  descricao: string;
  preco: number;
  ano: number;
  id_editora: number;
  id_genero: number;
  estoque: number;
  qnt_livre: number;
  qnt_alugado: number;
  id_localizacao: number;
  condicao: string;

  constructor(
    id_livro: number,
    titulo: string,
    id_pessoa: number,
    descricao: string,
    preco: number,
    ano: number,
    id_editora: number,
    id_genero: number,
    estoque: number,
    id_localizacao: number,
    condicao: string
  ) {
    this.id_livro = id_livro;
    this.titulo = titulo;
    this.id_pessoa = id_pessoa;
    this.descricao = descricao;
    this.preco = preco;
    this.ano = ano;
    this.id_editora = id_editora;
    this.id_genero = id_genero;
    this.estoque = estoque;
    this.qnt_livre = estoque;
    this.qnt_alugado = 0;
    this.id_localizacao = id_localizacao;
    this.condicao = condicao;
  }

  alugar(): void {
    if (this.qnt_livre <= 0) {
      console.log(`O livro "${this.titulo}" não está disponível.`);
      return;
    }

    this.qnt_livre--;
    this.qnt_alugado++;

    console.log(`Livro "${this.titulo}" alugado com sucesso!`);
    console.log(`Quantidade disponível: ${this.qnt_livre}`);
  }

  devolver(): void {
    if (this.qnt_alugado <= 0) {
      console.log(`Não existem exemplares alugados de "${this.titulo}".`);
      return;
    }

    this.qnt_alugado--;
    this.qnt_livre++;

    console.log(`Livro "${this.titulo}" devolvido com sucesso!`);
    console.log(`Quantidade disponível: ${this.qnt_livre}`);
  }

  exibir(): void {
    console.log("========== LIVRO ==========");
    console.log(`ID: ${this.id_livro}`);
    console.log(`Título: ${this.titulo}`);
    console.log(`Descrição: ${this.descricao}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`Estoque: ${this.estoque}`);
    console.log(`Disponíveis: ${this.qnt_livre}`);
    console.log(`Alugados: ${this.qnt_alugado}`);
    console.log(`Condição: ${this.condicao}`);
    console.log("===========================");
  }
}