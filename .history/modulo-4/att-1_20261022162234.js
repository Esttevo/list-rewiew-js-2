// Crie um objeto fabrica contendo a propriedade nome e a propriedade localizacao. A propriedade localizacao deve 
// ser outro objeto contendo cidade, estado e distritoIndustrial. Usando console.log(), imprima: 'A fábrica [nome] está 
// localizada em [cidade] - [estado].'

const fabrica = {
    nome:"Mad Enlatados",
    localizacao: {
        cidade:"Jaraguá do Sul",
        estado: "SC",
        distritoIndustrial:"Zona sul"
    }
} 

console.log(`A ${fabrica["nome"]} está localizada em ${fabrica.localizacao.cidade} - ${fabrica.localizacao.estado}`)