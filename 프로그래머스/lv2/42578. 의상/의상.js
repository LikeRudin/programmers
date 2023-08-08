/* 1. 종류별 의상의 가짓수를 저장한다. 이름은 필요없다.
* 2. 저장한의상의 가짓수 +1을 전부 곱해준다.  (안입을수도 있는경우 +1)
* 3. 1을 뺴준값을 반환한다. (전부다 안입은경우 제외)
*/

const solution = (clothes) => {
    const hashMap = {};
    clothes.forEach(item => {
        hashMap[item[1]] = (hashMap[item[1]])? hashMap[item[1]] + 1 : 1; });
    
    let answer = 1;
    for (const key in hashMap) {
        answer *= (hashMap[key] +1);
    }
    return answer -1;
}