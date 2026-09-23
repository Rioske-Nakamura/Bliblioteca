interface Ilivro{

    id_livro:number
    titulo:string
    id_pessoa: number
    descricao:string
    preco:number
    ano:Date
    id_editora: number
    id_genero:number
    estoque:number
    qnt_livre:number
    qnt_alugado:number
    id_localizacao:number
    condicao: string
}




interface Ieditora{
    id_editora:number
    nome:string
    cnpj:string
}


interface Igenero{
    id_genero:number
    nome:string
}

interface Ilocalizacao{
    id_localizacao:number
    nome:string
    local:string
    pratileira:string

}

interface Ialuguel{
    id_aluguel:number
    id_cliente:number
    id_livro:number
    status:string
    vencimento:Date
    inicio:Date 
    emiteMensagem():void
}

interface Iretorna {
    id_retorna:number
    retorno:Date
    id_cliente:number
    id_livro:number
    id_aluguel:number
}

interface Pessoa {
    id_pessoa:number
    nome:string
    nascimento: Date
    email:string
    tipo:string
}

interface iPagemnto{
    valor:number 
    pagemento:string
}

