/*
*  이진탐색의 핵심
*   1. 탐색할 배열은 오름차순으로 정렬해야함
*   2. 시작지점과 끝지점, 그리고 탐색 기준을 잘 정해야함
*/

// ## 만들어야하는 함수
// 입국심사를 받아야하는 사람의 수 n 과 
// 각 입국 심사대의 심사시간을 담은 배열 times을 입력받아
// 모든사람이 심사를 받는데 걸리는 시간의 최솟값을 반환한다.

// 작업의순서
// 1. times 배열을 정렬한다
// 2. 이진탐색의 시작점(입국심사에 걸리는 최소시간 - 1)과 끝점(최대시간 + 1)을 계산
//     - 이진탐색의 특성상 left와 right의초깃값은 정답이 될수없으므로 1을  가감
//     - 최소시간케이스: 가장 짧은 심사관이 심사하는 시간동안 전부 심사 
//          -times의 최솟값 * 1
//     - 최대시간케이스: 모두 가장 시간이 오래걸리는 심사관에게 심사
//         -times의 최댓값 * 심사인원 수
// 3. 위에서 구한 left/right 를 기준으로 잡고 정렬된 times를 순회하며
// 이진 탐색을 실시한다.

// mid는 최소시간과 최대시간의 평균값이다.
// numCompleted 는 (mid / 배열성분) 몫의 합계를 축적한값으로 
// 그 시간동안 심사대를 통과할 수있는 사람의 수를 뜻한다.

// 배열을 순회하다가 통과해야하는 사람수를 초과시 탈출한다.
// 만약 통과할 수있는 사람의 수가 mid값을 줄이고 (right에 mid -1 대입)

// 통과할 수있는 사람의수가 더 적다면 mid 값을 늘린다.


const sortArrayForBinarySearch = (times) => {
    const sortedArray = [...times].sort((a,b) => a - b);
    return sortedArray;
}
const calculateEndpoints = (n,sortedTimes) => {
    return  [1 ,sortedTimes[sortedTimes.length - 1] * n + 1]
}
const searchMinimumCheckTime = (controlArray, endpoints, n) => {
    let [left, right] = endpoints;
    const controls = controlArray;
    const totalNumPeople = n
    while (right >= left) {
        const mid = Math.round((left + right)/2);
        let numCompleted = 0;
        
        controls.every((checkTime) => {
            numCompleted += Math.floor(mid/checkTime)
            if(numCompleted >= totalNumPeople) {
                return false
            }
            return true
        });
        if (numCompleted >= totalNumPeople){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
}
        
 
const solution = (n,times) => {
    const immigrationControls = sortArrayForBinarySearch(times);
    const endPoints = calculateEndpoints(n, times);
    const minimumTimeToCheck = searchMinimumCheckTime(immigrationControls, endPoints, n)
    return minimumTimeToCheck;
}