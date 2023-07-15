//  1. 메서드의 반환값을 잘 알고있어야한다.
//  2. 공백문자열 ""의 length는 0이다.

// const solution = (s) => {
//     if (s.length <= 1) {
//         return s.toUpperCase()
//     }
    
//     return s.split(" ").map(item =>{
//         if (item.length <= 1) {
//             return item.toUpperCase();
//         }
//         else { 
//             return item[0].toUpperCase() + item.slice(1,item.length).toLowerCase()
//         }
//     }).join(" ")};

// 만약 charAt() 메서드를 사용한다면, 없는 인덱스에 접근해도 오류가 나지않는다.
const solution = (s) => s.split(" ").map(item => item.charAt(0).toUpperCase() + item.substring(1).toLowerCase()).join(" ")