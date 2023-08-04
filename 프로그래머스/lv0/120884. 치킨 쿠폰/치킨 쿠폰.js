const solution = (chicken) => {
    let eatableNum = chicken;
    let extraAte = 0;
    while (eatableNum / 10 >= 1) {
        extraAte += Math.floor(eatableNum / 10);
        eatableNum = eatableNum % 10 + Math.floor(eatableNum / 10);
    }
    return extraAte
}
