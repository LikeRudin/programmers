solution = lambda a: -1 if list(map(lambda x: x[1], {i: a.count(i) for i in a}.items())).count(max(map(lambda x: x[1], {i: a.count(i) for i in a}.items()))) != 1 else [key for key in {i: a.count(i) for i in a}.keys() if {i: a.count(i) for i in a}[key] == max(map(lambda x: x[1], {i: a.count(i) for i in a}.items()))][0]



