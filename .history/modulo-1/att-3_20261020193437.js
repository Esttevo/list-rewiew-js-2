let eventCodes = [101, 105, 102, 105, 101, 103];
let uniqueCode = 101;

let matchCodes = eventCodes.filter(function(value){
        return value === uniqueCode;
});

console.log(matchCodes.length);

functiofuncao