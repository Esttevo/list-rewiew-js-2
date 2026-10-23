
function filterLot(list, maxSize) {
    return list.filter(value => value > maxSize)
}

const listDiameter = [10,10,30,40,50,60,60];
const listDiameterDouble = [10.12, 123.42, 123, 40,23];

const maxValue = 30;

console.log(filterLot(listDiameter, maxValue));

const 