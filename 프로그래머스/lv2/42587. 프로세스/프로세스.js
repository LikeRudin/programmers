/*
* 1. 인출한다
* 2. 내부 성분에 우선순위 점수가 높은것이 있는지 확인한다
* 3. 없으면 실행
* 4. 반복
*/
const solution = (priorities, location) => {
    let queue = [...priorities];
    let currentLocation = location;
    let count = 0;
    while (queue.length){
        const [check, ...tasks]= queue;
        if (check >= Math.max(...tasks)){
            count++;
            queue = [...tasks];
            if (!currentLocation) {
                return count;
            }
        } else {
            queue = [...tasks, check];
        }
        currentLocation = Boolean(currentLocation)? currentLocation -1 : queue.length -1;
    }
    
}
