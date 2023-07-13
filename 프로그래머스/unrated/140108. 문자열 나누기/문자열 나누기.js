
// 1. reduce문 사용
const solution = (s) => s.split("").reduce((acc, current, index) => {
    
        let [firstLetter, numSame, numDifference, numSegment, endPoint] = acc;
        if (firstLetter === "") {
           firstLetter = current;
        }
        switch (firstLetter === current){
            case true:
                numSame +=1;
                break;
            case false:
                numDifference +=1;
                break;
        }
        
        if (numSame === numDifference || index === s.length - 1) {
            firstLetter = "";
            numSame = 0;
            numDifference = 0;
            numSegment += 1;
        }
        
        return [firstLetter, numSame, numDifference, numSegment, endPoint];
        
        }, ["", 0, 0, 0, s.length])[3]

/* 2. array.every로 배열순회
* 1. array.every 메서드: forEach문을 쓰고싶은데, continue및 break가 필요할때 쓴다.
* array.prototype.every((item, index)=> {
*it () else return false
* })
*  return true; => continue 
* return false; => break
*
* 의례적으로 항상 return true를 마지막에 해줘야한다.
* 중간중간 return true를 해줄경우, 성능이 상승할 수 있으나
* 마지막 조각이나, 다른 특수케이스를 씹을 확률이 증가한다.
* 
*/

// const solution = (s) => {
    
//     const arr = s.split("");
//     console.log(`arr, arr.length : ${arr}, ${arr.length}`)
//     const endPoint = arr.length - 1;
//     let firstLetter = "";
//     let numSame = 0;
//     let numDifference = 0;
//     let answer = 0;
//     console.log(`endPoint : ${endPoint}`)
//     arr.every((item, index)=> {
//         console.log(`index: ${index}`)
        
        
        
//         // 첫글자 정하기
//         if (numSame === 0 &&
//             index !== endPoint) {
//         firstLetter = item;
//         numSame += 1;
//         return true;
//         }
        
        
        
//         switch(firstLetter === item) {
//         case true:
//             numSame += 1;
//             break;
//         case false:
//             numDifference += 1;
//             break;
//         }
    
//     if (numSame === numDifference) {
//         console.log(`reset Point - item: ${item}`);
//         answer += 1;
//         numSame = 0
//         numDifference = 0;
//         return true;
//     }
        
//     if (index === endPoint) {
//         console.log(`endPoint`);
//         answer += 1;
//     }
        
//     return true;
        
//     });
//     return answer;
    
// }


//3. 재귀함수 - 스택오버플로우 해결불가
