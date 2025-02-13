const normalWhiteComponents = [1,1,2,2,2,8]

const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const currentWhiteComponents = stdin[0].split(' ').map(Number).slice(0,6);
const differenceNumbers = Array.from({length:6}, (_, i) => normalWhiteComponents[i] - currentWhiteComponents[i]);

const answer = differenceNumbers.join(" ");
console.log(answer)
