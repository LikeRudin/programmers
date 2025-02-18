const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();
let a = input.replace(/c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g, ' ');
 
 
console.log(a.length);
