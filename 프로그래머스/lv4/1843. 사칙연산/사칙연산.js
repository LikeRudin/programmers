const solution = (arr) => {
    const reversedExpression = [...arr].reverse().map(x => isNaN(Number(x))? x: Number(x))
    let minMax = [0, 0];
    let sum = 0;
    
    reversedExpression.forEach((term, index, array) => {
        if (term ==="-"){
            const [curMin, curMax] = minMax;
            const newMin = Math.min(-(sum + curMax), -sum + curMin);
            
            const prev = array[index - 1];
            const newMax = Math.max(-(sum + curMin), -prev + (sum-prev) + curMax);
            minMax = [newMin, newMax];
            sum = 0;
        }
        if(typeof term === "number"){
            sum += term;
        }
    });
    return sum + minMax[1]
    
}