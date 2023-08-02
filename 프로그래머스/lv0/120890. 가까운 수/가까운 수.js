// const solution = (array, n) => {
//     const absArray = array.map(item => Math.abs(item - n))
//     const min = Math.min(...absArray);
//     const minIndexArray = absArray.reduce((acc,item, index) => {
//         if (item === min){
//             acc.push(index)
//         }
//         return acc
//     }, [])
//     return Math.min(...array.filter((x,i) => minIndexArray.includes(i)))
// }
                
// solution 보고 바꾼답. 삼항연산자의 중첩으로 다중 IF 문 사용이 가능하다!

const solution = (array, n) => array
.reduce((acc, cur) => (Math.abs(n - acc) > Math.abs(n - cur))? cur : Math.abs(n - acc) === Math.abs(n -cur)? Math.min(acc, cur) : acc)