const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const answer =  [...str].map(char => char.match((/[A-Z]/g))? char.toLowerCase():char.toUpperCase()).join("");
    console.log(answer)
    
    
});