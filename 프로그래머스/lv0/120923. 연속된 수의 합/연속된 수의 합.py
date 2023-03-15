"""
1. 길이가 num과 일치하는 연속된 숫자로 이루어진 배열을 아무거나 하나 만든다.
2. 그 배열의 성분을 전부 더한값과 total의 차를 구한다.
3. 그 차를 num으로 나눠주면 내가 만든 배열과 정답배열의 갭을 구할 수 있다.
4. 그 갭을 첫항으로 하고 길이가 num과 같은 연속적인 배열을 반환한다.

num이 3이고 토탈이 12인경우
답은 [x, x+1, x+2] 형식일 것이다.
길이가 num과 같은 아무 배열을 만들자.
나는 [1, 2, 3]으로 정했다.
(12 - (1+2+3))/2 = x

x는 1이다.
따라서 [2, 3, 4]가 정답이 된다.

"""
# def solution(num, total):
#     basic = 0
#     for i in range(1, num):
#         basic += i
#     term = (total - number) / num
#     answer = [term + i for i in range(num)]
#     return answer

#위의 코드는 테스트 케이스를 통과했다. 이제 한줄로 바꿔야 한다.

# solution = lambda num, total: [(total-sum([i for i in range(1, num)])) / num +i for i in range(num)]

#위의 코드는 테스트 케이스를 통과했다. 가독성을 위해 num과 total을 x,y로 바꾸자.

solution = lambda x, y: [(y-sum([i for i in range(1, x)]))/ x + i for i in range(x)]
