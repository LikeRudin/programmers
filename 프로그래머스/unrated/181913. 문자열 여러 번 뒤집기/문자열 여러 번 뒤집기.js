
function solution (my_string, queries) {
  
    for (let item of queries) {
     my_string = my_string.slice(0, item[0]) +
                 my_string.slice(item[0], item[1] +1).split("").reverse().join("") +
                 my_string.slice(item[1] + 1)
    }
    
    return my_string
}