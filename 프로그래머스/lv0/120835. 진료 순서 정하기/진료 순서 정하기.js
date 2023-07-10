// 2023 ECMA  toSorted 사용불가

// const solution = (arr) => {
//     const sortedArr = arr.toSorted();
//     return arr.map(item => sortedArr.indexof(item) + 1)
// }

const solution = (arr) => {
    const arrOrigin = [...arr];
    const sortedArr = arr.sort((a,b) => b - a);
    return arrOrigin.map(item => sortedArr.indexOf(item) + 1);
    
}