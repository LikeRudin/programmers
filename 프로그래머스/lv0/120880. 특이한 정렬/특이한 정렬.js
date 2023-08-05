/*
* return
    - 양수 : b , a
    - 음수 : a , b
    - 0이면 그대로 둔다
    
    n - x 값의 절대값이 작을수록 더 n에가까운 수이다.
    
즉 Math.abs(n - a) - Math.abs(n - b) > 0 
    b가 더가깝다 
    b, a
    Math.abs(n - a) - Math.abs(n - b) < 0
    a 가 더 가깝다
    a , b
    
    Math.abs(n - a) - Math.abs(n - b) === 0
    
    a와 b가 같은거리에 있다.
    
    이런경우에 한하여, 오름차순에 의해 정렬한다
    return b - a
*/

const solution = (numlist, n) => numlist
.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || b - a )
