// const getMaxIndexes = (numString, k) =>{
//     const numArray = [...numString].map(x => Number(x));
//     const loopStart = Math.max(...numArray);
//     for (let i = loopStart; i >= 0; i--) {
//         const maxIndexes = []
//         numArray.forEach((item,index)=> {
//             if (Number(item) === i &&
//                 (numString.length - index >= k)
//                ){
//                 maxIndexes.push(index);
//             }
//         });
//         if (maxIndexes.length){
//             return [i, maxIndexes]
//         }
//     }
// }  

// const solution = (number,k) => {
//     let numString = number;
//     let count = k
//     let [max, indexes] = getMaxIndexes(numString,k);
//     let doubleIndexes = [[indexes, numString]];
//     let answer = `${max}`;
//     count--;
//     while (count > 0) {
//         const nextStrings = [];
//         doubleIndexes.forEach((item) => {
//             const [indexArr, numStr] = item;
//             indexArr.forEach((maxIndex) => {
//                 nextStrings.push(numStr.substring(maxIndex + 1));
//             });
//         })
//         const nextIndexes = nextStrings.map((numStr) => [...getMaxIndexes(numStr, count), numStr]);
//         const nextMax = Math.max(...nextIndexes.map(x => x[0]));
//         doubleIndexes = nextIndexes.filter(item => item[0] === nextMax).map(x => [x[1], x[2]]);
//         answer += `${nextMax}`;
//         count--;    
//     }
//     return answer;
    
// }

// 


const solution = (number,k) => {
    let count = k
    const answerArr = [number[0]];
    let index = 1;
    for (index; index < number.length; index++){
        while (count > 0 && answerArr[answerArr.length -1] < Number(number[index])){
            answerArr.pop();
            count -= 1;
        }
    
        answerArr.push(Number(number[index]));
        
    }
    while (count > 0){
        answerArr.pop();
        count -= 1;
    }
    const answer = answerArr.join("")
    return answer
}