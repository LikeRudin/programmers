// 함수설명

// 입력값
// 유저의 피로도 총량:number
// 던전의 피로도 정보 [입장요구 피로도, 소모피로도]

// 출력값
// 모두 돌수있는 최대의 던전갯수를 반환


// 전략 dungeons의 길이에 해당하는 인덱스
// 배열의 모든 순열을 구한다.
// 각 순열의 순서대로 순회한다. 

const dfs = (tired, dungeons, visited, count) => {
    if (tired < 0) {
        return count; 
    }

    let answer = count;
     
    dungeons.forEach((dungeon, index)=> {
        const [needed, used] = dungeon;
        if (
            !visited.has(index) &&
            tired >= needed 
        ) {
            visited.add(index);
            answer = Math.max(answer, dfs(tired - used, dungeons, visited, count + 1));
            visited.delete(index);
        }
        
    })
    return answer
}

const solution = (k, dungeons) => {
    return dfs(k,dungeons, new Set(), 0)
}