const getdList = (num)=> {
    let cd = [num];
    const limit = Math.ceil(num / 2)
    for (let i = 1; i <= limit ; i ++){
        if (num % i === 0) {
            cd = [...cd, i]
        }
    }
    return cd
}


const solution = (n, m) => {
    const dN = getdList(n);
    const dM = getdList(m);
    const cdList = dN.filter(item => dM.includes(item));
    const gcd = Math.max(...cdList);
    const lcm = n * m / gcd
    return [gcd, lcm]
}