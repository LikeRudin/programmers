const solution = (numbers)=> [1,2,3,4,5,6,7,8,9].reduce((acc,cur)=> numbers.includes(cur) ? acc: acc+cur ,0)
