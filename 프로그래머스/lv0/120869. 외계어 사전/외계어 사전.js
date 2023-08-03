const solution = (spell, dic) => {
   const candidate = dic.filter(x => x.length === spell.length);
    if (!candidate.length){
        return 2
    }
    
    let words = candidate;
    
    for (const char of spell) {
        words = words.filter(x => x.includes(char))
    }
      if (!words.length) {
      return 2;
    }
    
    return 1
    
}