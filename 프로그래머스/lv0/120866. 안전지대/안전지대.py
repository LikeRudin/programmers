"""
이차원 배열 matrix는
[1행[],2행[],3행[]]
이런식으로 구현한다.
바깥배열의 인덱스가 row(행)이고
안쪽배열의 인덱스는 column(열)이다.
지뢰가 0행 혹은 4행 이면 위험지대는 4칸 혹은 6칸이다.
열도 마찬가지다. 0열 또는 4열이에위치하면 위험지대는 4칸 혹은 6칸이다.

일단 지뢰가 1개만 있다고 가정해보고 코드를 짜보았다.


def solution(board):
    lb = len(board) - 1
    if (1 in board[0]) or (1 in board[lb]):
        target = board[0] if 1 in board[0] else board[lb] 
        dangerous = 6
        if (target.index(1) == 0 or target.index(lb) == 1):
            dangerous = 4
    else: dangerous = 9
    return 25 - dangerous
이제 일반적인 경우(지뢰가 0개인경우부터 n*n개인 경우까지)
를 구현해보자
"""

"""
좋아 한숨잤으니 다시 생각해보자.
비어있는 2차원 배열을 생성하는방법이떠올랐다.
board 가 4* 4라면
모든 값이 0인 [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
2차원 배열을 만든후
board에서 값이 1인성분을 찾을때마다
내가 생성한 배열에서 지뢰칸 및 인접칸의 성분을 1로바꾸는거다.

"""

# def solution(board):
#     length_board = len(board)
#     upperBound = length_board - 1
#     my_matrix = []
#     column = []
#     """
#     빈 매트릭스 생성하기
#     """
#     for unit in range(0, length_board):
#         for unit in range(0, length_board):
#             column.append(0)
#         my_matrix.append(column)
#         column = []
#     """
#     지뢰감지하기
#     파이썬의 길이 n인 리스트는
#     -n부터 n-1까지의인덱스로접근가능하다.
#     그러므로 0,0에 지뢰가있을때 -1,-1 도 위험지대로 설정되면안된다
#     두개의 if문으로 조건을걸어주자.
#     """
#     for i in range(0, length_board):
#         for j in range(0, length_board):
#             if board[i][j] == 1:
#                 my_matrix[i][j] = 1
#                 if i > 0 and i < upperBound and  j > 0 and j < upperBound:
#                     my_matrix[i - 1][j -1] = 1
#                     my_matrix[i - 1][j] = 1
#                     my_matrix[i - 1][j + 1] = 1
#                     my_matrix[i][j -1] = 1
#                     my_matrix[i][j +1] = 1
#                     my_matrix[i + 1][j -1] = 1
#                     my_matrix[i + 1][j] = 1
#                     my_matrix[i + 1][j + 1] = 1 
#                 if i == 0 and j > 0 and j < upperBound:
#                     my_matrix[i][j -1] = 1
#                     my_matrix[i][j +1] = 1
#                     my_matrix[i + 1][j -1] = 1
#                     my_matrix[i + 1][j] = 1
#                     my_matrix[i + 1][j + 1] = 1 
#                 if i == upperBound  and j > 0 and j < upperBound:
#                     my_matrix[i - 1][j -1] = 1
#                     my_matrix[i - 1][j] = 1
#                     my_matrix[i - 1][j + 1] = 1
#                     my_matrix[i][j -1] = 1
#                     my_matrix[i][j +1] = 1
#                 if j == 0 and i > 0 and i < upperBound:
#                     my_matrix[i - 1][j] = 1
#                     my_matrix[i - 1][j + 1] = 1
#                     my_matrix[i][j +1] = 1
#                     my_matrix[i + 1][j] = 1
#                     my_matrix[i + 1][j + 1] = 1
#                 if j == upperBound and i > 0 and i < upperBound:
#                     my_matrix[i - 1][j -1] = 1
#                     my_matrix[i - 1][j] = 1
#                     my_matrix[i][j -1] = 1
#                     my_matrix[i + 1][j -1] = 1
#                     my_matrix[i + 1][j] = 1
                    
                
                   
#     """
#     위험지대 계산하기
#     my_matrix의 열성분을 각각 더한다.
#     열별로 그럼 위험지대 수가 구해진다.
#     그 수끼리도 전부 더한다.
    
#     이후 board의 크기n*n 에서 빼준다.
#     """
#     answer = (length_board ** 2) - sum([sum(i) for i in my_matrix])
#     return answer
    
    
# 위 코드는테스트를 통과했다.
# 하지만 너무 길고 복잡하다.

"""
일단 각 과정을 최대한 줄여보자
"""
def solution(board):
    len_board = len(board)
    """
    0으로 가득찬 n*n 2차원 리스트 생성
    """
    my_matrix =[[0 for i in range(len_board)] for i in range(len_board)]
    
    """
    지뢰감지
    
    일단 지뢰를 감지한 후, 
    감지한경우 my_matrix의 구역을 순회한다.
    마지막 if문이 한번 실행될때 한개의 성분이 수정된다.
    """
    for i in range(len_board):
        for j in range(len_board):
            if board[i][j] == 1:
                for row in range(-1,2):
                    for col in range(-1,2):
                        _i = i + row
                        _j = j + col
                        if len_board > _i >=0 and len_board > _j >= 0:
                            my_matrix[_i][_j] = 1
    
    answer = (len_board **2) - sum([sum(row) for row in my_matrix])
    return answer

"""
이제 한줄로줄여야한다
"""
                    