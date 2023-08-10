/* 1. 현재 위치를 확인한다.
*      - row, column
*  2. 공원 한계선을 계산한다
*      - vertical, horizontal
*  3. routes를 순회하며 명령어 수행을 확인한다
*      - direction / distance
*      - switch 문으로 NSWE 판별해서 distance값을 현재 [row][column]과 연산한다
*      [-N + S][-W + E]
*      - 중간에 X를 만나면 그대로 명령취소
*      - 문제가 없을경우 현재위치를 수정해준다.
*/
const solution = (park, routes) => {
    const instructions = routes.map(x => x.split(" ").map((y,i)=> (i===1)? +y:y));
    const initRow = park.filter(x => /[S]/.test(x))[0];
    let currentLocation = [park.indexOf(initRow), initRow.indexOf("S")];
    console.log(currentLocation)
    const vertical = park.length - 1;
    const horizontal = park[0].length - 1;
    console.log(`vertical: ${vertical}, horizontal: ${horizontal}`);
    return instructions.reduce((acc, cur) => {
        const [direction, distance] = cur;
        let [row, column] = acc;
        let move = true
        switch(direction){
            case "N":
                 for (let i = 1; i <= distance; i++) {
                    if (row - i < 0 || park[row - i][column] === "X"){
                        move = false;
                    }}
                if (move) {
                        row -= distance
                }
                 
                break;
            case "S":
                      for (let i = 1; i <= distance; i++) {
                    if (row + i > vertical || park[row + i][column] === "X"){
                         move = false;
                    }}
                if (move) {
                    row += distance}
                break;
            case "E":
                          for (let i = 1; i <= distance; i++) {
                    if (column + i > horizontal || park[row][column + i] === "X"){
                         move = false;
                    }}
                if (move) {
                    column  += distance
                    }
                break
            case "W":
                              for (let i = 1; i <= distance; i++) {
                    if (column- i < 0 || park[row][column - i] === "X"){
                         move = false;
                    }}
                if (move) {
                    column  -= distance
                }
                break;
        }
        console.log([row, column])
        return [row, column];
    }, currentLocation)
    
}