/*
* 1. 장르를 재생수가 많은 순서대로 나열한다.
* 2. 장르내에서 재생수가 제일 큰 곡을 먼저재생
* 3. 재생수가 일치한다면, plays 에서 인덱스가 빠른 곡을 먼저 재생
*/



const getGenresPlaysHash = (genres, plays) => {
    const genresPlays = {}
     plays.forEach((num, index) => {
          genresPlays[genres[index]] = (genresPlays[genres[index]])? genresPlays[genres[index]] += num: genresPlays[genres[index]] = num;
     })
    return genresPlays;
}

const getSortedGenres = (obj) => {
    const genreArray = Object.entries(obj).sort((a,b)  => b[1] - a[1]);
    return genreArray.map(x => x[0]); 
    
}

const getSongListForGenre = (genres,plays, genre) => {
    const indexPlaysHash = {}
    plays.forEach((num, index) => {
        if (genres[index] === genre) {
            indexPlaysHash[index] = num
        }});
    return indexPlaysHash 
    
}

const getTopTwoKeys = (obj) => {
    // 길이가 1일경우에 key를 바로 반환
    const beforeSorted = Object.entries(obj);
    if (beforeSorted.length ===1 ){
        return [beforeSorted[0][0]]
    }
 
    const entries = beforeSorted.sort((a, b) => b[1] - a[1]); 
    
    const max = entries.filter(item=> item[1] === entries[0][1]).map(x => x[0]);
    //최댓값 인덱스가 두개이상일경우
    if (max.length > 1) {
        return max.sort().slice(0,2)
    } else if (max.length === 1 && entries.length > 1) {
        // 두번째값을 갖는 인덱스가 2개이상일경우
        const second = entries.filter(item=> item[1] === entries[1][1]).map(x => x[0]);
        return [max[0], second[0]]
    } // 그냥 처음순서대로 반환
    return [entries[0][0], entries[1][0]]
}



const solution = (genres, plays) => {
    const genresPlaysHash = getGenresPlaysHash(genres, plays);
    const sortedGenres = getSortedGenres(genresPlaysHash)
    let answer = [];
    for (const genre of sortedGenres) {
        const genreHash = getSongListForGenre(genres,plays,genre);
        const indexesOfSongs = getTopTwoKeys(genreHash).map(x => +x);
        answer = [...answer, ...indexesOfSongs];
    }
    return answer

}