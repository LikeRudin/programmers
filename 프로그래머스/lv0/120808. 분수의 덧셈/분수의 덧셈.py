"""
1. 분수의 덧셈을 수행한다
분자:
numer = numer1 * denom2 + numer2 * denom1
분모:
denom = denom1 * denom2

2. 분자와 분모의 최대공약수를 구한다.
gcd = 0
for i in range(1, min(numer, denom)):
    if(numer % i == 0 and denom % i ==0):
    gcd = i
    
3 return numer/gcd, denom/gcd
    


"""
# def solution(numer1, denom1, numer2, denom2):
#     numer = numer1 * denom2 + numer2 * denom1
#     denom = denom1 * denom2
#     for i in range (1, min(numer, denom)):
#         if(numer % i == 0 and denom % i ==0):
#             gcd = i
     
#     return [numer/gcd, denom/gcd]

"""
위의 코드는 테스트케이스를 통과했다.
이제 한줄로 줄여야 한다.
"""
solution = lambda w, x, y, z:  [round(a / max([i for i in range(1, min(w*z + x*y, x*z) +1) if (w*z + x*y) % i == 0 and (x * z) % i == 0])) for a in [w*z + x*y, x*z]]