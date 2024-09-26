const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    //     let answer = ''
    // for (i = 0;i <n ; i++){
    //     answer += str
    // }
    // repeat을 비롯한 string의 기본 메서드를 복기하자.
    const answer = str.repeat(n);
    console.log(answer)
    
});