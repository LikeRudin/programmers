/*
* 1. 인덱스 배열을 구한다.
* 2. 배열의 길이가 0 이면 [-1]
* 3. 배열의 길이가 1이면 [2]
* 4. 배열의 길이가 2 이상이면 
* 기존배열slice(배열[0], 배열[배열.length -1]) 
*/

const solution = function (arr) {
    const indexArr = [];
    
    for (let i = 0; i < arr.length ;i++) {
        if (arr[i] === 2) indexArr.push(i);
    }
    
    const lenIndexArr = indexArr.length;
    
    switch (lenIndexArr) {
        case 0:
            return [-1]
        case 1:
            return [2]
        default:
            return arr.slice(indexArr[0], (indexArr[lenIndexArr -1] + 1))
            
           
            }
   
    
}