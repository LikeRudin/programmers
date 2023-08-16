const solution  = (sizes) => {
    const sortedSizes = sizes.map(item => item.sort((a,b)=> a - b))
    return Math.max(...sortedSizes.map(x => x[0])) * Math.max(...sortedSizes.map(x => x[1]))
}