const solution = (quiz) => 
    quiz.map(x =>  { const [expression, answer] = x.split("=")
    return eval(expression) === Number(answer)? "O" : "X" })