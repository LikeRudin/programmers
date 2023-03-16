"""
총 경우의수는 4
배열의 인덱스는
0 1 2 3 
내가 고정한 좌표는 0번

i가 1이면 다른것은 2, 3
i가 2이면 다른것은 1, 3
i가 3이면 다른것은 1, 2
성분갯수가 n개인 배열의 인덱스는 
-n부터 n-1 까지의 숫자로 호출할 수 있다.

3 == -1
2 == -2
1 == -3

모듈로를 생각하다보면n개의 순서쌍을 갖는 
배열에대한일반적인 매칭방법을 찾을수도있을거같지만

머리굴리기 귀찮으니까 이차방정식을 사용하자
좌변은  t(i-2)(i-3) + 1
i 가 1이면  값은 2가되어야한다.
t(-1)(-2) + 1 = 2
t = 1/2
근데 오류나면 또귀찮아지니까
((i-2)*(i-3) + 2) / 2 이라고 하자.

우변은 t(i -1)(i-2) +3
i 가 3일때 값이 2여야한다.
t(2)(1) + 3 = 2
t = -1/2

마찬가지로 
(-(i-1)*(i-2) + 6) /2 라고 하자

index 함수는 맞게 작성한것같은데
테스트를 통과하지 못했다.

round로 반올림을 해주자..

  
"""
def solution(dots):
    answer = 0
    for i in range(1, 4):
        if (dots[0][0] - dots[i][0]) / (dots[0][1] - dots[i][1]) == (dots[round(((i-2)*(i-3) + 2) / 2)][0] - dots[round((-(i-1)*(i-2) + 6) /2)][0]) / (dots[round(((i-2)*(i-3) + 2) / 2)][1] -dots[round((-(i-1)*(i-2) + 6) /2 )][1]):
            answer = 1
        
    return answer

# 위의 함수는 테스트케이스를 통과했다.
# 이제 한줄로 줄이자.

""" 
 lambda 내부에는 for 루프를  직접 사용할 수 없다.
 for 루프를 작성하고 싶으니 list comprehension을 이용하자
 방법은 간단하다. 위의 for문으로 체크하는 if문의 조건은 ture (1) false (0)으로 바뀌어리스트에 저장된다.
"""

# solution = lambda dots: 1 if 1 in [(dots[0][0] - dots[i][0]) / (dots[0][1] - dots[i][1]) == (dots[round(((i-2)*(i-3) + 2) / 2)][0] - dots[round((-(i-1)*(i-2) + 6) /2)][0]) / (dots[round(((i-2)*(i-3) + 2) / 2)][1] -dots[round((-(i-1)*(i-2) + 6) /2 )][1]) for i in range(1,4)] else 0

# 위의코드는 테스트 케이스를 통과했다
# 가독성을 위해 dots를 x로바꾸자


solution = lambda x: 1 if 1 in [(x[0][0] - x[i][0]) / (x[0][1] - x[i][1]) == (x[round(((i-2)*(i-3) + 2) / 2)][0] - x[round((-(i-1)*(i-2) + 6) /2)][0]) / (x[round(((i-2)*(i-3) + 2) / 2)][1] -x[round((-(i-1)*(i-2) + 6) /2 )][1]) for i in range(1,4)] else 0