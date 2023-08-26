// ## 함수설명
// 함수는 두개의 문자열 begin, target과 
// 한개의 문자열 배열 words
// 이렇게 총 3개의 인자를 입력받습니다.
// 이때, 두 문자열과, 배열내부 문자열의 길이는 모두 같습니다.

//  begin의 문자열이 words 내부의 "변환가능"한 문자열을 거쳐
//  target으로 변환 할 수 있다면 필요한 최소 변환수를 반환하고
//  그렇지 못하면 0을 반환합니다.

// ### 변환가능?
// 두개의 문자열 `성분`과 `위치`를 함께비교해서
// 불일치하는경우가 단 한개인경우 서로 "변환 가능"하다 합니다.
//  dig dog / dig dit

// - dig dgi 일치하는 부분이 d 하나이므로 변환불가입니다

// 전략:
// 각 단어를 하나의 그래프상 "정점"으로 보고, "변환가능" 한것을 연결되어있다고 해석했습니다.
// 그렇게 보면 한 점에서 다른점으로가는 최단경로를 찾는 탐색문제로 변화합니다.

// 1. words배열에 begin을 추가하여 새로운 everyNode배열을 만듭니다.
// 2. words 배열을 이중순회하며, 각 단어별 변환가능을 따져 인접 리스트 형태의 그래프 자료구조를 만듭니다.
//   - map에 노드: [엣지배열] 형태로 자료구조를 저장합니다.
//   - 인덱스를 "노드", 변환가능여부를 "edge 존재" 로 해석합니다. 
//   - begin의 인덱스는 0, target의 인덱스는 everyNode.indexOf(target) 으로 설정합니다.
// 3. 일반적인 bfs 탐색을 실행합니다.
//  - queue의 성분: 현재위치 노드와 이동거리 변수 count
//  - 탐색여부를 검사할 자료구조: set
//  - 각 엣지별로 방문기록이없을시, 방문처리를 해주고 queue에 해당 엣지번호와 count +1 을 넣어줍니다.
// 4. 만약 targetIndex 도달에 성공시 count +1을 반환하고, while문 종료시 0을 반환합니다.

// 헷갈렸던 부분
// ### 큐 성분 미스
// count 변수를 queue내부에 삽입하는것이아니라, 외부에 두어서 
// 최단거리가아니라 방문노드 전체를 카운팅하는 문제가 있었습니다. 
// 
// While 내부에서 edge들을 순회할때,  배열의 빌트인메서드 를 사용하며 
// 내부에서 targetIndex를 발견시 바로 반환하도록 설정했었습니다.

// ### 배열의 built-in 메서드내부에서 값을 즉시반환 시도

// 일반적인 while for switch 같은 label 문은 break로 탈출할수있고
// return을 사용시 외부함수를 바로 종료시키며 값을 반환할 수있습니다.
// 하지만 배열의 built-in 메서드에서 return을 사용시, 
// 그저 내부 콜백이 한번 종료될 뿐입니다.
// some이나 every같이 특정 boolean 값을 return 할경우 순회를 종료할 수있는
// 종류도 있긴하지만, 자신의 상위스코프 함수자체를 꺼버리면서 바로 반환하는 기능은 없습니다.
// 그래서 for loop로 바꿔주었습니다.

const checkConnected = (wordA, wordB) =>{
    if (wordA === wordB) {
        return false
    }
    let nonConnected = false;
    for (let i = 0; i < wordA.length; i++){
        if(wordA[i] !== wordB[i]){
            switch(nonConnected){
                case false: {
                    nonConnected = true;
                    break
                }
                case true: {
                    return false;
                }
            }
        }
    }
    return true
}

const bfs = (nodeEdgeGraph, targetIndex) => {
    const visited = new Set();
    const [begin, count] = [0,0]
    
    visited.add(begin);
    const queue = [[begin, count]];
    
    while(queue.length){
        const [currentNode, count] = queue.shift();
        const linkedNodes = nodeEdgeGraph.get(currentNode);
        for (node of linkedNodes) {
            if (!visited.has(node)){
                visited.add(node);
                if (node === targetIndex){
                    return count + 1 
                }
                queue.push([node, count + 1]);
            }
        }
        
    }
    return 0
}

const solution = (begin, target, words) => {
    if (!words.includes(target)) {
        return 0
    }
    const everyNode = [begin, ...words];
    const targetIndex = everyNode.indexOf(target);
    
    const nodeEdgeGraph = new Map();
    everyNode.forEach((wordA,indexA) => {
        const node = indexA;
        const edge = everyNode.map((wordB,indexB) => checkConnected(wordA, wordB)? indexB: "")
            .filter(x => Number.isInteger(x))
        nodeEdgeGraph.set(node, edge);
    });
    console.log(`targetIndex: ${targetIndex}`);
    console.log(nodeEdgeGraph)
    return bfs(nodeEdgeGraph, targetIndex);
}