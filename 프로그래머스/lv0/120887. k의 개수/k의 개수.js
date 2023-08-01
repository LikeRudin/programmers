const solution = (i,j,k) => Object.keys([...Array(j +1)])
.slice(i)
.map(x => x.match(RegExp(k, 'g'))? x.match(RegExp(k, 'g')).length : 0).reduce((acc,item) => acc +=item)
             