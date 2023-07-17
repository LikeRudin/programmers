const solution = (participant, completion) => {
    const pObject = {};
    for (const name of participant) {
        pObject[name] = (pObject[name])? pObject[name] + 1 : 1;
    }

    for (const name of completion) {
        pObject[name] -= 1;
        if (pObject[name] < 1) {
            delete pObject[name];
        }
    }
    
    const answer = Object.keys(pObject)[0];
    return answer;
}