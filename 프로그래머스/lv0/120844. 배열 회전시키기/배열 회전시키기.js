/*
* slice와 spllice는 제거한 성분들이 반환된다.
* 그래서 삼항연산자와 연개해서 사용시, 원하는배열이아닌 반환값이 저장될 수 있다
* 반드시... 반환값을 기억하도록
*/

const solution = (numbers, direction) => (direction === "left")? [...numbers.filter((x,i) => i !== 0) , numbers[0]] : [numbers[numbers.length -1], ...numbers.filter((x,i,a )=> i!== a.length - 1)]