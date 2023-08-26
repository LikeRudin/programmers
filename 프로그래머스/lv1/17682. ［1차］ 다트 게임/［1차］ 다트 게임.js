const solution = (dartResult) => {
    const stack = []
    for (let i = 0; i < dartResult.length; i++){
        if(
            Number.isInteger(Number(dartResult[i])) &&
            Number.isInteger(Number(dartResult[i+1]))
          ){
            const score = Number(dartResult[i] + dartResult[i+1]);
            switch(dartResult[i+2]){
                case "S":
                    stack.push(score)
                    break;
                case "D":
                    stack.push(score ** 2)
                    break;
                case "T":
                    stack.push(score ** 3)
                    break;
            }
            i += 2;
            continue;
        }
        if(Number.isInteger(Number(dartResult[i]))){
            const score = Number(dartResult[i]);
            switch(dartResult[i+1]){
                case "S":
                    stack.push(score)
                    break;
                case "D":
                    stack.push(score ** 2)
                    break;
                case "T":
                    stack.push(score ** 3)
                    break;
            }
            i++;
            continue;
        }
        switch(dartResult[i]){
            case "*":
                const a = stack.pop()
                if(stack.length){
                    const b = stack.pop()
                    stack.push(b * 2)
                }
                stack.push(a * 2)
                break;
            case "#":
                const c = stack.pop();
                stack.push(-c);
                break;
        }
    }
    return stack.reduce((acc, cur)=> acc + cur)
}