/*
* 1. Object.keys 로 생성하는건 string이므로 Number 객체래퍼를 씌워줘야한다
* 2. Array
*/

const solution = (n) => Array(n).fill(1).map((x,i) => x + i).filter(x => n % x === 0)