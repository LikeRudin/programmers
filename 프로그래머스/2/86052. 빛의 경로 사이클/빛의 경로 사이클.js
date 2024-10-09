/*
* 입력값: grid - string[]
* 출력값: number[] 모든 사이클의 길이를 오름차순으로 정렬한 값
*
*
* 의구심 
* 1. 사이클이 형성이안되면 어떡하지?
*    시작점과 방향에 관계없이 모든 빛은 사이클을 형성하는가? 
*    
*    수학적 귀납법으로 생각해보면 그렇다.
* 
*    grid를 n*m의 2차원 행렬이라고 생각해 볼경우 
*    각 성분 string의 길이를 n, 성분의 갯수를 m으로 생각할 수있다.
*    n =1 인 상황에서 m = p 일때 싸이클이 형성된다고 가정하면, m = p + 1일때도 싸이클이 형성된다.
*    
*    만약 사이클이 형성되지 않는다고 가정해보자.
*    가정: n = 1, m = p 일때, 어떤 지점에서 어떤 방향으로 나갔던, 자기자신으로 돌아오는 사이클이 존재한다.
*    이제 한개의 열을 추가하여 m = P + 1에 대해 생각해보자.
*    추가된 열은 길이가 1 인 string이므로, 간편하게 추가점이라 불러보자
* 
*    추가점에서 아무 방향으로 나간 빛은 추가점으로 돌아오거나, 
*    기존의 p개의중 1개의 지점에 도달하고, 방향이 변경된다.
* 
*    이 점을 첫 시작점, 그 방향을 첫 방향 이라고 해보자. 
*    가정한대로, 첫 시작점에서는 자기자신으로 다시 돌아와서 첫 방향으로 나가는 사이클이 반드시 존재한다.
*    그런데 그렇게 해주려면, 사이클이 완성되기 전 지점에서, 시작 방향과 똑같은 방향으로 굴절해주도록 쏴주는 빛* *    이 필요하다. 
*    
*    그것이  P + 1이 아닌경우는 존재할 수없다.
*    이제 p = 1일떄와 2일때 사이클이 언제나 형성된다는것만 밝힌 후 
* 
*    m을 미지수로 고정하고 마찬가지로 n으로 넘어가서 증명하면된다. 
*
*    => 반례 찾으시는분 이메일주세요. blueskyto@me.com
*  
* 
* 문제 1. 사이클을 확인하는 방법
* 문제 2. 모든 경우의수를 확인하는 방법
* 문제 3. 중복을 제거하는 방법.
* 
* 1. 사이클 확인하기
*
* 출발지점을 같은 방향으로 굴절되며 나가는 빛이 있이있다면 , 싸이클이 형성된것이다.
* 한칸씩 이동할때마다 숫자가 증가하는 count를 두고, 만약 현재 위치와 방향이 출발시와 같다면, count를 answer * 배열에 저장한다
* 
* 2. 모든 경우의 수 따지기 (모든 지점에서의 모든 방향으로의 출발에 대해 조사)
*
* - 행, 열, 방향 이렇게 3겹의 요소에대해 순회를 진행하면, 모든 위치, 모든방향에서 출발하는 빛에대한 사이클을 검사할 수있다.
*    (행번호: grid인덱스, 
*     열번호:  grid의성분 string의 인덱스
*     방향: 동서남북, EWSN 4방향
)
* 
* 3. 중복 제거
* 
*     현재 순회에서 한 상태의 위치와 방향값이 이전 순회를 통틀어 한번이라도 동일하게 나온적이 있다면
*     지금 탐색중인 cycle은 이미 탐색한 cycle이다.
*    
*     전체 pathMemo를 만들어서, 경로 탐색시마다 위치와 방향에 대한 정보가 이미 존재하지 않는지 확인한다.
*     - 메모되어있지 않다면 메모한 후, 탐색을 계속한다.
*     - 만약 메모되어있고, 그 부분이 시작점의 상태와 일치한다면 이는 새로운 사이클이다.
*        - 현재의 경로 길이 COUNT를 ANSWER 배열에 삽입하고, 현재 시작점에대한 탐색을 종료한다.
*     - 만약 메모된것과 일치하고, 시작점의 상태와는 일치하지않는다면, 이는 이전의 사이클을 재탐색중인것이다.
*     
* 4. 탐색하기
*    위치와 방향을 입력받았을때, 다음 위치와 방향을 반환하는 함수를 만든다.
*    - 위치는 grid와 그 성분 string의 index를 활용한 2차원 좌표계라고 생각할수있다.
*    - 현 위치와 방향을 토대로 다음위치의 격자 성분(RLS)을 구하고, 다음 방향을 계산한다. 
*    - 방향은 NSEW 4벙형이 았다.
*     
*/
const solution = (grid) => {
    
    const reflactorMap = {
        "N": {"S":"N", "R": "E", "L": "W"},
        "S": {"S":"S", "R": "W", "L": "E"},
        "E": {"S":"E", "R": "S", "L" :"N"},
        "W": {"S":"W", "R": "N", "L": "S"},
    }
    
    const maxX = grid[0].length -1;
    const maxY = grid.length -1;
    
    const move = (x,y,direction) =>{
        let xCoords = x;
        let yCoords = y;
        
       if (direction === "N"){
           yCoords = (y < maxY) ? y + 1 : 0;
       } else if (direction === "S"){
           yCoords = (y > 0) ? y - 1: maxY;
       } else if (direction === "E"){
           xCoords = (x < maxX) ? x + 1: 0;
       } else if (direction === "W"){
           xCoords = (x > 0) ? x - 1: maxX
       }
        const reflactor = grid[yCoords][xCoords]
        const newDirection = reflactorMap[direction][reflactor]
        return {
            x: xCoords,
            y: yCoords,
            direction: newDirection
        }
    }
    
    
    
    const directions = ["N", "S", "E", "W"]
    const pathMemo = new Set();
    const answer = [];
    
    const exploreCycle = (xCoords,yCoords,startingDirection) => {
        const startingVector =`${xCoords}-${yCoords}-${startingDirection}`
        
        if(pathMemo.has(startingVector)) {
            return
        } 
        pathMemo.add(startingVector);
        
        let x = xCoords
        let y = yCoords
        let direction = startingDirection
        let cycleLengthCount = 0;
        
        while(true) {
            cycleLengthCount++;
            const {x:newX, y:newY, direction: newDirection} = move(x,y,direction)
            x = newX
            y = newY
            direction = newDirection
            
            const pathVector = `${x}-${y}-${direction}`
            if(startingVector === pathVector){
                answer.push(cycleLengthCount)
                break
            }
            if (pathMemo.has(pathVector)){
                break
            }
            pathMemo.add(pathVector)
        }
    }
    
    
    grid.forEach((row, yCoords)=> {
        [...row].forEach((point, xCoords) =>{
            directions.forEach(startingDirection =>{
                exploreCycle(xCoords, yCoords, startingDirection)
            })
        })
    });
    
    return answer.sort((a,b) => a-b)
}