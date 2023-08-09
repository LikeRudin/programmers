
const solution = (progresses, speeds) => {
    const remainDays = progresses.map((progress,index) => Math.ceil((100 - progress)/speeds[index]));
    const firstDeployment = remainDays[0];
    const lastWorkFlag = remainDays.length -1;
    let deploymentStack = [];
    let count = 0;
    
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
    }, [firstDeployment, count, deploymentStack, lastWorkFlag])[2]
    return answer
}
                   

