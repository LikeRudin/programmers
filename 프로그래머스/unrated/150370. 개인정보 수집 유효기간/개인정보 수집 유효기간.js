const solution = (today, terms, privacies ) => {
    
    const answer = [];
    
    // today를 년 월 일이 들어있는 숫자배열로 바꿈
    const todayArray = today.split(".").map(item => Number(item));
    console.log(`todayArray: ${todayArray}`);
    
    // 검색용 오브젝트
    let termsObj = {}; 
    terms.forEach(item => {
        //split " " 사이에 빈칸 있음
    const [term, duration] = item.split(" ");
    termsObj[term] = Number(duration);
  });;
  
    // 각 string을  년, 월, 일 이들어있는 숫자배열로 바꿈
    const dateArray = privacies.map(item=>{
        const [date, term] = item.split(" ");
        const [year, month, day] = date.split(".").map(unit => Number(unit)) 
        return [year, month, day, term]
    });
    
    console.log(`dateArray: ${dateArray}`)
    
    const expirationDateArray = dateArray.map(item => {
        let [year, month, day, term] = item;
        
        month += termsObj[term];
        if (month > 12.1) {
            year += Math.floor(month / 12);
            month = month % 12;
        }
        if (day > 1.01) {
            day -= 1;            
        } else if (day === 1 && month > 1.01 ){
        month -= 1;
        day = 28;
        } else if (day === 1 && month === 1) {
            year -= 1;
            month = 12;
            day = 28;
        }
        return (((year*12)+ month)*28 + day);
    });
    console.log(expirationDateArray);
    
    const [tYear, tMonth,tDay] = todayArray;
    const standard =(tYear * 12 + tMonth) * 28 + tDay;
    console.log(standard)
    for (let i = 0; i < expirationDateArray.length; i++){
        if (standard > expirationDateArray[i]){
        answer.push(i + 1);}
        
    }
    return answer;
}
    