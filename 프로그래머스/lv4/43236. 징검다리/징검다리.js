/**
 * 난해한 보기를 위한 설명
 * 1. 시작점 : 0, distance: 도착지점.
 * 2. 시작점과 도착지점도 모두 바위로 묘사하고있다.
 * 3. 보기에서 각 바위사이의 거리는 x축 기준으로 시작점부터 도착점까지의 바위와 바위 사이의 거리이다.
 */

/*
* 1. 시작지점, 각 바위의 위치, 끝지점을 오름차순으로 정렬한 배열을 만든다.
*   
* 2. 연속적으로 위치한 바위간 거리를 계산한 배열을 만든다.
*
* 3. 바위간 `간격배열`을 순회하며, 이진탐색을한다
*    - 기몬적인 이진탐색을 사용하기위해 while(left< rignt)문을 사용
*    - while loop를 한번 순회할때마다 n개의 바위를 제거한 케이스 하나를 따질 수있다.
*    - mid는 바위사이의 간격의 값으로 점근해가는 값이다.
*
*    - while 문의 작동
*       - 내부 forEach 문은 간격배열을 순회한다.
*       - 간격 배열의 축적값(currentDistance)을 현재 바위를 제거하며 확장중인 간격의 길이라고 생각한다
*       - 만약 축적값이 mid보다 작으면 바위를 제거한다
*           - 축적값은 제거한 바위를 경계점으로 잡던 두 간격의 합산값이된다.
*       - 축적값이 mid보다 크거나 같다면, 축적값을 초기화한다.
*       - 간격배열의 남은부분을 순회하며 위의 과정을 반복한다. 
*       - n은 배열의 길이보다 짧음
*       - 이렇게 해서 제거된 바위가 n보다 적으면, 바위를 많이 제거하지 않아도 
*       - mid값위로 쉽게 접근하거나 mid값이 일반적인 간격보다도 작다는 뜻이다.
*           - mid값은 간격의 최솟값중 최댓값의 후보가 되기엔 너무 작으므로 증가시켜야한다.
*           - left 를 상승시키면 (= mid + 1)다음순회에선 mid 값이 상승
*
*       - 제거된 바위가 n개보다 많다면, mid값이 너무 크다는 뜻이다.
*           - 반환해야 하는 값은 간격의 최솟값중 최댓값
*           - mid는 간격의 최솟값 후보가 되기엔 너무크므로 증가시켜야한다.
*           - right를 하락시키면  (= mid) 다음순회에선 mid값이 하락
*
*           - whileloop를 반복하다보면 제거되는 돌은 점점 n값에 맞춰진다.
*       - 제거된 바위가 정확히 n개라면, mid값은 n개를 제거시 얻을 수있는 간격중 큰값
*       - 역시 mid를 하락시켜준다
*  
*        
*       
*           탈출시점의 left는 mid + 1이 된다 
*           ieft -1 을 반환한다.
*/
const makeSortedPointList = (rocks, distance) => {
    const pointList = [0, ...rocks.sort((a,b)=> a - b), distance];
    return pointList
}

const makeIntervalListBeetweenPoints = (pointList) => {
    const intervals = pointList.map((item,index, arr) => arr[index + 1] - item);
    const intervalListBeetweenPoints = intervals.slice(0,  intervals.length -1);
    return intervalListBeetweenPoints
}

const findLongestInterval = (intervalList, distance, n) => {
    let left = 0;
    let right = distance + 1;
    const idealNumRocksToRemove = n;

    while (right > left) {
        const mid = Math.floor((left + right) / 2);
        let numRemovedRocks = 0;
        let currentDistance = 0;
        
        intervalList.every(interval => {
            currentDistance += interval;
            if (currentDistance < mid) {
                 numRemovedRocks++;
                if(numRemovedRocks > idealNumRocksToRemove){
                    return false
                }
            } else {
                currentDistance = 0;
            }
            return true
        });
        
        if (idealNumRocksToRemove >= numRemovedRocks) {
             left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left - 1;
};
const solution = (distance, rocks, n) => {
    const pointList = makeSortedPointList(rocks, distance);
    const intervalList = makeIntervalListBeetweenPoints(pointList);
    const answer = findLongestInterval(intervalList, distance, n);
    return answer
}
