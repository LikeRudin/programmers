/*
* 제약조건 1차선도로: 트럭은 1초에 1대만 올라갈 수 있다. 
* 1. 현재 trucksOnBridge트럭들의 남은거리를 1 줄인다. 
    - 위치는 다리 길이부터 , 0이되면 trucksOnBridge에서 pop
* truck_weights의 원소합이 weight를 초과하지 않으면 트럭을 올린다. 
*/

// const solution = (bridge_length, weight, truck_weights) => {
//     let second = 0;
//     let watingTrucks = truck_weights;
//     let currentWeight = 0;
//     let trucksOnBridge = [];
//      while (watingTrucks.length || trucksOnBridge.length){
//         second ++;
//         // 트럭을 이동시키고, 현재 다리에 가해지는 하중을 계산한다.
//         if (trucksOnBridge.length > 0){
//             trucksOnBridge = trucksOnBridge.map(truck => [truck[0], truck[1] -1]);
//             if (0 >= trucksOnBridge[0][1]){
//             trucksOnBridge.slice(1)
//             }
//             currentWeight = trucksOnBridge.reduce((acc,cur) => acc + cur[0], 0);
//         }
//         // 하중한계를 넘지않는다면, 트럭을 하나 더 올린다.
//         if (bridge_length > trucksOnBridge && weight >= currentWeight + watingTrucks[0]) {
//             trucksOnBridge = [...trucksOnBridge, [watingTrucks[0], bridge_length]];
//             watingTrucks = watingTrucks.slice(1);
//         }
        
//     }
//     return second
    
// }
const solution = (bridge_length, weight, truck_weights) => {
    let second = 0;
    let watingTrucks = truck_weights;
    let currentWeight = 0;
    let trucksOnBridge = Array(bridge_length).fill(0)
     while (watingTrucks.length || currentWeight){
        second ++;
        // 트럭을 이동시키고, 현재 다리에 가해지는 하중을 계산한다.
         const out = trucksOnBridge.shift(0);
         currentWeight -= out;
        // 하중한계를 넘지않는다면, 트럭을 하나 더 올린다.
        if (weight >= currentWeight + watingTrucks[0]) {
            trucksOnBridge = [...trucksOnBridge, watingTrucks[0]];
            currentWeight += watingTrucks[0];
            watingTrucks = watingTrucks.slice(1);
        } else {
            trucksOnBridge = [...trucksOnBridge, 0]
        }
     
        
    }
    return second
    
}