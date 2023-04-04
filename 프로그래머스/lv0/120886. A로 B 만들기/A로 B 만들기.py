"""
x의 순서를 바꾸어 after를 만든다
순서를 바꾼다 = 뒤집다가 아님.
가지고있는 성분의 개수가 같은지 확인하고, 길이도 같은지 확인한다.
"""

solution = lambda x,y : 1 if len([i for i in x if x.count(i) == y.count(i)]) == len(y) else 0