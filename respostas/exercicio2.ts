enum Trabalho{
    Atriz,
    Padeiro
}

interface IPessoas{
    nome: string,
    idade: string | number,
    profissao: Trabalho
}



let pessoa1: IPessoas = {
    nome: "Maria",
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: IPessoas = {
    nome: "roberto",
    idade: 19,
    profissao: Trabalho.Padeiro
}


let pessoa3: IPessoas = {
    nome: "laura",
    idade: "32",
    profissao: Trabalho.Atriz
};

let pessoa4: IPessoas = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}