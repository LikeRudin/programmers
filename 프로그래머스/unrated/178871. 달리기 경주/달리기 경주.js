const solution = (players, callings) => {
    let rank = new Map();
    let reverseRank = new Map();
    Object.entries(players).forEach(x => {
        rank.set(x[1], Number(x[0]))
        reverseRank.set(Number(x[0]), x[1])
        
    })
    
    for (const called of callings){
        const calledRank = rank.get(called);
        const behinderRank = calledRank - 1;
        const behinder = reverseRank.get(behinderRank);
       
        rank.set(called, behinderRank)
        rank.set(behinder,calledRank)
        reverseRank.set(behinderRank, called);
        reverseRank.set(calledRank, behinder);
    }
    return [...rank.entries()].sort((a,b) => a[1]- b[1]).map(x => x[0])
}