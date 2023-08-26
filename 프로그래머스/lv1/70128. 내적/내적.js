const solution = (a,b) => a.map((a,i) => a * b[i]).reduce((acc,cur)=> acc + cur)
