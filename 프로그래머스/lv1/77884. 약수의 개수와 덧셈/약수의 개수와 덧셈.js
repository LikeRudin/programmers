const solution = (left, right) => {
    const range = Object
                    .keys([...Array(right + 1)])
                    .slice(left)
                    .map(x=> Number(x));
    const answer = range.reduce((acc, cur)=> {
        let divided = 0
        for (let i = 1; i <=cur; i++){
            if (cur % i === 0){
                divided +=1;
            }
        }
        if (divided % 2 === 0){
            return acc + cur
        }
        return acc - cur
    }, 0)
    return answer
}