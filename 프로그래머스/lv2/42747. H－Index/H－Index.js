/*
* 1. 오름차순으로 정리한다
* - 배열의 각 성분은 인용수가 작은 순서대로 정렬된다.
*
* 2.오름차순으로 정렬된 배열을 순회하며
*   아래의 조건을 만족하는 값이 나올때마다 h-idex를 덮어써준다.
*
*   h-index의 후보는 자신을 포함해서 인용수가 자신의 인용수이상인 논문들이
*   적어도 자신의 인용수만큼 존재해야한다
* - 순회값 >= 뒤에남은 성분의 개수
*   === 값  >= 배열의 길이 - 현재 인덱스 
*
* 3.h 인덱스값을 반환한다.
*   */

const sortNumbersArrayByASC = (arr) => {
    return arr.sort((a,b) => b-a)
}
const calculateHindex = (arr) => {
    let hIndex = 0;
    arr.forEach((paper, index) => {
             const largerCitations = arr.length - index;
             if (largerCitations >= paper) {
                 hIndex = paper;
             }});
    return hIndex
}

const solution = (citations) => {
    const sortedCitations = sortNumbersArrayByASC(citations);
    const hIndex = calculateHindex(sortedCitations);
    return hIndex;
}