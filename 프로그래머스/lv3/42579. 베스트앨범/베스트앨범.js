/*
* 0. 두개를 합친 배열을 구한다.
* 1. 장르별 조회수합산을 구한다
* 2. 조회수가 많은 순서대로 장르를 나열한 배열을 만든다
* 3. 각 장르별로 2곡씩 고른다
* 4. 모든 값을 넣은 배열을 반환한다.
*/

const getMergedArray = (genres, plays) => {
    const genrePlayIndex = plays.map((num,index) => [genres[index], num,index])
    return genrePlayIndex;
}

const getSortedGenres = (arr) => {
    const genreViewHash = {};
    arr.forEach(item => {
        const [genre, num, _] = item;
        genreViewHash[genre] = (genreViewHash[genre])? genreViewHash[genre] += num: num;
    });
    
    const sortedGenres =Object.entries(genreViewHash).sort((a,b) => (b[1] - a[1])).map(x => {
        const [genre, _ ]= x;
        return genre;
    });
    return sortedGenres
}


const getSongListOfOneGenre = (mergedArray, genre) => {
    const trackForOneGenre = mergedArray.filter(record => record[0] === genre)
    const playAndIndex = trackForOneGenre.map(x=> [x[1], x[2]]).sort((a, b) => (b[0] - a[0]));
    return playAndIndex;
}

const getTopTwoSongs = (trackArray) => {
    if (trackArray.length ===1) {
        return [trackArray[0][1]]
    }
    const max = trackArray[0][0];
    const maxArray = trackArray.filter(item => item[0] === max).map(x => x[1]);
    if(maxArray.length > 1) {
        return maxArray.sort((a,b) => a - b).slice(0,2);
    }

    const second = trackArray[1][0];
    const secondArray =  trackArray.filter(item => item[0] === second).map(x => x[1]);
    if (secondArray.length > 1) {
        secondArray.sort((a,b) => a- b);
    }
    return [maxArray[0], secondArray[0]]
    
}

const solution = (genres, plays) => {
    const mergedArray = getMergedArray(genres,plays);
    const sortedGenres = getSortedGenres(mergedArray);
    let answer = [];
    for (const genre of sortedGenres){
        const songList = getSongListOfOneGenre(mergedArray, genre);
        const songs = getTopTwoSongs(songList);
        answer = [...answer, ...songs];
    }
    return answer;
    
    
    
}