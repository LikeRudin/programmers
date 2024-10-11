/*
* 문제 예시대로 순차적으로 만들면 공간복잡도 에러가 난다.
* 
* 현재 위치를 n으로 나눠서 몫으로 행번호를 구하고, 
* 나머지로 열번호를 구한다.
* 
*
* 둘중 큰 값이 배열의 원소가된다.
*/

const solution = (n, left, right)=> Array.from({ length: right - left + 1 }, (_, i) => Math.max(Math.floor((left + i)/n), (left + i) % n) + 1) ;
    
