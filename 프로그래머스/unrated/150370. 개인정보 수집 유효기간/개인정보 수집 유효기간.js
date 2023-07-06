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
    