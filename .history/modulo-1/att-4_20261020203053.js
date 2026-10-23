let batchTotal = 10;
let list = [];

function order(value, listTotal){
    for(let i = 0; i <= value; i++){
        listTotal.push(i);
    }
}

order(batchTotal, list);
console.log()
