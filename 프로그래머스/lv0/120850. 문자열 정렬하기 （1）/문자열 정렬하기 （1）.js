/**Number(string) gives NaN and typeof NaN === 'number'*/

// const solution = (my_string) => my_string
//                                     .split("")
//                                     .map(x => Number(x))
//                                     .filter(y => !isNaN(y)).sort(a - b)


const solution = (my_string) => my_string.match(/\d/g).map(x => Number(x)).sort()