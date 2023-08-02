const solution = (numbers) => {
    const answer = []
    const dict = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    }
    for (let i =0; i < numbers.length ;i++){
        for (const word in dict){
            if (word === numbers.substring(i, i + word.length)) {
                answer.push(dict[word]);
                i = i + word.length -1 ; 
                break;
            }
        }
    }
    return Number(answer.join(""))}