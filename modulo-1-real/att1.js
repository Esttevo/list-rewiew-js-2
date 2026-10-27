const prompt = require("prompt-sync")();

let listTemp = [100, 200, 200, 200, 200]

function avgTemperature (listTemp){
    let totalTemps = listTemp.reduce((total, temp) => {
       return total + temp;
    }, 0)
    return totalTemps / listTemp.length;
}

console.log(avgTemperature(listTemp));