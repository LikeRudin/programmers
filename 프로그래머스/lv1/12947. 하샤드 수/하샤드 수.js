const solution = (x) => {
    return (x % [...String(x)].map(item => Number(item)).reduce((acc, cur)=> acc+cur)) === 0;
}