const solution = (name, yearning, photo) => {
    let dict = new Map();
    
    for (let i = 0; i < name.length ;i++) {
        dict.set(name[i],yearning[i])
    }
    
    return photo.map(people => {
        let score = 0;
        for (const person of people) {
            score +=  dict.get(person) || 0
        }
        return score 
    })
}