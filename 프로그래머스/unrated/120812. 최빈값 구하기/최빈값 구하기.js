const solution = (array) => {
    const frequencyMap = new Map();
    array.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1 )
    })
    const highestFrequency = Math.max(...frequencyMap.values());
    const frequencies =  [...frequencyMap.keys()].filter(num => frequencyMap.get(num) === highestFrequency)
    return frequencies.length === 1? frequencies[0] : -1
} 