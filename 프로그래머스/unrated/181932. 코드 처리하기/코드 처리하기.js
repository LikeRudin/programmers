function solution(code) {
    let mode = 0;
    let ret = ""
    code.split("").forEach((item, index)=> {
        switch (item) {
            case "1" :
                mode = Number(!Boolean(mode))
                break;
            default: 
                switch(mode) {
                    case 0 : 
                        if (index % 2 === 0){
                            ret += item;}
                        break;
                    case 1 : 
                        if (index % 2 === 1){
                            ret += item;}
                        break;
                    }
                }
                });

    
    const answer = (ret !== "")? ret : "EMPTY"
    return answer;
}