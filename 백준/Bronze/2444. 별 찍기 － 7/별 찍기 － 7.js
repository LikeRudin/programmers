const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = stdin[0];


const BLANK = ' ';
const STAR = '*';

const starNumbers = Array.from({length: 2 * N - 1}, (_, i) => 
    2 * (N - Math.abs(N - i - 1)) - 1
);

const lines = starNumbers.map(num => {
    const blankNumbers = (2 * N - 1 - num) / 2;
    return BLANK.repeat(blankNumbers) + STAR.repeat(num)
});

const answer = lines.join('\n')
console.log(answer)