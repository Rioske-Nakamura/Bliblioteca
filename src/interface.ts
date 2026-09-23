export interface Ilivro {
  id_livro: number;
  titulo: string;
  id_pessoa: number;
  descricao: string;
  preco: number;
  ano: Date;
  id_editora: number;
  id_genero: number;
  estoque: number;
  qnt_livre: number;
  qnt_alugado: number;
  id_localizacao: number;
  condicao: string;
}

export interface Ieditora {
  id_editora: number;
  nome: string;
  cnpj: string;
}

export interface Igenero {
  id_genero: number;
  nome: string;
}

export interface Ilocalizacao {
  id_localizacao: number;
  nome: string;
  local: string;
  pratileira: string;
}

export interface Ialuguel {
  id_aluguel: number;
  id_cliente: number;
  id_livro: number;
  status: string;
  vencimento: Date;
  inicio: Date;
  emiteMensagem(): void;
}

export interface Iretorna {
  id_retorna: number;
  retorno: Date;
  id_cliente: number;
  id_livro: number;
  id_aluguel: number;
}

export interface IPessoa {
  id_pessoa: number;
  nome: string;
  nascimento: Date;
  email: string;
  tipo: string;
}

export interface IPagamento {
  valor: number;
  pagamento: string;
}