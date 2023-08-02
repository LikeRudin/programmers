/**
* 1. 공백을 기준으로 자르고, 숫자로 치환한 배열을 만든다
* 2. Number에 의해 변환된 Z는 NaN이 될것이다.
* 3. 배열의 값을 더하면서, 중간에 isNaN이 나오면 이전의 값을 빼준다
*
* 모범답안 보니까 스택을 생각하더라, 스택도 좋은것 같다.
*/
const solution = (s) => s.split(" ").map(x => Number(x)).reduce((acc,cur,index,arr) => acc = isNaN(cur)? acc - arr[index -1] : acc + cur
, 0)