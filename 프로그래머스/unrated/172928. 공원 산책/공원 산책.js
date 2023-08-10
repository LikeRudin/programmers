/* 1. 현재 위치를 확인한다.
*  2. N S W E  / N S는 [여기][] / W E 는 [][여기]
*  3. 
*  4. 
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
        let [row, column] = acc.slice();
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