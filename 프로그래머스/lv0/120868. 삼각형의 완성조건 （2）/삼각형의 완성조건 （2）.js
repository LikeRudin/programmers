/*
* 1. side max is max 
* 2. new max
*/

const solution = (sides) => {
    const largerSide = Math.max(...sides)
    const smallerSide = sides.filter(x => x !== largerSide)[0] || largerSide;
    const minimum = largerSide - smallerSide + 1;
    const maximum = largerSide + smallerSide - 1;
    return maximum - minimum + 1
    
    }