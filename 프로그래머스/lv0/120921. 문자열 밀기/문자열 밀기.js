

const solution = (A,B) => {
    let shiftedA = A;
    
    for (let i = 0; i < A.length; i++){
        if (shiftedA === B){
            return i
        }
        shiftedA = shiftedA[A.length -1] + shiftedA.substring(0,A.length - 1);
    }
   
    return -1
}