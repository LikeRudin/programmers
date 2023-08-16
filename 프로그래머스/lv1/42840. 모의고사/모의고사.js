const scorePaper = (studentStyle, answers) => {
    const range = studentStyle.length;
    const scoredTestPaper = answers.filter((answer, index) => answer === studentStyle[index % range]);
    const score = scoredTestPaper.length
    
    return score
}

const calculateHighScore = (arr) => {
    return Math.max(...arr)
}

const selectHighscoreAchievers = (scores,highScore) => {
    const achievers = scores.reduce((acc,cur,index) => {
        if(cur === highScore) {
            acc = [...acc, index + 1];
        } 
        return acc
    }, []);
    return achievers
}


const solution = (answers) => {
    const studentPickStyles = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const scores = studentPickStyles.map((student) => scorePaper(student, answers));
    const highScore = calculateHighScore(scores);
    const highScoreAchievers = selectHighscoreAchievers(scores, highScore);
    return highScoreAchievers;

}

/*
* 함수형으로 분해했지만, scorePaper가 한장만 채점후 반환할지 / 모든 학생의 답안을 채점하고 반환할지에대한 고민이있었다
* 결국 한장만 채점하기로하였다
* studentPickStyle는 solution 함수 본체에 넣어주고 map 메서드를 사용함으로써 점수 배열을 얻는 방법을 간결하게 코딩할수있었다
*/