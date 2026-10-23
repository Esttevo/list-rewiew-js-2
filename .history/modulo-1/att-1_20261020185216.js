const prompt = require("prompt-sync")();

let listTemp = [100, 250, 180, 200, 140]

function avgTemperature (listTemp){
    let totalTemps = listTemp.reduce((total, temp) => {
       return total + total;
    }, 0)
    return totalTemps / listTemp.length;
}

console.log(avgTemperature(listTemp));