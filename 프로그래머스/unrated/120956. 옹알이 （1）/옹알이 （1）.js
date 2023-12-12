/*
* 1. string.prototype.match(정규표현식 flag-g)
*    => 매칭값을 성분으로 갖는 배열로 반환
* 2. 매칭값배열.join("").length === string.length return ++acc
*     
*  null 처리- match함수는 매칭값이 없으면 null 반환
*    - 삼항연산자
*/
// const solution = (babbling) => babbling.reduce((acc, cur)=> {
//         const matchArray = cur.match(/aya|ye|woo|ma/g);
//         const matchLength = (matchArray !== null)? matchArray.join("").length : 0;
//         const soundLength = cur.length;
//         if (matchLength === soundLength) {
//             console.log(`${matchArray}, ${cur}`);
//             return ++acc ;
//         }
//         else {return acc}
        
// }, 0)


const solution = (babbling) => babbling.reduce((acc,cur)=>
    /^(?:(aya|ye|woo|ma)(?!.*\1))*$/.test(cur)? acc +1 : acc
, 0)
