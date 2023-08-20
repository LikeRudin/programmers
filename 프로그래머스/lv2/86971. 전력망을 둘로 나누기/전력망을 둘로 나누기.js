const makeFilledArray = (n, item) => {
    return Array(n + 1).fill(item)
}

const bfs = (node, tree, visited, wire, cnt) => {
    const queue = [[node, tree, visited, wire]];
    visited[node] = true;
    while (queue.length) {
        const [node, tree, visited, wire] = queue.shift();
        cnt++;
        for (const i of tree[node]) {
            if (!((node === wire[0] && i === wire[1]) 
                  || (node === wire[1] && i === wire[0]))) {
                if (!visited[i]) {
                    visited[i] = true;
                    queue.push([i, tree, visited, wire]);
                }
            }
        }
      }
    return cnt
}


const solution = (n, wires) =>{
    let answer = 100;
    let graphForm = makeFilledArray(n,[]);
    wires.forEach(wire=> {
        const [index, element] = wire;
        graphForm[index] = [...graphForm[index], element];
        graphForm[element] = [...graphForm[element], index];
    });
    wires.forEach(wire => {
        const visited = makeFilledArray(n+1, false);
        const temp = [];
        for (let i = 1; i <= n; i++) {
            if (!visited[i]) {
                const cnt = bfs(i, graphForm, visited, wire, 0);
                temp.push(cnt);
            }
        }
        answer = Math.min(answer, Math.abs(temp[0] - temp[1]));  
    })
    return answer
}