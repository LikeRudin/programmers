// 함수설명

// 입력값
// 유저의 피로도 총량:number
// 던전의 피로도 정보 [입장요구 피로도, 소모피로도]

// 출력값
// 모두 돌수있는 최대의 던전갯수를 반환


// 전략 dungeons의 길이에 해당하는 인덱스
// 배열의 모든 순열을 구한다.
// 각 순열의 순서대로 순회한다. 

const generatePermutations = (numbers, tmp, answer, usingIndexSet) => {
    if (tmp.length === numbers.length){
        answer.add([...tmp])
        return answer;
    }
    
    for (let i = 0; i < numbers.length; i++){
        if(usingIndexSet.has(i)){
            continue;
        }
        usingIndexSet.add(i);
        tmp.push(numbers[i]);
        generatePermutations(numbers, tmp, answer, usingIndexSet);
        tmp.pop();
        usingIndexSet.delete(i);
    }
    return answer;
}

const solution = (k, dungeons) =>{
    const indexSet = Object.keys(Array.from(Array(dungeons.length)));
    const setOfSequence = [...generatePermutations(indexSet, [], new Set(), new Set())]
    console.log(setOfSequence)
    const numsForEachCase = setOfSequence
    .map(order =>
         order.reduce((acc, curIndex) => {
            const [needed, used]= dungeons[curIndex];
            const [stamina, count] = acc;
            switch(stamina >= needed) {
                case true: 
                    return [stamina - used, count + 1]
                case false:
                    return acc
            }
    }, [k, 0])[1])
    
    return Math.max(...numsForEachCase)
}
