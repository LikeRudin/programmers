const solution = (s, skip, index) => {
    const alphabets = [..."abcdefghijklmnopqrstuvwxyz"];
    const skips = [...skip]
    const allowedAlphabets = alphabets.filter(x => !skips.includes(x));
    const moduloNumber = allowedAlphabets.length;
    
    const dict = {};
    const reverseDict = {};
    [...Object.entries(allowedAlphabets)].forEach(([key, alphabet])=>{
        dict[alphabet] = Number(key);
        reverseDict[key] = alphabet;
    });
    
    const answer = [...s].map(x => reverseDict[(dict[x] + index) % moduloNumber]).join("")
    return answer;
}