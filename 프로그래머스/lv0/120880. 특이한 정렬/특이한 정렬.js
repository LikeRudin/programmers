const solution = (numlist, n) => numlist
.sort((a,b) => (Math.abs(n - b) === Math.abs(n - a))? b - a : Math.abs(n - a) - Math.abs(n - b))
