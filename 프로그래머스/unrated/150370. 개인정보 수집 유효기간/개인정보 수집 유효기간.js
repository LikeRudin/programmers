/* 1. privacies의 계약일을 만료일로 변환
*    - term을 객체로 변환{[term:key]: string}   
*    - privacies의 년-월-일을 전부 일 단위로 바꾼다.
*    - 위에서 바꾼 값에 (term 기간 * 28 - 1) 을더함
*    - expirationDates 만료일 배열 에 저장
*   
*  2. today도 일로 바꿈 => todayDates
*      expirationDates위를 순회하며 
*      todayDates와 크기를 비교
*      todayDates가 더크다 => 만료됨 =>  빈 배열에 인덱스 +1 push
*  3. 인덱스 +1 값들이 삽입된 배열을 반환
*/

const solution = (today, term, privacies) => {
    const termsObj = {};
   
    term.forEach(item => {
        const [term, duration] = item.split(" ");
        termsObj[term] = Number(duration);
    });
    
    const expirationDates = privacies
    .map(item=>item.split(" "))
    .map(arr =>{
        const [date, term] = arr;
        const [year, month, day] = date.split(".").map(num => Number(num));
        const days = (year * 12 + month + termsObj[term]) * 28 + day -1;
        return days;
    });
    console.log(`expirationDates: ${expirationDates}`)
    
    
    const todayArray = today.split(".").map(item => Number(item))
    const [tYear, tMonth, tDay] = todayArray;
    const todayDate = (tYear * 12 + tMonth) *28 + tDay; 
    
    const answer = [];
    expirationDates.forEach((date, index) => {
        if (todayDate > date){
            answer.push(index +1);
        }
    });
    
    return answer;
    
    
    
}
    