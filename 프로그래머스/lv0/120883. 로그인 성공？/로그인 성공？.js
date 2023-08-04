const solution = (id_pw, db) => db.some(x => x[0] === id_pw[0] && x[1] === id_pw[1])? "login" : db.some(x => x[0] === id_pw[0])? "wrong pw" : "fail"
