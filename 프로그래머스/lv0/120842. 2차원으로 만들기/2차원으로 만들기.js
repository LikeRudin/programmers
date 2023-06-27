/*
* parentArray, childArray
* num_list 성분을 childArray에 옮긴다.
* childArray의 길이가 n이되면 parentArray에 저장
* childArray 초기화  
* num_list 순회가 끝 => return parentArray
*/
const solution = (num_list, n) =>{
    const parentArray = [];
    let childArray = [];
    for (let i=0; i < num_list.length; i++){
        childArray.push(num_list[i]);
        if (childArray.length ===n ){
        parentArray.push([...childArray]);
        childArray =[];
        }
    }
    return parentArray
}