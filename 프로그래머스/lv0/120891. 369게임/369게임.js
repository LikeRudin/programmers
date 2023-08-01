/* 정규표현식 string.match => 패턴에 맞는 값을 가진 배열을 반환
**/

/**
const solution = (order) => String(order).match(/[369]/g).length || 0 

match의 결과가 null 일경우, length 가 작동하지않는다.
*/

// const solution = (order) => String(order).match(/[369]/g)? String(order).match(/[369]/g).length : 0 


const solution = (order) => String(order).split("").filter(x => ["3","6","9"].includes(x)).length