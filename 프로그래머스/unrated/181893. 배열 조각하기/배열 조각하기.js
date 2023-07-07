/*
* 짝수 홀수 판단 -> (n % 2 === 0)? 짝수 : 홀수 
* slice 를 이용 slice는 배열을 변형하지 않는다.
* 
*/
const solution = (arr, query) => {
    query.forEach((num, index) => {
        switch(index % 2) {
            case 0:
                arr = arr.slice(0, num + 1);
                break;
            case 1:
                arr = arr.slice(num, arr.length);
                break;
        }
    });
                  return arr;
    }