// 쿼드압축 후 개수세기

// 함수는 2^n, 2^n 크기의 2차원 배열을 입력받습니다.
// 이 배열의 각 영역을 압축해서 길이가 2 인 배열을 반환해보세요.

// 1. 만약에 해당 배열을 set으로 변환시 사이즈가 1이다 => 압축끝
// 2. 만약 압축할게 남았을시, 해당 배열을 4등분하고, 해당 배열을 제거한다.

const checkNeedCompression = (arr)=> {
    const value = arr[0][0]
    for (const row of arr){
        if (row.length !== row.filter(x => x===value).length) {
            return true
        }
    }
    return false
    
}

const solution = (arr) => {
    let queue = [[...arr]];
    const answer = [0,0]
    
    while(queue.length) {
        const target = queue.pop();
        if (target.length === 1 ){
            answer[target[0][0]] += 1;
            continue
        }
        const check = checkNeedCompression(target);
        if (!check){
            answer[target[0][0]] +=1;
            continue
        }
        const boxOne = [];
        const boxTwo = [];
        const boxTree = [];
        const boxFour = [];
        target.forEach((row,index) => {
            const left = row.slice(0, row.length/2);
            const right = row.slice(row.length/2);
            
            if (target.length/2 > index){
                boxOne.push(left);
                boxTwo.push(right);
            } else {
                boxTree.push(left);
                boxFour.push(right);
            }
        });
        queue = [...queue, boxOne, boxTwo, boxTree, boxFour];
    }
    return answer
}