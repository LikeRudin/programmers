const solution = (n, lost, reserve) => {
    lost.sort()
    const reserveSet = new Set(reserve.filter(item => !lost.includes(item)));
    const peopleInNeed = lost.filter(item => !reserve.includes(item));
    
    const couldNotBorrowed = peopleInNeed.filter(stolen=> {
        if (reserveSet.has(stolen - 1)) {
            reserveSet.delete(stolen - 1);
            return false
        } else if (reserveSet.has(stolen + 1)) {
            reserveSet.delete(stolen + 1);
            return false
        }
        return true}
    ).length;

    return n - couldNotBorrowed;
}