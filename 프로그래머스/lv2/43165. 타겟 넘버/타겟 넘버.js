// ## 함수설명 

// 정수가 들어있는 numbers 배열과 숫자 target을 입력받습니다.
// numbers 의 성분을 인덱스 순서대로 더하거나 빼서 
// target이 나오는 경우의 수를 반환해야합니다.

// 간단한 깊이우선탐색 문제입니다.
// dfs가 한번 호출될때마다 실행경우는 두배씩 증가합니다.
// 방사형으로 뻗어나간 갈래들은 결국 최종적으로 0 또는 1로 결정되어 tmp에 전부더해지게됩니다.

// 이문제는 배열의 성분을 전부 인덱스 순서대로 방문할것을 요구합니다.
// 따라서 따로 방문 인덱스를 관리해줄 필요가 없습니다.

// 방문 순서가 바뀌는 경우를 따지는 문제는
// for문도 사용해주어야하고, 인덱스 관리 객체도 따로 만들어야합니다.

const dfs = (numbers, target, count) => {
    let tmp = 0;
    if (count === numbers.length) {
        const sum = numbers.reduce((acc,cur) => acc += cur);
        return Number(target === sum)
    }
    tmp += dfs(numbers, target, count + 1);
    numbers[count] *= -1;
    tmp += dfs(numbers, target, count + 1);
    return tmp
}

const solution = (numbers, target) => {
    return dfs(numbers, target, 0)
    
}