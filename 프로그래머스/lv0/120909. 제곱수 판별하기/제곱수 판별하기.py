"""
만약 거듭제곱을 구한후, int로 만들어 준후
다시 제곱했을때 원본과 같다면, 그게 제곱수이다
"""

solution = lambda n : 1 if int(n ** 0.5) **2 == n else 2