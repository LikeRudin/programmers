/* 정규표현식 string.match => 패턴에 맞는 값을 가진 배열을 반환
**/
const solution = (order) => String(order).match(/[369]/g)? String(order).match(/[369]/g).length : 0 