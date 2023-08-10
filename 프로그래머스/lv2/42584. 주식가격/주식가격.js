/*
* 실패 코드
* 1. const popElement = stocks.shift() 에서 성분을 하나 shift  (popElement),
* 2 stocks.every(item => {
*       count++;
*       switch (item >= popElement){
*           case true: {
*           return true
*           }
*           case false: {
*           return false
*           } 
* })
* answer = [...answer, count];
* 위 코드를 stocks가 비워질때까지 반복
* array.prototype.every를 while문으로 반복하는것은 O(n^2)
* 
*/

// 성공코드: for 문 내부에 while문이 들어있으나, while문이 실행되는 횟수는 stocks의 길이보다 짧음
const solution = (prices) => {
    let stocks = [...prices];
    let stockIndexes = [];
    let answer = Array(prices.length);
    for (let i = 0; i < answer.length ; i++){
        while (stockIndexes.length && stocks[stockIndexes[stockIndexes.length - 1]] > stocks[i]){
            const popIndex = stockIndexes.pop();
            answer[popIndex] = i - popIndex;
            
        }
        stockIndexes = [...stockIndexes, i]
    }
    while (stockIndexes.length) {
        const popIndex = stockIndexes.pop();
        answer[popIndex] = stocks.length -1 - popIndex;
    }
    return answer
}