const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const word = stdin[0]

const alphabetCountMap = new Map()

for (const char of word){
    const capital = char.toUpperCase()
    const acc = alphabetCountMap.get(capital) || 0
    alphabetCountMap.set(capital, acc+1) 
}

let maxCount = 0;
let answer = '';
let isOnlyOne = true;

for (const [char,count] of alphabetCountMap){
    if (count === maxCount){
        isOnlyOne = false;
    }    
    if (count > maxCount) {
        maxCount = count;
        answer = char;
        isOnlyOne = true;
    }
}

if (isOnlyOne){
    console.log(answer);
} else {
    console.log("?")
}