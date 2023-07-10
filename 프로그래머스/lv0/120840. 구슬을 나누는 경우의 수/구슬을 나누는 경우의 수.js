// const calculateFactorial = (num) => {
//     let result = 1;
//     for (let i = 1; i <= num; i++) result *= i;
//     return result
// }

const calculateFactorial = (num) => {
    const countArr = [...Array(num).keys(), num]
    countArr.shift();
    return countArr.reduce((acc,crr) => acc * crr, 1);
    }

const solution = (balls, share) => {
    const n = calculateFactorial(balls);
    const m = calculateFactorial(share);
    const n_m = calculateFactorial(balls - share)
    
    return Math.round(n / m / n_m)
    
    }