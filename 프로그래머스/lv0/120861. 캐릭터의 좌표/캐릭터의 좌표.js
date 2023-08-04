const solution = (keyinput, board) => keyinput.reduce((acc, cur) => {
    switch(cur){
        case "left":
            if (acc[0] === -acc[2]) {
                break;
            }
            acc[0] -=1;
            break;
        case "right":
            if (acc[0] === acc[2]) {
                break;
            }
            acc[0] +=1;
            break;
        case "up":
            if (acc[1] === acc[3]){
                break;
            }
            acc[1] +=1;
            break;
        case "down":
            if (acc[1] === -acc[3]){
                break;
            }
            acc[1] -=1;
            break;
    }
    return acc
}, [0,0, (board[0] -1)/2 , (board[1] -1)/2]).filter((x,i) => i < 2)