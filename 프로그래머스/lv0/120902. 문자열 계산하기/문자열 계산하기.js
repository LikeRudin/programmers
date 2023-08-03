const solution = (my_string) => {
    const tokenArray = my_string.split(" ").map(x => (x === "+" || x ==="-")? x : Number(x));
    let stack = [];
    
    for (let i = 0; i < tokenArray.length; i++){
        stack = [...stack, tokenArray[i]];
        if (stack.length === 3){
            const right = stack.pop();
            let sigma = 0;
            switch(stack.pop()){
                case "+":
                    sigma = stack.pop() + right; 
                    break;
                case "-":
                    sigma = stack.pop() - right;
                    break;
            }
            stack = [...stack, sigma]
        }
    
    }
return stack[0]
}