/*
* 1. i번째 숫자부터 j번쨰 숫자까지 자름
* 2. 정렬
* 3. 해당배열에서 k번째 숫자 출력
*/
const solution = (array, commands) => {

    let answer = [];
    commands.forEach(command => {
        try{
        if (array.length === 1){
            throw new Error(`arrlenth is 1`)
        }
        const [startEdge,EndEdge,targetIndex] = command;
        const targetList = [...array].slice(startEdge -1, EndEdge).sort((a,b) => a-b);
        answer = [...answer, targetList[targetIndex -1]]
        } catch (e) {
            console.log(e)
            answer = [...answer, array[0]]}
    });
    return answer
 
}

