const solution = (k, tangerine) => {
    const sizeNumMap = new Map();
    tangerine.forEach((item)=> {
        sizeNumMap.set(item, 1 + (sizeNumMap.get(item) || 0));
    });

    const numCaseMap = new Map();
    const numbers = [...sizeNumMap.values()];
    numbers.forEach((size) => {
        numCaseMap.set(size, 1 + (numCaseMap.get(size) || 0))
    })
    const target = [...numCaseMap.entries()].sort((a,b) => b[0] - a[0]);
    let count = k
    let kinds = 0;
    for (const item of target){
        let [number, kindNumber] = item;
        while (kindNumber > 0 && count > 0){
            count -= number;
            kindNumber--;
            kinds++;
        }
        if(count < 1) {
            break
        }
    }
    return kinds
}