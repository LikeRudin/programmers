const solution = (num) => {
    let number = num;
    let count = 0;
    while(number !== 1){
        count++;
        if (count === 500) {
            count = -1;
            break;
        }
    switch (number % 2) {
        case 0:
            number /= 2;
            break;
        case 1:
            number *=3;
            number++;
            break;
    }
            
    }
return count
}

