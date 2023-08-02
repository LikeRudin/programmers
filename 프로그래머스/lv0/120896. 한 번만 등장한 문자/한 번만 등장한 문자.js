/*
* 1. 배열 a내부에 x 가 몇개있는지 파악하는방법
* a.filter(a => a === x).length
*
* 2. mdn 문서가 문자열 분해할때, s.split("") 대신 ...s 를 사용하라고한다.
* split은 특정값을 기준으로 할때만 사용하자.
*/
const solution = (s) => [...s].filter(x => [...s].filter(s => s === x).length === 1).sort().join("")