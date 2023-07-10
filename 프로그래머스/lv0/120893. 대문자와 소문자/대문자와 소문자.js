const solution = (my_string) => my_string.split("").reduce((acc, cur) => acc + (/[A-Z]/.test(cur)? cur.toLowerCase() : cur.toUpperCase())
, "");