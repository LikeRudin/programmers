/*
* 1. x에대한 1차항 / 상수항이 들어있는 길이가 2인 Number배열을 구한다.
* 2. string 배열로 변환한다. 개수가 0인 항은 "" 로 바꿔준다.
* 3. 첫째항이 "" 가 아닌경우 x를 붙여준다.
* 4. 항목이 ""인 성분을 삭제한다
* 5. + 를 끼워넣은 식을 반환한다.
// */
// const solution = (polynomial) => 
// polynomial
//     .split(" + ")
//     .map(x=> x.trim())
//     .reduce((acc, cur) => {
//         switch (/x/.test(cur)) {
//             case true: 
//                 acc[0] += isNaN(Number(cur[0]))? 1: Number(cur[0]);
//                 break;
//             case false:
//                 acc[1] +=  Number(cur)
//         break;}
//         return acc;
//     }, [0,0])
//     .map((item,index) => 
//          {switch (index) {
//              case 0 :
//                  return item === 0? "" : `${item}x`;
//              case 1 :
//                  return item === 0? "" : String(item);
//          }})
//     .filter(term => term !== "")
//     .join(" + ")


/*
* 첫번째 결과: 정확성 33 %
* + 가 없는경우 그냥 polynomial 을 반환
* 두번째 결과: 정확성 50 %
* 결과에서 x의 개수가 1인경우, 1x 가아니라 x를 반환
* 세번째 결과: 정확성 67 %
* x의 개수가 1의자리 수라는 보장이 없다.
Number(term[0]) 을 Number(term[0].slice(0, term.length -1)) 로 변경
*/

const solution = (polynomial) => {
    if (!/[+]/.test(polynomial)){
        return polynomial
    }
    const termsArray = polynomial.split(" + ")
    const x = termsArray
            .filter(item => /[x]/.test(item))
            .map(term => term.length === 1? 1 : Number(term.slice(0, term.length - 1)))
            .reduce((acc,cur) => acc = acc + cur,0);
    const n = termsArray
            .filter(item => !/[x]/.test(item))
            .map(term => Number(term))
            .reduce((acc,cur) => acc = acc + cur,0);
    if(!x) {
        return String(n)
    }
    if(!n) {
        return (x ===1)? `x`: `${x}x`;
    }
    return  (x ===1)? `x + ${n}` : `${x}x + ${n}`
}
