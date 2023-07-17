// Object[item] => item이 string으로 바뀌어 들어간다
// 즉. 변수값으로 프로퍼티에 접근할때에는 항상 대괄호 표기법을[] 사용하자

// 배열순회 두번=> 끔찍한 성능
const solution = (participant, completion) => {
    const pObject = {};
    for (const name of participant) {
        if (!pObject[name]) {
            pObject[name] = 1;
        } else {
            pObject[name] += 1;
        }
    }
    
    
    for (const item of completion) {
        pObject[item] -= 1;
        if (pObject[item] === 0) {
            delete pObject[item];
        }
    }
    
 
    
    const answer = Object.keys(pObject)[0];
    return answer;
}
