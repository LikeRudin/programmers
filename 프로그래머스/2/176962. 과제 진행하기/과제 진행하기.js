// 과제를 끝낸 순서대로 배열에 담아 리턴하기
//1. 시작시간/종료시간 계산 
//2. 과제 시작 시각 순으로 정렬 - 시작 시각을 기준으로 plans 정렬
//3. 과제 순차적 진행 - 빠른 시각부터 차례대로 과제 시작
//4. 새 과제 시작 시 기존 과제 중단 후 대기, 이때,queue
//  - 순차 큐 개념
//  - 새 과제 시작 시, 진행 중인 과제는 대기 목록에 추가
//5. 과제 종료 시 대기 과제 재개 - 완료 후 대기 중인 과제가 있으면 최근에 멈춘 것부터 재개
//6. 대기 과제와 새 과제 우선순위 관리 - 완료 시 새 과제가 있다면 우선 시작, 이후 대기 과제 진행
//7. 완료된 과제 순차적 기록 - 완료된 과제를 순서대로 결과 배열에 저장
//

// 지난번에 풀지못한이유: 과제의 시작시간 및 남은시간을 고려하지 않았다.
//이번에는 endTime을 없애고, duration(남은시간)으로 교체했다.
// 종료시간은 startTime +duration으로 구했고,
// 그리고, 대기리스트에 넣을때마다, duration 시작시간 - 교체시간만큼을 duration에서 재했다.
//
const solution = (plans) => {
  // 1. 시작 시간과 종료 시간 계산
const tasks = plans.map(aPlan => {
  const [name, start, playTime] = aPlan;
  const [hour, minute] = start.split(":").map(Number);
    
  const startTime = hour * 60 + minute;  
  const duration = + +playTime
  return { name, startTime, duration };
});

  // 2. 과제 시작 시각 순으로 정렬
  // toSorted안됨  
    
  tasks.sort((a, b) => a.startTime - b.startTime);
    
  const completedTasks = []; 
  const waitingTasks = [];   
  let currentTask;    

    for (const nextTask of tasks) {
        while (currentTask && currentTask.startTime + currentTask.duration <= nextTask.startTime){
            completedTasks.push(currentTask.name)
            
            if (waitingTasks.length > 0) {
                const waitingTask = waitingTasks.pop();
                waitingTask.startTime = currentTask.startTime + currentTask.duration;
                currentTask = waitingTask
            } else {
                currentTask = null;
            }
        }

        if (currentTask && currentTask.startTime + currentTask.duration > nextTask.startTime){
            currentTask.duration =  currentTask.duration - (nextTask.startTime -currentTask.startTime) 
            waitingTasks.push(currentTask)
        }
           currentTask = nextTask
    }
        while (currentTask) {
        completedTasks.push(currentTask.name);
        currentTask = waitingTasks.pop() || null;
    }
  return completedTasks;
}