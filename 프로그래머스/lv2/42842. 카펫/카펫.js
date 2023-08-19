//1. yellow 를 두 정수의 곱으로 표현한다.
//2. 해당 두 정수의 합 * 2 + 4 가 brown인지 확인한다.
//3. 맞다면 두정수 + 2를 담은 배열을 출력한다.

const solution = (brown, yellow) => {
    for(let i = 1; Math.sqrt(yellow) >=i; i++){
        if (yellow % i === 0 &&
            2 * (i + Math.round(yellow / i)) + 4 === brown
           ) {
            const answer = [Math.round(yellow / i) + 2, i + 2]
            return answer
        }
    }
    
}