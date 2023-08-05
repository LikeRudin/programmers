/*
* 1. 각 선분을 단위 길이 1을 갖는 선분원소들의 배열A로 바꾼다.
*   ex) [2,5] => [2,3,4] (출발점이 2,3,4이고 길이가 1인 단위선분세개)
* 2. 모든 원소들을 하나의 배열B에 집어넣는다.
* 3. 배열B 내부에 똑같은값이 2개이상인 값들을 하나씩만 가지는 배열C를 구한다
* 4. 배열C 의 길이를 반환한다.
*/

const solution = (lines) => {
    const arrayForUnitLength = lines.flatMap(array => {
        let newArray = []
        for(let i = array[0]; i < array[1]; i++){
            newArray = [...newArray, i]
        }
        return newArray
    })
    
    const frequencyDict = {};
    arrayForUnitLength.forEach(num => {
    frequencyDict[num] = (frequencyDict[num] || 0) + 1})
    
    let answer = []
    for (let num in frequencyDict){
        if (frequencyDict[num] > 1) {
        answer = [...answer, num]
        }
    }
    return answer.length
    
}
