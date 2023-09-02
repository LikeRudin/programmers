const solution = (N, stages) => {
    // [스테이지, 실패율] 을 성분으로 갖는 배열 생성
    const stagesAndFailureRatios = Array(N).fill(0).map((x,i)=> {
        const challengers = stages.filter(level => level >= i + 1).length;
        const blockedUsers = stages.filter(level => level === i + 1).length ;
        return [i + 1, blockedUsers/challengers]
    });

    // 실패율이 높은 순서대로 내림차순으로 정렬, 만약 실패율이 갖다면 스테이지 번호를 오름차순으로 정렬
    const sortedWithFailureRatio = [...stagesAndFailureRatios].sort((a,b) => {
        const [stageA, ratioA] = a;
        const [stageB, ratioB] = b;
        return (ratioA !== ratioB)? ratioB - ratioA : stageA - stageB;
    });
    // 위의 배열에서 첫번쨰 값인 stage 번호만 남긴 배열을 반환
    const stageArraySortedByFauilureRatio = sortedWithFailureRatio.map(record => record[0])
    return stageArraySortedByFauilureRatio
}