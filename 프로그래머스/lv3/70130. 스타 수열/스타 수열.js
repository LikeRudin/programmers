// 스타 수열을 만드는 조건
// 1. 두개씩 끊어서 새 배열을 만들면, 각 배열은 서로다른 원소가 2개씩 들어가야함.
// 2. 각 배열끼리 비교시, "공통원소"가 항상 있어야함.

// "공통원소"를 정하자
// 전략: a에 들어있는 가장 많은 원소를 시작으로, 다른 원소들을 버려가며 새로운 배열을 만든다.
// 시간초과1. : set을 저장한 배열을 그냥 set으로 변경
// 시간초과2. :배열에 길이를 저장하다가 마지막에 Math.max...길이배열을 반환하지 않는다.
//          처음부터 max를 변수 하나로 저장하고, max보다 큰값을 만날경우 비워준다.
// 시간초과3. : 만약에 이미 존재하는 max보다 number * 2 (해당 순회로 만들 수 있는 최대 부분수열길이 ) 가 더 작다면, 그 번호대 loop는 지나친다.
const solution = (a) => {
    const countingMap = new Map();
    a.forEach((num) => {
        countingMap.set(num, 1 + (countingMap.get(num) || 0));
    });
    let max = 0;
    const sortedValuesByNumber = [...countingMap.entries()].sort((a,b) => b[0] - b[1]);
    sortedValuesByNumber.forEach((valueAndNumber)=>{
        const [value, number] = valueAndNumber;
        if (number * 2 < max){
            return
        }
        let set = new Set()
        let flag = 1;
        a.forEach((val,index)=> {
            if (set.size === 2){
                flag +=1;
                set = new Set();
            }
            if (set.size === 0){
                set.add(val);
            } else if (set.has(value) &&
                val !== value
               ) {
                set.add(val);
            } else if (!set.has(value) 
                && val === value
               ) {
                set.add(val);
            }
        });
        if (set.size <= 1) {
            flag -=1;
        }
        max = Math.max(max, flag * 2)
    });
    return max
}