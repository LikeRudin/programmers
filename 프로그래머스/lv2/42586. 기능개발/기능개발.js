 //acc 구성[완료필요일, 같이완료되는작업수, 배포기능수 스택, 마지막 인덱스]

const solution = (progresses, speeds) => {
    const remainDays = progresses.map((progress,index) => Math.ceil((100 - progress)/speeds[index]))
   
    const answer = remainDays.reduce((acc,item,index) => {
        if (acc[0] >= item){
            acc[1] += 1;
        } else {
            acc[0] = item;
            acc[2] = [...acc[2], acc[1]];
            acc[1] = 1;
        }
        if (index === acc[3]){
            acc[2] = [...acc[2], acc[1]];
        }
        return acc;
    }, [ remainDays[0], 0, [], remainDays.length -1])[2]
    return answer
}
                   

