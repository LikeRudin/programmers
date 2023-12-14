# def solution(array):

#     element_frequencies = {num: array.count(num) for num in array} #빈도저장
#     max_frequency = max(element_frequencies.values()) #최고빈도 저장
#     value_list = list(element_frequencies.values()) # 빈도 리스트 생성
    
#     if value_list.count(max_frequency) == 1:
#         for key in array:
#             if element_frequencies[key] == max_frequency:#최고빈도를 갖는key 추적
#                 answer = key
#                 return answer 
#     else:
#         answer = -1
#     return answer

# 위의 코드는 테스트를 통과했다.
# 좀더 줄여보자


# return 문만 사용, array를 a로 num과 key를 i로 바꿔서 줄 절약
# def solution(a):
#     return -1 if list({i: a.count(i) for i in a}.values()).count(max({i: a.count(i) for i in a}.values())) != 1 else [key for key in {i: a.count(i) for i in a}.keys() if {i: a.count(i) for i in a}[key] == max({i: a.count(i) for i in a}.values())][0]

# 이제 한줄로 줄여야 한다.



solution = lambda a: -1 if list(map(lambda x: x[1], {i: a.count(i) for i in a}.items())).count(max(map(lambda x: x[1], {i: a.count(i) for i in a}.items()))) != 1 else [key for key in {i: a.count(i) for i in a}.keys() if {i: a.count(i) for i in a}[key] == max(map(lambda x: x[1], {i: a.count(i) for i in a}.items()))][0]