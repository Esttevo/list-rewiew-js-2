let eventCodes = [101, 105, 102, 105, 101, 103];
let uniqueCode = 101;

let matchCodes = eventCodes.filter(function(value){
        return value === uniqueCode;
});

console.log(matchCodes.length);

function funcao(list, codeUnique) {
    let x = 0;

    list.forEach(element => {
        if(element === codeUnique) {
            x++;
        };
    });
    return x;
}

console.log(funcao([10,20,30,101,101,101], 101));