// 동적계획법: 메모를 활용한다.
// 배운점. fill(new Set())같은경우엔 배열내부를
// 전부 같은 객체로 채운다.
// map(x=> new Set())은 배열내부를 전부 다른객체로 채운다.

// 잠깐 
const solution = (N, number) => {
    if (number === N){
        return 1
    }
    
    const memo = [...Array(9)].map(x => new Set());
    memo[1].add(N);
    let answer = -1
    
    for (let i = 2; i < 9; i++){
        memo[i].add(Number(`${N}`.repeat(i)));
        for ( j = 1; j <= i / 2; j++){
            memo[j].forEach(numFirst => {
                memo[i - j].forEach(numSecond => {
                    [numFirst + numSecond,
                     numFirst - numSecond,
                     numSecond - numFirst,
                     numFirst * numSecond,
                     Math.floor(numFirst / numSecond),
                     Math.floor(numSecond / numFirst)]
                        .filter(x => x > 0 && !memo[i -1].has(x))
                        .forEach(y => memo[i].add(y));
                });
                
            });
            if(memo[i].has(number)){
                return i
            }
        }
    }
    
    return answer
    }
    
