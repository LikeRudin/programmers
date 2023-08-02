// const solution = (my_string) => my_string.match(/[0-9]+/g)? my_string.match(/[0-9]+/g).map(x => Number(x)).reduce((acc,cur) =>  acc + cur, 0) : 0

const solution = (my_string) => my_string.split(/\D+/i).map(x => Number(x)).reduce((acc,cur) => isNaN(cur)? acc : acc + cur, 0)