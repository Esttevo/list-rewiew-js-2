// Crie um array chamado almoxarifado. Cada elemento do array deve ser um objeto representando um item com as 
// propriedades ferramenta (objeto com nome e categoria) e quantidadeEmEstoque (número).

const almoxarifado = [
   {
        ferramenta: {
            nome: "Chave de Fenda",
            categoria:"Ferramentas não elétricas"
        },
        quantidadeEstoque: 2
    },
     {
        ferramenta: {
            nome: "Chave allen",
            categoria:"Ferramentas não elétricas"
        },
        quantidadeEstoque: 22
    },
    {
        ferramenta: {
            nome: "Furadeira Elétrica",
            categoria:"Ferramentas elétricas"
        },
        quantidadeEstoque: 12
    }
]

console.log(almoxarifado[0].ferramenta.nome);
console.log(almoxarifado[1].quantidadeEstoque);