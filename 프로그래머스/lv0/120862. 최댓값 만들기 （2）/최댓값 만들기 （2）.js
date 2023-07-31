const solution = (numbers) => (numbers.length >2)? Math.max(...numbers
                                       .flatMap(x=> numbers.
                                                filter(y => y !== x)
                                                .map(z => z * x))) : numbers[0] * numbers[1]