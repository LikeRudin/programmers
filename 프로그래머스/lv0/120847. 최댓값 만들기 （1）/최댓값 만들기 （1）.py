"""
max로 배열의 최댓값을 저장한 후
그 값을 배열에서 삭제한 후 
다시 갱신된 배열의 최댓값을 저장한다.

이후 두 최댓값을 곱해주면 된다.
"""
# def solution(numbers):
#     first = max(numbers)
#     numbers.remove(first)
#     second = max(numbers)
#     return first * second

#위의 코드는 테스트케이스를 통과했다.
# 이제 한줄로 줄여야 한다.


solution = lambda x: max([y for y in x if y != max(x)]) * max(x) if len([y for y in x if y != max(x)]) != 0 else max(x) * max(x)