const solution = (participant, completion) => {
    const pObject = {};
    
    participant.forEach(name => pObject[name] = (pObject[name])? pObject[name] + 1 : 1);
    
    completion.forEach(name => {
        pObject[name] -= 1;
        if (pObject[name] < 1) delete pObject[name];
    });
    
    const answer = Object.keys(pObject)[0];
    return answer;
}
