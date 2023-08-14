/*
* 1. 오름차순으로 정리한다
* - 배열의 각 성분은 인용수가 작은 순서대로 정렬된다.
*
* 2.오름차순으로 정렬된 배열을 순회하며
*   인용지수가 순회값 이상인 논문의 개수를 구한다.
*   순회값은 논문의 개수중 `작은값`을  기존 h-index와 비교해 `더 큰값`을 선택한다.
*   hIndex = Math.max(hIndex, Math.min(paper, largerCitations))
*   [1,2,10,50,66] => 
*   순회값 1 - 인용지수가 `1` 이상인 논문의 수는 5
*   h index 는 `1`
*
*   순회값 2 - 인용지수가 `2` 이상인 논문의 수는 4
*   h index 는 1과  `2` 중에 큰값인 2
*                  
*   순회값 10 - 인용지수가 10 이상인 논문의수는 `3`
*   h index는 2와 `3`중에 큰값인 3
*   
*   순회값 50 - 인용지수가 50 이상인 논문의수는 `2`
*   h index는 `3`과 2중에 큰값인 3
*
* 핵심 트릭은 hindex값은 특정논문의 인용수 그 자체는 아니라는것이다.
*  ex) [303,304,305] -> 3    
*
**/
const sortNumbersArrayByASC = (arr) => {
    return arr.sort((a,b) => a - b)
}
const calculateHindex = (arr) => {
    let hIndex = 0;
    arr.every((paper, index) => {
        const largerCitations = arr.length - index;
        hIndex = Math.max(hIndex, Math.min(paper, largerCitations));
        return true
    });
    return hIndex
}
const solution = (citations) => {
    const sortedCitationsByASC = sortNumbersArrayByASC(citations);
    const hIndex = calculateHindex(sortedCitationsByASC);
    return hIndex;
}
