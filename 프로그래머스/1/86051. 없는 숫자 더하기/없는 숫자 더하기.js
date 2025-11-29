const solution = (numbers) => {
  const set = new Set(numbers)
  return [1,2,3,4,5,6,7,8,9].reduce(
    (sum, n) => set.has(n) ? sum : sum + n,
    0
  )
}