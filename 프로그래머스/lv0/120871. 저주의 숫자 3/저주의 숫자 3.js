/**
* 1. 마을사람들이 쓰는 수만 포함한 길이가 n인 배열을 만들자.
* 2. 배열은 1부터시작하는 숫자들중에 다음을 제외하면 된다
    - 3으로 나누면 나머지 0
    - /[3]/.test(숫자) 값이 트루
* 해당 배열의 길이가 n이될때, n-1 번 인덱스를 집어넣으면 된다.
*/
const solution = (n) => {
    let nums = [1,2];
    for (let i = 4; nums.length < n; i++){
        if (i % 3 === 0 || /[3]/.test(String(i))) {
            continue;
        }
        nums = [...nums,i]
    };
    return nums[n - 1]
}