/*
* 행 / 열의 변화와 방향을 관찰하자.
* 1. 행을 고정하고, 열을따라서 값을 입력한다
* - arr[0][i] ,    i: [0 -> n-1] 
* 
* 2. 열을 고정하고, 행을 따라서 값을 입력한다
* - arr[i][n-1]    i: [1 -> n-1]
*
* 3. 행을 고정하고, 열을따라서 값을 입력한다.
* - arr[n-1][i]    i: [n-2 -> 0]
* 
* 4. 열을 고정하고, 행을 따라서 값을 입력한다.
* - arr[i][0]      i: [n-1 -> 1]
*
* 결론: 
* 4개의 for loop를 묶은 커다란 loop를 만들자.
* 방향제어 및 for loop의 길이를 감독할 flag 도 4개 만들자
* 
* 각 for문이 끝날때마다 flag 값을 변경해주어야한다.
* 고정값이 0부터 출발할때에는, 1을 증가시켜주고
* n-1 부터 출발할떄에는 1을 감소시켜주자
* 
* Empty Array를 생성하는 방법
* 길이가 n인 Array를 생성하려면 Array(n) 을 해주면 된다.
* - 해당 Array는 길이속성값만 n이고, 실제로 가지고있는 성분은 없다.
*    Array(n).map(x => Array(n)) 은 Array(n)과 같다.
* 다음 방법으로 만든 Array에 map을 써주자.
* - Object.keys(Array(n))  : 오름차순 숫자 값 배열 
* - [...Array(n)] : undefined 값 n개를 가진 배열
* 
*/

const solution = (num) => {
    const answer = [...Array(num)].map(x => Array(num))
    let n = 1;
    let columnStartIndex = 0
    let columnEndIndex = num -1;
    let rowStartIndex = 0;
    let rowEndIndex = num -1;

    
    const numSquare = num **2
    while (n <= numSquare) {
        
        for (let i = columnStartIndex; i<= columnEndIndex; i++ ){
            answer[rowStartIndex][i] = n++;
        }
        rowStartIndex++;
        
        for (let i = rowStartIndex; i <= rowEndIndex; i++ ){
            answer[i][columnEndIndex] = n++;
        }
        columnEndIndex--;
        
        for (let i = columnEndIndex; i >= columnStartIndex; i--){
            answer[rowEndIndex][i] = n++;
        }
        rowEndIndex--;
        
        for (let i = rowEndIndex; i>= rowStartIndex; i--){
            answer[i][columnStartIndex] = n++;
        }
        columnStartIndex++;
    } 
    return answer
}