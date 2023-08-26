const solution = (n,vertex) => {
    const nodeAndVertex = new Map();
    vertex.forEach(([from,to])=> {
        switch(nodeAndVertex.has(from)){
            case true:
                nodeAndVertex.set(from, nodeAndVertex.get(from).add(to));
                break;
            case false:
                nodeAndVertex.set(from, new Set([to]));
                break;
        }
        switch(nodeAndVertex.has(to)){
            case true:
                nodeAndVertex.set(to, nodeAndVertex.get(to).add(from));
                break;
            case false:
                nodeAndVertex.set(to, new Set([from]));
                break;
        }
    });
    const queue = [[1, 0]];
    const visited = new Map();
    visited.set(1,0);
    
    while(queue.length){
        const [cur, distance] = queue.shift();
        const linkedNodes = nodeAndVertex.get(cur) || [];
        linkedNodes.forEach((next)=> {
            if (!visited.has(next)){
                visited.set(next, distance + 1);
                queue.push([next, distance + 1]);
            }
            
        });
    }
    
    const max = Math.max(...visited.values());
    const answer = Array.from(visited.values()).filter(x=> x === max).length
    return answer;
}