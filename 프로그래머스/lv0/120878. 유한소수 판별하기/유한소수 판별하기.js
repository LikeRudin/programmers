/*
* gcd를 구하여 기약분수를 구한다
* 기약분수의 분모가 소인수가 2와 5만 존재해야한다.
*/

const solution = (a,b) => {
    let gcd = 1;
    for (let i = 2; Math.min(a,b) >= i ;i++){
        if (a % i === 0 && b % i === 0){
            gcd = i
        }
    }
    let denominator = Math.floor(b / gcd)
    
    for (let j = 2; j < denominator + 1; j++){
        if (denominator % j === 0){
            if (j % 2 ===0 || j % 5 ===0){
                continue
            } else {
                return 2
            }
        }
    }
    return 1
    
}