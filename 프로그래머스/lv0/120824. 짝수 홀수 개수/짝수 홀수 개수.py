"""
짝수일때만 성분으로 1을추가하는 리스트를 만든다
홀수일때만 성분으로 1을 추가하는 리스트를 만든다

각각의 sum 결과를 포함하는 리스트를 반환한다.
그냥 바로 한줄로 쓰자.
"""

solution = lambda x: [sum([1 for y in x if y % 2 == 0]), sum([1 for y in x if y % 2 == 1])]