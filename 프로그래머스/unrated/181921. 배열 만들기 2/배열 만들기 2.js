const solution = (l, r) => {
    const range = Object.keys([...Array(r + 1)]).slice(l);
    const answer = range.filter(x => /^(0|5)+$/.test(x)).map(y => Number(y));
    return (answer.length > 0)? answer : [-1]
}