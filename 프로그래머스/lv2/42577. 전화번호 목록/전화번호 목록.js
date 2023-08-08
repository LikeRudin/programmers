const solution = (phone_book) => {
    const hashMap = {}
    phone_book.forEach(item => {
        hashMap[item] = true;
    });
    try{
    phone_book.forEach(number => {
        for (let i = 0; i < number.length; i++){
            const prefix = number.slice(0,i);
            if (hashMap[prefix]){
                throw new Error("found prefix");
            }
        } 
    })}
    catch(e) {
        console.log(e);
        return false
    }
    
    return true;
}

