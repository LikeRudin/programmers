/*
* 1. 오름차순으로 정리한다
* - 배열의 각 성분은 인용수가 작은 순서대로 정렬된다.
*
* 2.오름차순으로 정렬된 배열을 순회하며
*   아래의 조건을 만족하는 값이 나올때마다 h-idex를 덮어써준다.
*
* - 순회값 >= 뒤에남은 성분의 개수
* 핵심 트릭은 h - index는 특정논문의 인용수 그 자체는 아니라는것이다.
*    
*
* 3.h 인덱스값을 반환한다.
*   */

const sortNumbersArrayByASC = (arr) => {
    return arr.sort((a,b) => a - b)
}
const calculateHindex = (arr) => {
    let hIndex = [];
    arr.every((paper, index) => {
             const largerCitations = arr.length - index;
                 hIndex = [...hIndex, Math.min(paper, largerCitations)]
    return true});
    return Math.max(...hIndex)
}
const solution = (citations) => {
    const sortedCitationsByASC = sortNumbersArrayByASC(citations);
    console.log(sortedCitationsByASC);
    const hIndex = calculateHindex(sortedCitationsByASC);
    return hIndex;
}
