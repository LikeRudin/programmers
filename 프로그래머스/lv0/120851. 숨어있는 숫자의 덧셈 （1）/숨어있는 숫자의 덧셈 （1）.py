"""
숫자만 뽑아낸 후 int 메서드에 넣어준다.
"""
solution = lambda x: sum([int(i) for i in x if i in "123456789"])