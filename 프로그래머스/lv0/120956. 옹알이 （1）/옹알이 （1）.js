const solution = (babbling) => babbling.reduce((acc, cur)=> {
        const matchArray = cur.match(/aya|ye|woo|ma/g);
        const matchLength = (matchArray !== null)? matchArray.join("").length : 0;
        const soundLength = cur.length;
        if (matchLength === soundLength) {
            console.log(`${matchArray}, ${cur}`);
            return acc + 1;
        }
        else {return acc}
        
}, 0)