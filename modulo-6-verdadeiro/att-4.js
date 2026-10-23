// Exercício 4: Relatório de Tempo de Operação com `this`
// Crie um objeto gerador com as propriedades id e anoInstalacao. Adicione um método calcularAnosEmUso que
// calcule o tempo de funcionamento (2026 - anoInstalacao) e retorne a frase: 'O gerador [id] está em operação há
// [anos] anos.' utilizando a palavra-chave this.

const gerador = {
    id:1,
    anoInstalacao:2004
}

gerador.calcularAnosEmUso = function() {
    const anos = 2026- this.anoInstalacao;

    return anos;
}

console.log(`o gerador ${gerador["id"]} está operando fazem ${gerador.calcularAnosEmUso()} anos`);