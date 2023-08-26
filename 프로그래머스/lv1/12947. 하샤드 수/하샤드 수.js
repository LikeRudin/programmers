const solution = (x) => (x % [...String(x)].map(item => Number(item)).reduce((acc, cur)=> acc+cur)) === 0;
