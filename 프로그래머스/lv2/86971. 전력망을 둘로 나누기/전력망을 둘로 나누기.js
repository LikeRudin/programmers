// 만들어야하는 함수는 `노드의 개수` n 과 
// 각 `노드의 연결을 나타낸 배열을 성분으로 갖는 배열` wires을 입력받습니다.
// ex [[1,3][2,3]] - 1번노드와 3번노드, 2번노드와 3번노드 연결

// 함수는 특정 연결을 하나 끊었을때 생성되는 
// 두개의 연결그래프의 노드 개수 차이의 최솟값을 반환해야합니다. 

// 전략
// 1. wires에 있는 배열의 성분을 통해 
// 그래프를 연결리스트의 형태로 변환합니다.
// Map을 사용했습니다.

// 2. bfs를 통해 그래프를 순회하며 노드의 개수를 셉니다
// - 그냥 순회하는것이아니라, 특정 wire 하나의 연결이 해제된 경우의 노드개수를 셉니다.
// -visitedMap 은 각 인덱스별 방문여부를 Boolean값으로 저장한 객체입니다.
// for문 내부에서 두번의 순회면 전부 값이 true로 바뀝니다.
// seperatedTrees 배열에는 두개의 값만 들어가게 됩니다.


const makeFilledMap = (n,item)=> {
    const filledMap = new Map()
    for (let i = 1; i <= n; i++){
    filledMap.set(i, item)    
    }
    return filledMap
}

const dequeue = (arr) => {
    return [arr[0], arr.slice(1)]
}

const enqueue = (arr, item) => {
    return [...arr, item]
}

const bfs = (node, tree, visited, wire, numConnected) => {
    let vistedMap = new Map(visited);
    let countNum = numConnected;
    let queue = enqueue([],[node, tree, vistedMap, wire]);
    vistedMap.set(node, true);
    
    while (queue.length) {
        [[node, tree, vistedMap, wire], queue] = dequeue(queue);
        countNum++;
        const edgeList = tree.get(node);
        edgeList.forEach(edgeNode => {
            const isConnected = (new Set([...wire, edgeNode,node]).size ===2)? false : true;
            if (isConnected && !vistedMap.get(edgeNode)) {
                vistedMap.set(edgeNode, true);
                queue = enqueue(queue,[edgeNode, tree, vistedMap, wire]);
            }
        })
    }
    return [countNum, vistedMap]
}


const solution = (n, wires) => {
    
    const graphMap = makeFilledMap(n,[])
    // 그래프의 자료구조를 노드: 엣지배열 형태로 전환
    wires.forEach(wire => {
        const [node, edge] = wire;
        graphMap.set(node, [...graphMap.get(node), edge]);
        graphMap.set(edge, [...graphMap.get(edge), node]);
    });
    
    let answer = n;
    
    // 각 wire를 하나씩 끊어서 연결된 노드 갯수를 탐색
    wires.forEach(wire=> {
        let visitedMap = makeFilledMap(n, false);
        let seperatedTrees = [];
        for (let node = 1; node <=n; node++){
            if (!visitedMap.get(node)){
                let numConnected;
                [numConnected, visitedMap] = bfs(node, graphMap, visitedMap, wire, 0);
                seperatedTrees = [...seperatedTrees, numConnected]
            }
        }
        answer = Math.min(answer, Math.abs(seperatedTrees[0] - seperatedTrees[1]));
        
    });
    return answer
   
}