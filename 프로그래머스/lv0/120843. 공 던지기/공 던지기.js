/**
* 1. 한번에 2칸씩 이동
* 2. 0 ,2, 4 , 6... 
* 3. 범위를 벗어나면 왼쪽 처음으로 돌아감 -> %
* 4. (K -1) * 2 % numbers.length 
*/
const solution = (numbers, k) => numbers[2 * (k -1) % numbers.length];
