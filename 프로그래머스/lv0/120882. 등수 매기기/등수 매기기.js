/*
* 0 반환할 배열 answer를 생성한다
* 1. 학생들의 점수를 넣은배열A을 생성한다.
* 2. 위의 점수중 중복값을 삭제하고, 내림차순으로 정리한 배열B을 생성한다.
*   이때 sort는 기존의 배열 정렬순서를 정렬한다는것을 기억하라
*
* 3. 등수 변수를 만든다.
* 4. for문으로 배열 B 를 순회하며, 배열A의 학생들중, 
*   순회중인 값과 같은 성적을 가진 학생의index를 저장한 배열C를 생성한다.
* 5. 배열 C를 순회하며, answer에서 C의 순회값에 해당하는 index에 rank를 저장한다
* 6. rank 를 배열 C의 길이 만큼 증가시킨다
*/

const solution = (score) => {
    let answer = Array(score.length).fill(0);
    const average = score.map(x => (x[0] + x[1])/2);
    const scores = [...new Set(average)].sort((a,b) => b-a);
    let rank = 1;
    
    for (const score of scores) {
        const eachScore = average.map((item, index) => {
            console.log(`item:${item}, index: ${index}`)
            if (item === score) {
                return [rank, index]
            }
            else return 0
        }).filter(x => x !==0);
        
    
        eachScore.forEach(student => {
            const [rank, index] = student;
            answer[index] = rank;
        });
        console.log(`answer: ${answer}`)
        rank = rank + eachScore.length;
    }
    return answer
}