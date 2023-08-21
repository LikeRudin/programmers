function solution(myString, pat) {
    const answer = [...myString].map(x=> (x === "A")? "B": "A").join("").match(RegExp(pat, "i"))
    return answer? 1 : 0
}