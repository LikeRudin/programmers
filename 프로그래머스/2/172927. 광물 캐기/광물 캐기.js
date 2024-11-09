
// 최소 피로도 구하기 
// 곡괭이질 하면 피로도가 쌓임
// 
// 1. MINERALS의 원소를 다섯개씩묶은 여러개의 배열들을 만든다.
// 2. 각 세트마다 사용 종류 곡괭이별로의 피로도를 구한다  -fatiguabilities
// 3. 전부다 stone을 사용했다고 가정하여 세트별 피로도 배열을 만든다.
// 4. 세트별 피로도값이 큰 순서대로 , 다이아 -철 - 돌을 사용한다
// 5. 만약 광물이 없거나, 곡괭이가 없다면 결과는 종료된다.
const solution = (picks, minerals) => {
    
    const DIA = 'diamond'
    const IRON = 'iron'
    const STONE = 'stone'
    
    const pickTypes = [DIA,IRON,STONE]
    
    const pickNumbers = picks.reduce((acc,cur)=>acc+ +cur,0)
    
    
    // 곡괭이-채취광물-피로도
    const fatiguabilityChart = {
        [DIA]: {[STONE]: 1, [IRON]:1, [DIA]:1},        
        [IRON]: {[STONE]: 1, [IRON]:1, [DIA]:5},
        [STONE]: {[STONE]: 1, [IRON]:5, [DIA]:25},
    }
    
    // 곡괭이 내구도에 맞게 5개씩 쪼개기
    let chunkedMinerals = [] 
    for (let i = 0; i < minerals.length; i += 5) {
        if (chunkedMinerals.length === pickNumbers){
            break;
        }
        chunkedMinerals.push(minerals.slice(i, i + 5));
    }

    
    // 청크단위로 피로도 계산
    const calculateFatigue = (chunk, pickType)=> chunk.reduce((acc,cur)=> acc + fatiguabilityChart[pickType][cur],0)
    
    // 곡괭이별 정보를 담은 
    const chunkDatas = chunkedMinerals
        .map((chunk, index) => ({
            chunk:chunk,
            stoneFatigue: calculateFatigue(chunk, STONE),
            ironFatigue: calculateFatigue(chunk, IRON),
            diaFatigue: calculateFatigue(chunk, DIA)
            })
            )
    
   chunkDatas.sort((a,b) =>
                  a.stoneFatigue !== b.stoneFatigue
                  ? b.stoneFatigue - a.stoneFatigue
                  : a.ironFatigue !== b.ironFatigue
                  ? b.ironFatigue - a.ironFatigue
                  : b.diamondFatigue - a.diamondFatigue)
    
    
    // 곡괭이 개수
    let [diaPicks, ironPicks, stonePicks] = picks
    // 누적 피로도
    let totalFatigue = 0;
    

    for (const chunkData of chunkDatas){
        if (diaPicks>0){
            diaPicks--
            totalFatigue += chunkData.diaFatigue
        } else if (ironPicks > 0){
            ironPicks--
            totalFatigue += chunkData.ironFatigue
        } else if (stonePicks >0){
            stonePicks--
            totalFatigue += chunkData.stoneFatigue
        }else{
            break
        }
        
    }
    
    
    
    return totalFatigue
}