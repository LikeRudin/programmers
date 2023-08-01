// const solution = (my_string) => my_string.split("").reduce((acc, item) => {
//     if (acc.includes(item)) {
//         return acc
//     }
//     acc.push(item)
//     return acc
    
// }, []).join("")

const solution = (my_string) => [...new Set(my_string)].join("");
