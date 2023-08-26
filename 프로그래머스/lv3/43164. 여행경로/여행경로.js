// ## 함수설명
// 공항의 항공권을 묘사한
// [출발지, 도착지]쌍의 값을 성분으로 갖는 배열tickets 를 입력받습니다.
// 티켓을 전부 소모할때, 방문한 공항을 순서대로 담은 배열을 반환합니다. 
// 단, 답안이 될 수있는 배열이 여러개일때, 
// 각 배열의 성분을 비교하여, 사전에 앞쪽에 나오는 순서의 배열을 반환합니다.
// 
// 공항은 중복방문할 수 있습니다. 공항 방문여부를 따지지 않아도됩니다.
// 하지만 티켓은 소모품이기에,  ${from}${next} 형태로 Set visited 에 담아 사용을 체크했습니다.

// 방문경로를 모두 나열한값을 선택하는데 적절한것은 DFS이지만, BFS로도 구현을 시도해봤는데
// 용량/ 시간으로 테스트코드부터 컷당해서 바로 DFS로 바꾸었습니다.

// ## 해설

// 1. 각 공항과 비행정보를 그래프로 변환 
// 티켓을 방향 노드로 보고 각 map 객체에 
// 출발지: Set(도착지) 형태로 저장

// 2. dfs 백트래킹 순회를 통해 티켓을 전부 소모하는데 성공한 경우만 answer 배열에 담아 반환

// 신경쓸만한 포인트
// 항공편이 없는경우도 있어서 nodeAndEdge.get(from) 의 결과가 set이 아닌경우엔
// null/undefined 참조문제가 발생합니다  따라서 논리연산자로 빈 배열을 넣어주었습니다.

// 항공편이 여러개인경우도있습니다. 
// 처음에는 visited를 Set으로 설정하고, 방문을 체크할때
// visited.has(`${from}${to}`) 를 사용했으나
// visited를 Map으로 변경하고, `${from}${to}`: ticketNum을 저장해주었습니다.


const dfs = (nodeAndEdge, visited, from, tmp, trigger, answer)=> {
    if (tmp.length === trigger) {
        answer.push(tmp)
    }
    const toList = nodeAndEdge.get(from) || [];
    toList.forEach(next => {
        const ticketNum = visited.get(`${from}${next}`);
        if (ticketNum){
            visited.set(`${from}${next}`, ticketNum - 1);
            dfs(nodeAndEdge, visited, next, [...tmp, next], trigger, answer)
            visited.set(`${from}${next}`, ticketNum);
        }
    });
    return answer
}

const solution = (tickets) => {
    const nodeAndEdge = new Map();
    const visitedMap = new Map();
    tickets.forEach(([from, to ])=>{
        visitedMap.set(`${from}${to}`, 1 + (visitedMap.get(`${from}${to}`) || 0))
        switch (nodeAndEdge.has(from)){
            case true:
               nodeAndEdge.get(from).add(to)
               break;
            case false:
               nodeAndEdge.set(from, new Set([to]));
       }
    });
    
    const startPoint = "ICN";
    const travelList = dfs(nodeAndEdge, visitedMap, startPoint, [], tickets.length, []);
    return [startPoint, ...travelList.sort()[0]]
}