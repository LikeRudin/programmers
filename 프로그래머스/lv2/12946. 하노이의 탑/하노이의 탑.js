const hanoi = (n, start, end, via, result) => {
    if (n === 1){
        result.push([start, end])
        return
    }
    hanoi(n-1, start, via, end, result);
    result.push([start, end]);
    hanoi(n-1, via, end, start, result);
}

const solution = (n)  => {
    const answer = [];
    hanoi(n, 1, 3, 2, answer)
    return answer;
}