//dfs로 풀어보자.
//dfs를 통해 인접한노드를 모두 방문하고, 해당 노드에대한 flag를 false로 바꿔준다.
// bfs 로도 풀 수있다.

const dfs = (computers, visit, i) => {
    visit[i] = true;
    
    for (let j = 0; j < computers.length; j++){
        if(!visit[j] && computers[i][j]){
            dfs(computers,visit,j)
        }
    }
}

const bfs = (computers, visit, i) => {
    visit[i] = true
    const queue = [];
    queue.push(computers[i]) 
    
    while(queue.length){
        connections = queue.pop();
        connections.forEach((connected,index) => {
            if (!visit[index] && connected){
                visit[index] = true;
                queue.push(computers[index]);
            }
        })
    }
}

// const solution = (n, computers) => {
    
//     const visit = Array(n).fill(false)
//     let networkNum = 0;
//     for (let i = 0; i< computers.length; i++){
//         if (!visit[i]){
//             dfs(computers,visit,i);
//             networkNum++;
//         }
//     }
//     return networkNum
// }
const solution = (n, computers) => {
    
    const visit = Array(n).fill(false)
    let networkNum = 0;
    for (let i = 0; i< computers.length; i++){
        if (!visit[i]){
            bfs(computers,visit,i);
            networkNum++;
        }
    }
    return networkNum
}


