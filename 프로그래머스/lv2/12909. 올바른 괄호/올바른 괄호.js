const solution = (s) => {
    let count = 0;
    for (let i =0; i <s.length; i++){
        (s[i] ==="(")? count++ : count--;
        if(count < 0) {
            return false;
        }
    }
    return (!count)
}