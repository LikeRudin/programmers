
const solution = (arr) => arr.filter((cur,index,origin) => cur !== origin[index +1]
)