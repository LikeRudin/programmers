const solution = (array) => array
.map(x => String(x))
.flatMap(x => x.match(/7/g)? x.match(/7/g).length: "0")
.map(x=> Number(x)).reduce((acc,cur) => acc + cur)