/*
*  이진탐색의 핵심
*   1. 탐색할 배열은 정렬되어야함
*   2. 시작지점과 끝지점을 기준으로 삼아야함
*   3.  
* 시작지점: times min 끝지점 times * n
*/

const sortArrayForBinarySearch = (times) => {
    const sortedArray = [...times].sort((a,b) => a - b);
    return sortedArray;
}
const calculateEndpoints = (n,times) => {
    return  [1 ,times[times.length - 1] * n + 1]
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
            right = mid - 1;
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