let eventCodes = [101, 105, 102, 105, 101, 103];
let uniqueCode = 101;

let matchCodes = eventCodes.(function(uniqueCode){
        return eventCodes === uniqueCode;
});

console.log(matchCodes);


