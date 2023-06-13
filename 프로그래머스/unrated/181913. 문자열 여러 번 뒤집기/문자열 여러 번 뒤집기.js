
function solution (my_string, queries) {
  
    for (let item of queries) {
     my_string = my_string.substring(0, item[0]) +
                 my_string.substring(item[0], item[1] +1).split("").reverse().join("") +
                 my_string.substring(item[1] + 1)
    }
    
    return my_string
}