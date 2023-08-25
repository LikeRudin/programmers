

// const dfs = (cur, maps, goal, count, visit) => {
//     const [y, x] = cur;
//     const [targetY, targetX] = goal;
    
//     if (x === targetX && y === targetY) {
//         return count
//     }
//     // 방문처리
//     visit[`${y}${x}`] = true;
    
//     // 방문가능한 위치 계산
//     const movePoints = [
//         [y, x+1],
//         [y, x-1],
//         [y+1,x],
//         [y-1,x]];
//     const ableLocations = movePoints
//         .filter(([y,x]) => 
//                 x >= 0 &&
//                 y >= 0 &&
//                 y < maps.length &&
//                 x < maps[0].length &&
//                 maps[y][x] === 1 &&
//                 !visit[`${y}${x}`]
//         );
   
//     // 방문 불가시 종료
//     if(!ableLocations.length){
//         return -1
//     }
    
    
//     let answer = -1;
    
//     ableLocations.forEach(point => {
//         const [newY, newX] = point;
//         if (!visit[`${newY}${newX}`]){
//             visit[`${newY}${newX}`] = true;
//             const result = dfs([newY, newX], maps, goal, count + 1, visit);
            
//             // 성공한 거리중 최단거리로 갱신
//             if (result !== -1){
//                 if (answer === -1 || result < answer) {
//                 answer = result;
//                 }
//             }
//             visit[`${newY}${newX}`] = false;
//         }
//     });
//     return answer
// }
                       
    
// const solution = (maps) => {
//     // xy 좌표로 n*m 배열을 나타낼시 각 성분의 좌표는 y, x 가 된다
//     const goal = [maps.length -1, maps[0].length -1,];
//     const answer = dfs([0,0], maps, goal , 0, {"00": true});
//     return (answer !== -1)? answer + 1 : answer
// }


const solution = (maps) => {
    const [goalX, goalY] = [maps[0].length -1, maps.length -1];
    const queue = [{x:0, y:0, count:1}];
    const visited = new Set(["00"])
    
    while(queue.length){
        const {x, y, count} = queue.shift();
        
        if (x === goalX && y === goalY) {
            return count
        }
        
        const movePoints = [[y, x +1], [y, x-1],[y+1, x], [y-1,x]];
        const nonVisitedPoints = movePoints.filter(([y,x]) => {
            return (y >= 0 &&
                    y <= goalY &&
                    x >= 0 &&
                    x <= goalX &&
                    maps[y][x] === 1 &&
                    !visited.has(`${y}${x}`)
                   )
        });
        
        nonVisitedPoints.forEach(coords => {
            const [nextY, nextX] = coords;
            queue.push({x:nextX, y:nextY, count: count + 1 });
            visited.add(`${nextY}${nextX}`);
        });
        
    }
    return -1
}