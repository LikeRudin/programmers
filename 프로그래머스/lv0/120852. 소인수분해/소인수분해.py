"""
매개변수로 받은 x의 약수가
 1부터 자신-1까지의 약수가 1개뿐이면 저장한다.
"""

solution = lambda x: [ i for i in range(1,x+1) if x % i == 0 and len([j for j in range(1,i ) if i % j == 0 ]) == 1] 