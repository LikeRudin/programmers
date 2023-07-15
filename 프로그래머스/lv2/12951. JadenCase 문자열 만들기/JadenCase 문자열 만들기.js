/*
* 제한조건을 잘 읽자
* s 의 길이는 1 이상  200 이하
* - s 의 길이가 1일때 s.split(" ")[1] 을 참조할 수 없다.
* 마찬가지로 s.split(" ").map(item => {} ) 에서도 item의 길이를 확인해야한다. 
*/

const solution = (s) => {
    if (s.length <= 1) {
        return s.toUpperCase()
    }
    
    return s.split(" ").map(item =>{
        if (item.length <= 1) {
            return item.toUpperCase();
        }
        else { 
            return item[0].toUpperCase() + item.slice(1,item.length).toLowerCase()
        }
    }).join(" ")};
