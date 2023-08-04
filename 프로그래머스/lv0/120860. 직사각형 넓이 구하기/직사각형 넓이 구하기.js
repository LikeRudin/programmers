const solution = (dots) => {
    
    const [x1, y1, x2, y2, x3, y3, x4, y4] = dots.flatMap(x => x);
    
    return ((Math.abs(x1 * y2 - x2 * y1
    +x2 * y3 - x3 * y2
    +x3 * y1 - x1 * y3)
    +
    Math.abs(x2 * y3 - x3 * y2
    +x3 * y4 - x4 * y3
    +x4 * y2 - x2 * y4)))/2
}