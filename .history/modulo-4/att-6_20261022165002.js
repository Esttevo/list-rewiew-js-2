// Crie um objeto maquina com a propriedade nome e um array de objetos chamado historicoManutencao (onde 
// cada manutenção possui data, tecnico e tipo). Acesse e exiba no console a data e o técnico responsável pela última 
// manutenção realizada. 

const maquina ={
    nome:"Torno CNC",
    historicoManutencao:[
        {
            data:"10/12/2003",
            tecnico:"Jurandir",
            tipo:"Revisão"
        },
        {
            data:"11/12/2008",
            tecnico:"Jurandir",
            tipo:"Revisão"
        },
        {
            data:"17/03/2014",
            tecnico:"Jurandir",
            tipo:"Revisão"
        }
    ]
}
const idLastMaintence = maquina.historicoManutencao.length -1;
console.log(cono)