# 6과 n의 최소공배수를 구한다. 이는 6*n이하의 숫자이다.
#이후 6으로 나눈다.
solution = lambda n: [i/6 for i in range(max(6,n), n*6 + 1 ) if i % 6 == 0 and i % n == 0][0]