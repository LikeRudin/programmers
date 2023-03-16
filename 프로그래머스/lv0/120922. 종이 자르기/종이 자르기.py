"""
M * N
가로를 M 세로를 N이라 하자
가로 가위질을 한 후 세로가위질을 하자고 할때
가로 가위질을 M -1번 하면 가로길이가 1인 M장의 종이가 생성된다.
생성된 종이한장마다 N-1번의 가위질을 해주어야 한다.
그래서 공식은 다음과 같다. 
M * N 의 가위를 1 * 1 크기로 자르는데에는
(M-1) +  M * (N -1) 번의 가위질이 필요하다.
이를 요약하면 M * N -1 이된다
예시의 종이는 2 * 2 니까
1  + 2 * 1 = 3 이된다.
"""
solution = lambda M, N: M * N - 1