/*
* 1. n 개의 숫자가 들어있는배열 에서 n/2 개 선택
* 2. 선택할 수 있는 가짓수중 가장 높은 수를 반환
*/
// const solution = (nums) => {
//     const pokeMap= new Map();
//     const maxNum = Math.floor(nums.length /2) 
//     nums.forEach((item) => {
//         if (!pokeMap.has(item)){
//             pokeMap.set(item, true)
//         }
//     })
//     return (pokeMap.size > maxNum)? maxNum: pokeMap.size;
// }

const solution = (nums) => (new Set(nums).size > Math.floor(nums.length /2))? Math.floor(nums.length /2) : new Set(nums).size 