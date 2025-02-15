const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const getAnswer = () => {
const word = stdin[0]
if(word.length === 1){
    return 1
}

const leftBound = Math.floor(word.length / 2)
const rightBound = word.length % 2 === 0 ? leftBound : leftBound + 1

const left = word.slice(0, leftBound)
const right = word.slice(rightBound, word.length).split('').reverse().join('')

if (left === right){
    return 1
}
return 0}

const answer = getAnswer()
console.log(answer)
