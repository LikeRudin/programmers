const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
      const starArr = [];
    for (let i = 1; i < Number(input[0]) + 1; i++) {
        const star = "*".repeat(i)
        starArr.push(star)
    }
    starArr.forEach(item => {
        console.log(item);
    })
    ;
});

const solution = (n)  => {
    const starArr = [];
    for (let i = 1; i < n + 1; i++) {
        const star = "*".repeat(i)
        starArr.push(star)
    }
    // console.log(starArr.join("\n"));
    starArr.forEach(item => {
        console.log(item);
    })
    
}