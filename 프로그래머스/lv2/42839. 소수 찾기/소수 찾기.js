// 1. 모든 순열을 생성한다. 
// 2. 소수인지 확인한다. - 십진수 확인 / 이진수 확인

// 만들어야하는 함수는 숫자로 구성된 문자열을 입력받습니다.

// 주어진 숫자 문자열의 각 인덱스에 해당하는 
// 성분들을 1개 이하씩 이어붙여 
// 만들수있는 모든 숫자중에서 소수가 몇개인지 반환해야합니다.

// 숫자문자열의 각 인덱스에 해당하는 성분들을 1 개 이하씩 이어붙인다
// 라는말은 정확한 전달을 위해 붙인 수식입니다.
  
//  "112" 가 주어졌다고 합시다
//  각 성분은 인덱스로 구분지어지며, 값들은 중복될 수있습니다.

// 인덱스 : 값
// 0     :   1
// 1     :   1
// 1     :   2

// 중복되는 값이 존재합니다. 1이 두개있습니다.
// 인덱스로 구분되는 1은 두개이므로, 숫자 조합을 만들때 1은 총 두개까지 사용됩니다.

// 즉 11은 허용됩니다.하지만 111은 만들 수 없습니다.
// 이런 복잡한 수식을 붙인 이유는 순수한 순열이나 조합,
// 중복순열, 중복조합으로 생각하고 접근시 헷갈리기 때문입니다.

// 굳이 설명하자면 인덱스에관한 순열 만들기 입니다

// generatePermutations:
// 길이 r에 해당하는 순열을 반환하는 함수입니다.
// 각 수행별로 r레벨을 탐사하는 일종의 깊이우선탐색 (DFS) 함수입니다.
// 각 매개변수는 다음과 같습니다.
// numbers: 숫자문자열
// r: 만들 순열의 길이
// tmp: 현재 구성중인 순열의 성분들을 저장한 배열
// answer: 만들어진 순열들을 성분으로 갖는 Set
// UsingIndexSet: 현재 numbers의 성분중 사용중인 인덱스 i 를 카운팅하여 중복 사용을 막아주는 Set (재방문방지)

// tmp는 배열이지만, answer은 Set인 이유는 
// tmp는 [1,1,2] 같이 중복된 값을 가질수있으나, answer은 [112,112] 같이 중복된 값을 가지면 번거롭기때문입니다.

// 내부의 for 문은 0부터 numbers.length 까지 순회합니다.
// 0이 들어가는 순간 usingIndexSet 에 0을 추가하고
// 0번 인덱스로 시작하는 모든 r 길이의 순열을 만든후
// 0번 인덱스를 usingIndexSet에서 삭제합니다.

// 그다음 1이 들어가면 1번 인덱스로 시작하는 모든 순열을 만든후 (1번 다음에 0번 인덱스 아이템이 올수도있음)
// 다시 1번 인덱스를 삭제합니다. 이런식으로 길이가 r인 모든 경우를 만들수있습니다.

// deleteDuplications:
// 순열 배열에서 중복원소를 삭제합니다
// 길이 1인 성분 1과 
// 길이 2인 순열 01 이 변환된 성분 1 의 중복을 제거합니다.

// isPrime :
// 각 성분이 소수인지 확인합니다.
// 어떤수가 합성수라면( 1과 자기자신이 아닌 약수가 존재한다면), 
// 그 수는 무조건 제곱근보다 작은거 아실거라 믿습니다. 

const generatePermutations = (numbers, r, tmp, answer, usingIndexSet) => {
    if (tmp.length === r){
        const permutation = Number(tmp.join(""))
        answer.add(permutation)
        return answer;
    }
    
    for (let i = 0; i < numbers.length; i++){
        if(usingIndexSet.has(i)){
            continue;
        }
        usingIndexSet.add(i);
        tmp.push(numbers[i]);
        generatePermutations(numbers, r, tmp, answer, usingIndexSet);
        tmp.pop();
        usingIndexSet.delete(i);
    }
    return answer;
}

const deleteDuplications = (results) => {
    return [...new Set(results)]
}

const isPrime = (x) => {
    if (x < 2){
        return false
    }
    if (x === 2){
        return true
    }
    for (let i = 2; i <= Math.sqrt(x); i++){
        if (x % i === 0) {
            return false
        }
    }
    return true
}


const solution = (numbers) =>{
    let permutations = [];
    
    for (let i =1; numbers.length >= i ; i++){
        const iPermutations = generatePermutations(numbers, i, [], new Set(), new Set());
        permutations = [...permutations, ...iPermutations];
     
    }
    permutations = deleteDuplications(permutations);
    const answer = permutations.filter(x => isPrime(x)).length
    return answer 
}